import type { MoodId } from "./types";

export interface Track {
  id: string;
  title: string;
  artist: string;
  durationSec: number; // approximate
  videoId: string;
}

export const TRACKS: Record<MoodId, Track[]> = {
  festif: [
    { id: "f1", title: "Happy", artist: "Pharrell Williams", durationSec: 233, videoId: "ZbZSe6N_BXs" },
    { id: "f2", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", durationSec: 270, videoId: "OPf0YbXqDm0" },
    { id: "f3", title: "Levitating", artist: "Dua Lipa", durationSec: 203, videoId: "TUVcZfQe-Kw" },
    { id: "f4", title: "Can't Stop the Feeling", artist: "Justin Timberlake", durationSec: 236, videoId: "ru0K8uYEZWw" },
    { id: "f5", title: "Blinding Lights", artist: "The Weeknd", durationSec: 200, videoId: "fHI8X2OXskQ" },
    { id: "f6", title: "A Sky Full of Stars", artist: "Coldplay", durationSec: 268, videoId: "VPRjCeutOjA" },
    { id: "f7", title: "Roar", artist: "Katy Perry", durationSec: 224, videoId: "CevxZvSJLk8" },
    { id: "f8", title: "I Gotta Feeling", artist: "Black Eyed Peas", durationSec: 291, videoId: "uSD4vsh1zDA" },
  ],
  romantique: [
    { id: "r1", title: "All of Me", artist: "John Legend", durationSec: 269, videoId: "i9rK18u_618" },
    { id: "r2", title: "Perfect", artist: "Ed Sheeran", durationSec: 263, videoId: "UDm5xv_Lqh0" },
    { id: "r3", title: "Don't Know Why", artist: "Norah Jones", durationSec: 187, videoId: "YtG-V8Tioig" },
    { id: "r4", title: "Better Together", artist: "Jack Johnson", durationSec: 207, videoId: "u57d629N5-8" },
    { id: "r5", title: "Stay With Me", artist: "Sam Smith", durationSec: 172, videoId: "pB-5XG-DbAA" },
    { id: "r6", title: "Put Your Records On", artist: "Corinne Bailey Rae", durationSec: 226, videoId: "R2T2J2O6Y9U" },
    { id: "r7", title: "Careless Whisper", artist: "George Michael", durationSec: 300, videoId: "izGwDsrQ1eQ" },
    { id: "r8", title: "La Vie en Rose", artist: "Édith Piaf", durationSec: 198, videoId: "kFzAXMR2aRk" },
  ],
  zen: [
    { id: "z1", title: "Weightless", artist: "Marconi Union", durationSec: 480, videoId: "UfcAVejslrU" },
    { id: "z2", title: "Clair de Lune", artist: "Claude Debussy", durationSec: 305, videoId: "CvFH_6DNRCY" },
    { id: "z3", title: "Experience", artist: "Ludovico Einaudi", durationSec: 345, videoId: "hN_q-_nGv4U" },
    { id: "z4", title: "River Flows In You", artist: "Yiruma", durationSec: 210, videoId: "7maJOI3QMu0" },
    { id: "z5", title: "Sunset Lover", artist: "Petit Biscuit", durationSec: 226, videoId: "uJ_1HMAGb4k" },
    { id: "z6", title: "Gymnopédie No.1", artist: "Erik Satie", durationSec: 190, videoId: "S-Xm7s9eGxU" },
    { id: "z7", title: "Starboy (Lo-Fi)", artist: "The Weeknd", durationSec: 210, videoId: "v-pUvNp6Np6" },
    { id: "z8", title: "Coffee", artist: "beabadoobee (Lo-Fi)", durationSec: 189, videoId: "81961_k4tB4" },
  ],
  energie: [
    { id: "e1", title: "Don't Stop Me Now", artist: "Queen", durationSec: 210, videoId: "HgzGwKwLmgM" },
    { id: "e2", title: "Lose Yourself", artist: "Eminem", durationSec: 326, videoId: "_Yhyp-_hX2s" },
    { id: "e3", title: "Thunderstruck", artist: "AC/DC", durationSec: 292, videoId: "v2AC41dglnM" },
    { id: "e4", title: "Eye of the Tiger", artist: "Survivor", durationSec: 245, videoId: "btPJPFnesV4" },
    { id: "e5", title: "POWER", artist: "Kanye West", durationSec: 292, videoId: "L53gjP-TtGE" },
    { id: "e6", title: "Stronger", artist: "Kanye West", durationSec: 311, videoId: "PsO6ZnUZI0g" },
    { id: "e7", title: "Jump Around", artist: "House of Pain", durationSec: 215, videoId: "KZvNRPW6GYM" },
    { id: "e8", title: "Sabotage", artist: "Beastie Boys", durationSec: 162, videoId: "z5rRZdiu1UE" },
  ],
  nostalgique: [
    { id: "n1", title: "Take On Me", artist: "a-ha", durationSec: 225, videoId: "djV11Xbc914" },
    { id: "n2", title: "Africa", artist: "Toto", durationSec: 295, videoId: "FTQbiNvZqaY" },
    { id: "n3", title: "Sweet Dreams", artist: "Eurythmics", durationSec: 216, videoId: "qeMFqkcPYcg" },
    { id: "n4", title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper", durationSec: 228, videoId: "PIb6AZdTr-A" },
    { id: "n5", title: "Dancing Queen", artist: "ABBA", durationSec: 231, videoId: "xFrGuyw1V8s" },
    { id: "n6", title: "Every Breath You Take", artist: "The Police", durationSec: 251, videoId: "OMOGaugKpzs" },
    { id: "n7", title: "Thriller", artist: "Michael Jackson", durationSec: 358, videoId: "sOnqjkJTMaA" },
    { id: "n8", title: "Don't You (Forget About Me)", artist: "Simple Minds", durationSec: 255, videoId: "CdqoNKCCt7A" },
  ],
  famille: [
    { id: "fa1", title: "Here Comes the Sun", artist: "The Beatles", durationSec: 185, videoId: "KQetemT1sWc" },
    { id: "fa2", title: "Walking on Sunshine", artist: "Katrina & the Waves", durationSec: 238, videoId: "iPUmE-tne5U" },
    { id: "fa3", title: "Shake It Off", artist: "Taylor Swift", durationSec: 219, videoId: "nfWlot6h_JM" },
    { id: "fa4", title: "Good as Hell", artist: "Lizzo", durationSec: 158, videoId: "SmbmeOgWsqE" },
    { id: "fa5", title: "We Are Family", artist: "Sister Sledge", durationSec: 217, videoId: "e5MAg_RU9As" },
    { id: "fa6", title: "September", artist: "Earth, Wind & Fire", durationSec: 215, videoId: "Gs069dndIYk" },
    { id: "fa7", title: "Uptown Girl", artist: "Billy Joel", durationSec: 197, videoId: "hCuMWrfXG4E" },
    { id: "fa8", title: "Best Day of My Life", artist: "American Authors", durationSec: 194, videoId: "Y66j_BUCBMY" },
  ],
};

export function getTracksForMood(moodId: MoodId, targetDurationMin?: number): Track[] {
  const pool = [...(TRACKS[moodId] ?? [])];
  if (pool.length === 0) return [];

  // Shuffle pool to have variety
  const shuffled = pool.sort(() => Math.random() - 0.5);

  if (!targetDurationMin || targetDurationMin <= 0) {
    return shuffled;
  }

  const result: Track[] = [];
  let currentTotalSec = 0;
  const targetSec = targetDurationMin * 60;

  for (const track of shuffled) {
    result.push(track);
    currentTotalSec += track.durationSec;
    // We stop if we've reached the target, but we allow one extra track for buffer
    if (currentTotalSec >= targetSec) {
      break;
    }
  }

  return result;
}

/** Format seconds to m:ss */
export function formatTrackDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
