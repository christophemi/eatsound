export type MoodId =
  | "festif"
  | "romantique"
  | "zen"
  | "energie"
  | "nostalgique"
  | "famille";

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
  label: string;
  emoji: string;
  genre: string;
  color: string;
  glow: string;
  youtubePlaylistId: string;
  description: string;
}
