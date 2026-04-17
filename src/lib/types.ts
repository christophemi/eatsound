export type PhaseId = "essentiels" | "cuisine" | "table";

export type MoodId =
  | "festif"
  | "romantique"
  | "zen"
  | "energie"
  | "nostalgique"
  | "famille"
  | "en_cuisine"
  | "a_table"
  | "italiano"
  | "barbecue"
  | "bistro_parisien"
  | "brunch_chill"
  | "coup_de_feu";

export type MealDurationOption = "none" | "rapide" | "chill" | "all";



export interface RecipeStep {
  id: string;
  description: string;
  durationMinutes: number;
}

export interface Recipe {
  dishName: string;
  mood: MoodId;
  steps: RecipeStep[];
  mealDuration?: MealDurationOption;
}

export interface Mood {
  id: MoodId;
  phaseId: PhaseId;
  label: string;
  emoji: string;
  genre: string;
  color: string;
  glow: string;
  youtubePlaylistId: string;
  description: string;
}

