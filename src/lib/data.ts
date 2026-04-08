import type { Mood } from "./types";

/**
 * Each mood maps to a curated public YouTube playlist.
 * Playlists are chosen for their musical coherence and public availability.
 */
export const MOODS: Mood[] = [
  {
    id: "festif",
    label: "Festif",
    emoji: "🎉",
    genre: "Pop / Dance",
    color: "#ff6b6b",
    glow: "rgba(255,107,107,0.3)",
    youtubePlaylistId: "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG", // Happy / Party Pop
    description: "On fête ça !",
  },
  {
    id: "romantique",
    label: "Romantique",
    emoji: "💫",
    genre: "Jazz / Soul",
    color: "#ff85a2",
    glow: "rgba(255,133,162,0.3)",
    youtubePlaylistId: "PLGBuKfnErZlB4l6hRJ4KgRWMBBcGRz-dL", // Romantic Jazz
    description: "Soirée en amoureux",
  },
  {
    id: "zen",
    label: "Zen",
    emoji: "🌿",
    genre: "Lo-Fi / Ambient",
    color: "#43e97b",
    glow: "rgba(67,233,123,0.3)",
    youtubePlaylistId: "PLOzDu-MXXLliO9fBNZV-_CnWkLNO98RMXE", // Lo-Fi Chill
    description: "Calme & sérénité",
  },
  {
    id: "energie",
    label: "Énergie",
    emoji: "⚡",
    genre: "Rock / Hip-Hop",
    color: "#f7971e",
    glow: "rgba(247,151,30,0.3)",
    youtubePlaylistId: "PLbpi6ZahtOH6Ar_3GPy3workZaU2HZBG7", // Workout / Energy
    description: "À fond les ballons",
  },
  {
    id: "nostalgique",
    label: "Nostalgie",
    emoji: "🌙",
    genre: "Années 80/90",
    color: "#a18cd1",
    glow: "rgba(161,140,209,0.3)",
    youtubePlaylistId: "PLH1OmXNEK69MXNnQoSCJBqFKd3JoUSEox", // 80s 90s Hits
    description: "Retour dans le passé",
  },
  {
    id: "famille",
    label: "Famille",
    emoji: "🏡",
    genre: "Pop Joyeuse",
    color: "#ffd200",
    glow: "rgba(255,210,0,0.3)",
    youtubePlaylistId: "PLcfQmtiAG4ze-5oBN4AEsqeaYZ0bvnYqb", // Family Happy Songs
    description: "Tous ensemble !",
  },
];

export const getMoodById = (id: string): Mood | undefined =>
  MOODS.find((m) => m.id === id);

/** Format minutes into "X h Y min" or "Y min" */
export function formatDuration(minutes: number): string {
  if (minutes <= 0) return "0 min";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
}

/** Generate a YouTube embed URL that shuffles the playlist */
export function buildYouTubeEmbedUrl(playlistId: string): string {
  return `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1&shuffle=1&rel=0&modestbranding=1&playsinline=1`;
}

/** Generate a unique step id */
export function newStepId(): string {
  return `step_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}
