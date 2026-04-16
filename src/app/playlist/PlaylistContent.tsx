"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { getMoodById, formatDuration } from "@/lib/data";
import { getTracksForMood } from "@/lib/tracks";
import type { Recipe, RecipeStep } from "@/lib/types";
import MusicPlayer from "@/components/MusicPlayer";

export default function PlaylistContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"recette" | "musique">("musique");
  const [checkedSteps, setCheckedSteps] = useState<Set<string>>(new Set());

  /* ── Parse data from URL ── */
  const recipe: Recipe | null = useMemo(() => {
    try {
      const raw = searchParams.get("data");
      if (!raw) return null;
      return JSON.parse(decodeURIComponent(raw)) as Recipe;
    } catch {
      return null;
    }
  }, [searchParams]);

  if (!recipe) {
    return (
      <>
        <div className="bg-animated" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100dvh",
            gap: 20,
            padding: 24,
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "3rem" }}>🤔</span>
          <p style={{ color: "var(--text-secondary)" }}>
            Aucune recette trouvée. Retourne créer ta playlist !
          </p>
          <button className="btn-primary" onClick={() => router.push("/")}>
            ← Créer une playlist
          </button>
        </div>
      </>
    );
  }

  const mood = getMoodById(recipe.mood);

  const totalMinutes = useMemo(() => {
    return recipe.steps.reduce((s, st) => s + (st.durationMinutes || 0), 0);
  }, [recipe.steps]);

  const playlistDurationMin = useMemo(() => {
    if (recipe.mealDuration === "all") return 0;
    let extra = 0;
    if (recipe.mealDuration === "rapide") extra = 10;
    if (recipe.mealDuration === "chill") extra = 30;
    return totalMinutes + extra;
  }, [recipe.mealDuration, totalMinutes]);

  const tracks = useMemo(() => {
    return getTracksForMood(recipe.mood, playlistDurationMin);
  }, [recipe.mood, playlistDurationMin]);

  const toggleStep = (id: string) => {
    setCheckedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progressPct =
    recipe.steps.length > 0
      ? Math.round((checkedSteps.size / recipe.steps.length) * 100)
      : 0;

  return (
    <>
      <div className="bg-animated" />

      <main className="app-shell">
        {/* ── Header ── */}
        <div className="result-header fade-up">
          {/* Back */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              className="btn-icon"
              onClick={() => router.push("/")}
              id="back-btn"
              aria-label="Retour"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>EatSound</span>
          </div>

          {/* Dish name */}
          <h1 className="dish-name">{recipe.dishName}</h1>

          {/* Meta badges */}
          <div className="result-meta">
            {mood && (
              <span className="meta-badge" style={{ borderColor: mood.color, color: mood.color }}>
                {mood.emoji} {mood.label}
              </span>
            )}
            {totalMinutes > 0 && <span className="meta-badge">⏱ {formatDuration(totalMinutes)}{recipe.mealDuration && recipe.mealDuration !== "none" ? " recette" : ""}</span>}
            {recipe.mealDuration === "rapide" && <span className="meta-badge">⚡ +10 min repas</span>}
            {recipe.mealDuration === "chill" && <span className="meta-badge">🍷 +30 min repas</span>}
            {recipe.mealDuration === "all" && <span className="meta-badge">🎶 Playlist complète</span>}
            {recipe.steps.length > 0 && (
              <span className="meta-badge">
                📋 {recipe.steps.length} étape{recipe.steps.length > 1 ? "s" : ""}
              </span>
            )}
            {mood && <span className="meta-badge">🎸 {mood.genre}</span>}
          </div>

          {/* Progress bar recette */}
          {recipe.steps.length > 0 && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  PROGRESSION RECETTE <span style={{ fontWeight: 400, opacity: 0.7 }}>(cochez les étapes)</span>
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: progressPct === 100 ? "var(--accent3)" : "var(--accent-light)" }}>
                  {progressPct}%
                </span>
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 999, overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${progressPct}%`,
                    background: progressPct === 100 ? "var(--accent3)" : "linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)",
                    borderRadius: 999,
                    transition: "width 0.4s ease",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div style={{ padding: "16px 20px 0" }}>
          {/* ── Tabs ── */}
          {recipe.steps.length > 0 && (
            <div className="tabs fade-up-d1" style={{ marginBottom: 16 }}>
              <button
                id="tab-musique"
                className={`tab${activeTab === "musique" ? " active" : ""}`}
                onClick={() => setActiveTab("musique")}
              >
                🎵 Musique
              </button>
              <button
                id="tab-recette"
                className={`tab${activeTab === "recette" ? " active" : ""}`}
                onClick={() => setActiveTab("recette")}
              >
                📋 Recette
              </button>
            </div>
          )}

          {/* ── Persistent Music Player ── */}
          {mood && (
            <div className="fade-up">
              <MusicPlayer
                tracks={tracks}
                mood={mood}
                totalMinutes={playlistDurationMin}
                mode={recipe.steps.length === 0 || activeTab === "musique" ? "full" : "mini"}
              />
            </div>
          )}

          {/* ── Recette View ── */}
          {activeTab === "recette" && (
            <div className="fade-up" style={{ marginTop: 16 }}>
              <div className="card">
                <div className="recipe-steps">
                  {recipe.steps.map((step: RecipeStep, idx: number) => {
                    const done = checkedSteps.has(step.id);
                    return (
                      <div
                        key={step.id}
                        className="recipe-step"
                        style={{ 
                          opacity: done ? 0.7 : 1,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 16,
                          padding: "12px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          transition: "all 0.2s ease"
                        }}
                        onClick={() => toggleStep(step.id)}
                      >
                        <div
                          className="step-badge"
                          style={{
                            flexShrink: 0,
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            color: "#fff",
                            background: done
                              ? "var(--accent3)"
                              : "linear-gradient(135deg, var(--accent) 0%, #a055ff 100%)",
                            boxShadow: done ? "0 0 10px rgba(67,233,123,0.3)" : "none",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {done ? "✓" : idx + 1}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                            <p
                              className="step-text"
                              style={{ 
                                textDecoration: done ? "line-through" : "none",
                                color: done ? "var(--text-muted)" : "var(--text-primary)",
                                margin: 0,
                                fontSize: "0.95rem",
                                fontWeight: done ? 400 : 500
                              }}
                            >
                              {step.description}
                            </p>
                            {done && (
                              <span style={{ 
                                fontSize: "0.65rem", 
                                background: "var(--accent3)", 
                                color: "#000", 
                                padding: "2px 6px", 
                                borderRadius: 4, 
                                fontWeight: 800,
                                textTransform: "uppercase"
                              }}>
                                Fini
                              </span>
                            )}
                          </div>
                          {step.durationMinutes > 0 && (
                            <span className="step-duration" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                              ⏱ {formatDuration(step.durationMinutes)}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {progressPct === 100 && (
                  <div
                    style={{
                      marginTop: 20,
                      padding: "16px",
                      background: "rgba(67,233,123,0.12)",
                      border: "1px solid rgba(67,233,123,0.3)",
                      borderRadius: "var(--radius-md)",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>🎉</span>
                    <p style={{ fontWeight: 700, color: "var(--accent3)", marginTop: 4 }}>
                      Recette terminée ! Bon appétit !
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── New recipe CTA ── */}
          <div style={{ marginTop: 20, paddingBottom: 8 }}>
            <button
              id="new-recipe-btn"
              className="btn-ghost"
              style={{ width: "100%", padding: "14px" }}
              onClick={() => router.push("/")}
            >
              ← Nouvelle recette
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
