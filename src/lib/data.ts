import type { Mood, PhaseId } from "./types";

export const PHASES: Record<PhaseId, { label: string; emoji: string }> = {
  essentiels: { label: "Les Essentiels", emoji: "✨" },
  cuisine: { label: "En Cuisine", emoji: "👨‍🍳" },
  table: { label: "À Table", emoji: "🍷" },
};

/**
 * Each mood maps to a curated public YouTube playlist.
 */
export const MOODS: Mood[] = [
  // --- ESSENTIELS ---
  {
    id: "festif",
    phaseId: "essentiels",
    label: "Festif",
    emoji: "🎉",
    genre: "Pop / Dance",
    color: "#ff6b6b",
    glow: "rgba(255,107,107,0.3)",
    youtubePlaylistId: "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    description: "On fête ça !",
  },
  {
    id: "romantique",
    phaseId: "essentiels",
    label: "Romantique",
    emoji: "💫",
    genre: "Jazz / Soul",
    color: "#ff85a2",
    glow: "rgba(255,133,162,0.3)",
    youtubePlaylistId: "PLGBuKfnErZlB4l6hRJ4KgRWMBBcGRz-dL",
    description: "Soirée en amoureux",
  },
  {
    id: "zen",
    phaseId: "essentiels",
    label: "Zen",
    emoji: "🌿",
    genre: "Lo-Fi / Ambient",
    color: "#43e97b",
    glow: "rgba(67,233,123,0.3)",
    youtubePlaylistId: "PLOzDu-MXXLliO9fBNZV-_CnWkLNO98RMXE",
    description: "Calme & sérénité",
  },
  {
    id: "energie",
    phaseId: "essentiels",
    label: "Énergie",
    emoji: "⚡",
    genre: "Rock / Hip-Hop",
    color: "#f7971e",
    glow: "rgba(247,151,30,0.3)",
    youtubePlaylistId: "PLbpi6ZahtOH6Ar_3GPy3workZaU2HZBG7",
    description: "À fond les ballons",
  },
  {
    id: "nostalgique",
    phaseId: "essentiels",
    label: "Nostalgie",
    emoji: "🌙",
    genre: "Années 80/90",
    color: "#a18cd1",
    glow: "rgba(161,140,209,0.3)",
    youtubePlaylistId: "PLH1OmXNEK69MXNnQoSCJBqFKd3JoUSEox",
    description: "Retour dans le passé",
  },
  {
    id: "famille",
    phaseId: "essentiels",
    label: "Famille",
    emoji: "🏡",
    genre: "Pop Joyeuse",
    color: "#ffd200",
    glow: "rgba(255,210,0,0.3)",
    youtubePlaylistId: "PLcfQmtiAG4ze-5oBN4AEsqeaYZ0bvnYqb",
    description: "Tous ensemble !",
  },

  // --- CUISINE ---
  {
    id: "coup_de_feu",
    phaseId: "cuisine",
    label: "Coup de Feu",
    emoji: "🔥",
    genre: "Rock Énergique",
    color: "#f093fb",
    glow: "rgba(240,147,251,0.3)",
    youtubePlaylistId: "PLx0_coup_de_feu",
    description: "Reste concentré !",
  },
  {
    id: "en_cuisine",
    phaseId: "cuisine",
    label: "Pop / Funk",
    emoji: "🕺",
    genre: "Groovy & Pop",
    color: "#ff9a9e",
    glow: "rgba(255,154,158,0.3)",
    youtubePlaylistId: "PLx0_en_cuisine",
    description: "Cuisine en dansant",
  },
  {
    id: "italiano",
    phaseId: "cuisine",
    label: "Italien",
    emoji: "🍝",
    genre: "Classiques IT",
    color: "#00a86b",
    glow: "rgba(0,168,107,0.3)",
    youtubePlaylistId: "PLx0_italiano",
    description: "Mamma Mia !",
  },
  {
    id: "barbecue",
    phaseId: "cuisine",
    label: "Barbecue",
    emoji: "🥩",
    genre: "Rock / Country",
    color: "#ff4e50",
    glow: "rgba(255,78,80,0.3)",
    youtubePlaylistId: "PLx0_barbecue",
    description: "L'été arrive",
  },

  // --- TABLE ---
  {
    id: "brunch_chill",
    phaseId: "table",
    label: "Brunch",
    emoji: "🥞",
    genre: "Folk / Acoustic",
    color: "#84fab0",
    glow: "rgba(132,250,176,0.3)",
    youtubePlaylistId: "PLx0_brunch",
    description: "Dimanche matin",
  },
  {
    id: "a_table",
    phaseId: "table",
    label: "Jazzy",
    emoji: "🎷",
    genre: "Standard Jazz",
    color: "#f6d365",
    glow: "rgba(246,211,101,0.3)",
    youtubePlaylistId: "PLx0_a_table",
    description: "Ambiance feutrée",
  },
  {
    id: "bistro_parisien",
    phaseId: "table",
    label: "Bistro",
    emoji: "🍷",
    genre: "Standard FR",
    color: "#4facfe",
    glow: "rgba(79,172,254,0.3)",
    youtubePlaylistId: "PLx0_bistro",
    description: "Quartier Latin",
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
