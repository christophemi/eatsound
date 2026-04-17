"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Track } from "@/lib/tracks";
import { formatTrackDuration } from "@/lib/tracks";
import type { Mood } from "@/lib/types";

/* ── YouTube IFrame API types ── */
declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement | string,
        opts: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: () => void;
            onStateChange?: (e: { data: number }) => void;
            onError?: (e: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { ENDED: number; PLAYING: number; PAUSED: number; BUFFERING: number };
    };
    onYouTubeIframeAPIReady: () => void;
  }
  interface YTPlayer {
    playVideo(): void;
    pauseVideo(): void;
    stopVideo(): void;
    loadVideoById(videoId: string): void;
    getCurrentTime(): number;
    getDuration(): number;
    getPlayerState(): number;
    destroy(): void;
  }
}

interface MusicPlayerProps {
  tracks: Track[];
  mood: Mood;
  totalMinutes: number;
  mode?: "full" | "mini";
}

export default function MusicPlayer({ tracks, mood, totalMinutes, mode = "full" }: MusicPlayerProps) {
  const playerRef = useRef<YTPlayer | null>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const watchdogTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100
  const [currentTime, setCurrentTime] = useState(0);

  // Refs to avoid stale closures in YouTube event handlers
  const currentIdxRef = useRef(currentIdx);
  const tracksRef = useRef(tracks);
  const stateChangeRef = useRef<((e: { data: number }) => void) | null>(null);
  const errorRef = useRef<((e: { data: number }) => void) | null>(null);

  useEffect(() => {
    currentIdxRef.current = currentIdx;
  }, [currentIdx]);

  useEffect(() => {
    tracksRef.current = tracks;
  }, [tracks]);

  // Update handler refs to avoid stale closures
  useEffect(() => {
    stateChangeRef.current = handleStateChange;
    errorRef.current = handlePlayerError;
  });

  const currentTrack = tracks[currentIdx];

  /* ── Load YouTube IFrame API ── */
  useEffect(() => {
    const existingScript = document.getElementById("yt-iframe-api");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "yt-iframe-api";
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    const initPlayer = () => {
      if (!iframeContainerRef.current) return;
      playerRef.current = new window.YT.Player(iframeContainerRef.current, {
        videoId: tracks[0].videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            setIsReady(true);
            // Attempt auto-start on mount (especially useful after click from home)
            playerRef.current?.playVideo();
            startWatchdog();
          },
          onStateChange: (e: { data: number }) => stateChangeRef.current?.(e),
          onError: (e: { data: number }) => errorRef.current?.(e),
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
      if (watchdogTimerRef.current) clearTimeout(watchdogTimerRef.current);
      playerRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStateChange = (e: { data: number }) => {
    if (!window.YT) return;
    const { PLAYING, PAUSED, ENDED } = window.YT.PlayerState;
    if (e.data === PLAYING) {
      setIsPlaying(true);
      startProgressTracking();
      stopWatchdog();
    } else if (e.data === PAUSED) {
      setIsPlaying(false);
      stopProgressTracking();
    } else if (e.data === ENDED) {
      setIsPlaying(false);
      stopProgressTracking();
      handleAutoAdvance();
    }
  };

  const handlePlayerError = (e: { data: number }) => {
    console.warn("YouTube Player Error (handled):", e.data);
    // Error 100: Video not found or private
    // Error 101/150: Embedding not allowed
    stopWatchdog();
    handleAutoAdvance();
  };

  const handleAutoAdvance = () => {
    const nextIdx = (currentIdxRef.current + 1) % tracksRef.current.length;
    playTrack(nextIdx);
  };

  const startWatchdog = () => {
    stopWatchdog();
    watchdogTimerRef.current = setTimeout(() => {
      console.warn("Watchdog triggered: Video stuck or blocked. Skipping...");
      handleAutoAdvance();
    }, 4000); // 4 seconds timeout
  };

  const stopWatchdog = () => {
    if (watchdogTimerRef.current) {
      clearTimeout(watchdogTimerRef.current);
      watchdogTimerRef.current = null;
    }
  };

  const startProgressTracking = () => {
    stopProgressTracking();
    progressInterval.current = setInterval(() => {
      if (!playerRef.current) return;
      const cur = playerRef.current.getCurrentTime();
      const dur = playerRef.current.getDuration();
      if (dur > 0) {
        setProgress((cur / dur) * 100);
        setCurrentTime(Math.floor(cur));
      }
    }, 500);
  };

  const stopProgressTracking = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  /* ── Controls ── */
  const togglePlay = useCallback(() => {
    if (!isReady || !playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
      startWatchdog();
    }
  }, [isReady, isPlaying]);

  const playTrack = useCallback(
    (idx: number) => {
      if (!isReady || !playerRef.current) return;
      setCurrentIdx(idx);
      setProgress(0);
      setCurrentTime(0);
      // loadVideoById usually autoplays, but we force playVideo for reliability
      playerRef.current.loadVideoById(tracksRef.current[idx].videoId);
      playerRef.current.playVideo();
      startWatchdog();
    },
    [isReady]
  );

  const playPrev = useCallback(() => {
    const idx = (currentIdx - 1 + tracks.length) % tracks.length;
    playTrack(idx);
  }, [currentIdx, tracks.length, playTrack]);

  const playNext = useCallback(() => {
    const idx = (currentIdx + 1) % tracks.length;
    playTrack(idx);
  }, [currentIdx, tracks.length, playTrack]);

  /* ── Derived ── */
  const trackDur = currentTrack?.durationSec ?? 0;
  const remainingPlaylistSec = tracks
    .slice(currentIdx)
    .reduce((s, t) => s + t.durationSec, 0);

  const isMini = mode === "mini";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* ── Hidden YouTube iframe (ALWAYS MOUNTED) ── */}
      <div
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <div ref={iframeContainerRef} />
      </div>

      {isMini ? (
        /* ── MINI PLAYER MODE ── */
        <div
          className="card card-glow"
          style={{
            padding: "10px 16px",
            background: `linear-gradient(90deg, ${mood.color}22 0%, var(--bg-card) 100%)`,
            borderColor: mood.color + "44",
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "sticky",
            top: 0,
            zIndex: 10,
            borderRadius: "var(--radius-md)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Mini Emoji / Artwork */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "20%",
              background: mood.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              flexShrink: 0,
              boxShadow: isPlaying ? `0 0 12px ${mood.color}88` : "none",
            }}
          >
            {mood.emoji}
          </div>

          {/* Mini Info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentTrack?.title}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentTrack?.artist}
            </div>
            {/* Tiny progress bar */}
            <div
              style={{
                height: 2,
                background: "rgba(255,255,255,0.1)",
                marginTop: 4,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: mood.color,
                  transition: "width 0.5s linear",
                }}
              />
            </div>
          </div>

          {/* Mini Controls */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={togglePlay}
              disabled={!isReady}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button
              onClick={playNext}
              disabled={!isReady}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 3.9V8.1L8.5 12zM16 6h2v12h-2z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        /* ── FULL PLAYER MODE (EXISTING UI) ── */
        <>
          <div
            className="card card-glow"
            style={{
              background: `linear-gradient(135deg, ${mood.color}22 0%, var(--bg-card) 60%)`,
              borderColor: mood.color + "55",
            }}
          >
            {/* Artwork */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/7",
                borderRadius: "var(--radius-md)",
                background: `linear-gradient(135deg, ${mood.color}55 0%, ${mood.color}11 100%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Animated rings */}
              {isPlaying && (
                <>
                  <div style={ringStyle(mood.color, 0)} />
                  <div style={ringStyle(mood.color, 0.3)} />
                  <div style={ringStyle(mood.color, 0.6)} />
                </>
              )}
              <span style={{ fontSize: "3rem", position: "relative", zIndex: 1 }}>
                {mood.emoji}
              </span>
              {!isReady && (
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: mood.color,
                    marginTop: 4,
                    fontWeight: 600,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Chargement…
                </span>
              )}
            </div>

            {/* Track info */}
            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {currentTrack?.title}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginTop: 2,
                }}
              >
                {currentTrack?.artist}
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ marginBottom: 6 }}>
              <div
                style={{
                  height: 4,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${mood.color} 0%, ${mood.color}aa 100%)`,
                    borderRadius: 999,
                    transition: "width 0.5s linear",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 4,
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>{formatTrackDuration(currentTime)}</span>
                <span>{formatTrackDuration(trackDur)}</span>
              </div>
            </div>

            {/* Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                marginTop: 8,
              }}
            >
              <ControlBtn onClick={playPrev} disabled={!isReady} title="Précédent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                </svg>
              </ControlBtn>

              <button
                id="play-pause-btn"
                onClick={togglePlay}
                disabled={!isReady}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: isReady
                    ? `linear-gradient(135deg, ${mood.color} 0%, ${mood.color}bb 100%)`
                    : "rgba(255,255,255,0.1)",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: isReady ? "pointer" : "not-allowed",
                  boxShadow: isReady ? `0 4px 20px ${mood.color}55` : "none",
                  transition: "all 0.2s",
                  color: "#fff",
                }}
              >
                {isPlaying ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <ControlBtn onClick={playNext} disabled={!isReady} title="Suivant">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 3.9V8.1L8.5 12zM16 6h2v12h-2z" />
                </svg>
              </ControlBtn>
            </div>

            {/* Playlist info */}
            <div
              style={{
                marginTop: 14,
                paddingTop: 12,
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              <span>
                {currentIdx + 1} / {tracks.length} titres
              </span>
              <span>~{Math.ceil(remainingPlaylistSec / 60)} min restantes</span>
            </div>
          </div>

          {/* ── Playlist list ── */}
          <div className="card">
            <p className="label" style={{ marginBottom: 12 }}>
              🎵 Playlist — {mood.genre}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {tracks.map((track, idx) => {
                const isSelected = idx === currentIdx;
                return (
                  <button
                    key={track.id}
                    id={`track-${track.id}`}
                    onClick={() => playTrack(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 12px",
                      background: isSelected ? `${mood.color}18` : "transparent",
                      border: "none",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      transition: "background 0.18s",
                    }}
                  >
                    {/* Index / playing icon */}
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: isSelected ? mood.color : "rgba(255,255,255,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: isSelected ? "#fff" : "var(--text-muted)",
                        transition: "all 0.2s",
                      }}
                    >
                      {isSelected && isPlaying ? <span style={{ letterSpacing: "-1px" }}>▶</span> : idx + 1}
                    </div>

                    {/* Title + artist */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: isSelected ? 700 : 500,
                          color: isSelected ? mood.color : "var(--text-primary)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {track.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {track.artist}
                      </div>
                    </div>

                    {/* Duration */}
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        flexShrink: 0,
                      }}
                    >
                      {formatTrackDuration(track.durationSec)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Total playlist duration */}
            <div
              style={{
                marginTop: 12,
                paddingTop: 10,
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
              }}
            >
              <span>{tracks.length} titres</span>
              <span>{Math.floor(tracks.reduce((s, t) => s + t.durationSec, 0) / 60)} min au total</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Helper components ── */
function ControlBtn({
  onClick,
  disabled,
  title,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        color: disabled ? "var(--text-muted)" : "var(--text-primary)",
        transition: "all 0.18s",
      }}
    >
      {children}
    </button>
  );
}

/* ── Animated pulse ring style ── */
function ringStyle(color: string, delay: number): React.CSSProperties {
  return {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: "50%",
    border: `2px solid ${color}`,
    animation: `pulseRing 2s ${delay}s ease-out infinite`,
    opacity: 0,
  };
}
