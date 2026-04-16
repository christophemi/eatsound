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
    { id: "f5", title: "Blinding Lights", artist: "The Weeknd", durationSec: 199, videoId: "XwxLwG2_Sxk" },
    { id: "f6", title: "A Sky Full of Stars", artist: "Coldplay", durationSec: 266, videoId: "NDonh28AY3I" },
    { id: "f7", title: "Roar", artist: "Katy Perry", durationSec: 224, videoId: "CevxZvSJLk8" },
    { id: "f8", title: "I Gotta Feeling", artist: "Black Eyed Peas", durationSec: 291, videoId: "uSD4vsh1zDA" },
    { id: "f9", title: "Watermelon Sugar", artist: "Harry Styles", durationSec: 174, videoId: "nQA97xS49LQ" },
    { id: "f10", title: "Dance Monkey", artist: "Tones and I", durationSec: 209, videoId: "q0hyYWKXF0Q" },
    { id: "f11", title: "Shape of You", artist: "Ed Sheeran", durationSec: 233, videoId: "JGwWNGJdvx8" },
    { id: "f12", title: "Fireball", artist: "Pitbull", durationSec: 235, videoId: "WJT5SGS6qkY" },
    { id: "f13", title: "Crazy In Love", artist: "Beyoncé", durationSec: 236, videoId: "ViwtNLUqkMY" },
    { id: "f14", title: "24K Magic", artist: "Bruno Mars", durationSec: 226, videoId: "UqyT8IEBkvY" },
    { id: "f15", title: "Get Lucky", artist: "Daft Punk", durationSec: 248, videoId: "5NV6Rdv1a3I" },
    { id: "f16", title: "Save Your Tears", artist: "The Weeknd", durationSec: 215, videoId: "XXYlFuWEuKI" },
    { id: "f17", title: "Don't Stop The Music", artist: "Rihanna", durationSec: 267, videoId: "yd8jh9QYfEs" },
    { id: "f18", title: "SexyBack", artist: "Justin Timberlake", durationSec: 242, videoId: "3gOHvDP_vCs" },
  ],
  romantique: [
    { id: "r1", title: "All of Me", artist: "John Legend", durationSec: 269, videoId: "QfgJQUiQFes" },
    { id: "r2", title: "Perfect", artist: "Ed Sheeran", durationSec: 263, videoId: "kPhpHvnnn0Q" },
    { id: "r3", title: "Don't Know Why", artist: "Norah Jones", durationSec: 187, videoId: "81RuS9xP-Vg" },
    { id: "r4", title: "Better Together", artist: "Jack Johnson", durationSec: 207, videoId: "mM7jJt0vEAA" },
    { id: "r5", title: "Stay With Me", artist: "Sam Smith", durationSec: 172, videoId: "pB-5XG-DbAA" },
    { id: "r6", title: "Put Your Records On", artist: "Corinne Bailey Rae", durationSec: 244, videoId: "u7Mf_ZjI2Pg" },
    { id: "r7", title: "Careless Whisper", artist: "George Michael", durationSec: 300, videoId: "izGwDsrQ1eQ" },
    { id: "r8", title: "Another Love", artist: "Tom Odell", durationSec: 241, videoId: "Jkj36B1YuDU" },
    { id: "r9", title: "I Will Always Love You", artist: "Whitney Houston", durationSec: 271, videoId: "3JWTaaS7LdU" },
    { id: "r10", title: "My Heart Will Go On", artist: "Celine Dion", durationSec: 275, videoId: "p79GmLNLMrY" },
    { id: "r11", title: "Someone Like You", artist: "Adele", durationSec: 285, videoId: "hLQl3WQQoQ0" },
    { id: "r12", title: "Can't Help Falling In Love", artist: "Elvis Presley", durationSec: 182, videoId: "vGJTaP6anOU" },
    { id: "r13", title: "I Don't Want to Miss a Thing", artist: "Aerosmith", durationSec: 299, videoId: "JkK8g6FMEXE" },
    { id: "r14", title: "Just The Way You Are", artist: "Bruno Mars", durationSec: 220, videoId: "LjhCEhWiKXk" },
    { id: "r15", title: "At Last", artist: "Etta James", durationSec: 180, videoId: "S-cbOl96RFM" },
    { id: "r16", title: "Yellow", artist: "Coldplay", durationSec: 266, videoId: "yKNxeF4KMsY" },
    { id: "r17", title: "Thinking Out Loud", artist: "Ed Sheeran", durationSec: 281, videoId: "lp-EO5I60KA" },
    { id: "r18", title: "A Thousand Years", artist: "Christina Perri", durationSec: 285, videoId: "rtOvBOTyX00" },
    { id: "r19", title: "Say You Won't Let Go", artist: "James Arthur", durationSec: 285, videoId: "o23acz-QQnc" },
    { id: "r20", title: "Still Loving You", artist: "Scorpions", durationSec: 371, videoId: "3UVO7BMUQzQ" },
    { id: "r21", title: "If I Ain't Got You", artist: "Alicia Keys", durationSec: 228, videoId: "P1pIzbHC1Z4" },
  ],
  zen: [
    { id: "z1", title: "Weightless", artist: "Marconi Union", durationSec: 480, videoId: "UfcAVejslrU" },
    { id: "z2", title: "Clair de Lune", artist: "Claude Debussy", durationSec: 305, videoId: "CvFH_6DNRCY" },
    { id: "z3", title: "Experience", artist: "Ludovico Einaudi", durationSec: 345, videoId: "hN_q-_nGv4U" },
    { id: "z4", title: "River Flows In You", artist: "Yiruma", durationSec: 210, videoId: "7maJOI3QMu0" },
    { id: "z5", title: "Sunset Lover", artist: "Petit Biscuit", durationSec: 226, videoId: "uJ_1HMAGb4k" },
    { id: "z6", title: "Gymnopédie No.1", artist: "Erik Satie", durationSec: 190, videoId: "S-Xm7s9eGxU" },
    { id: "z7", title: "Starboy (Lo-Fi)", artist: "The Weeknd", durationSec: 279, videoId: "NrSgWKx5l8w" },
    { id: "z8", title: "Coffee", artist: "beabadoobee (Lo-Fi)", durationSec: 127, videoId: "KWCBBjWqyEY" },
    { id: "z9", title: "Porcelain", artist: "Moby", durationSec: 241, videoId: "13EifDb4GYs" },
    { id: "z10", title: "Orinoco Flow", artist: "Enya", durationSec: 266, videoId: "kZ8KK8u9dN8" },
    { id: "z11", title: "An Ending (Ascent)", artist: "Brian Eno", durationSec: 271, videoId: "It4WxQ6dnn0" },
    { id: "z12", title: "Time", artist: "Hans Zimmer", durationSec: 275, videoId: "RxabLA7UQ9k" },
    { id: "z13", title: "Nuvole Bianche", artist: "Ludovico Einaudi", durationSec: 365, videoId: "fEOJQawykD0" },
    { id: "z14", title: "Comptine d'un autre été", artist: "Yann Tiersen", durationSec: 195, videoId: "e6Po2lDHD1I" },
    { id: "z15", title: "Hoppipolla", artist: "Sigur Ros", durationSec: 269, videoId: "-vOioOGX1ic" },
    { id: "z16", title: "Holocene", artist: "Bon Iver", durationSec: 337, videoId: "TWcyIpul8OE" },
    { id: "z17", title: "Only The Winds", artist: "Olafur Arnalds", durationSec: 258, videoId: "xO8UdIgrEV0" },
    { id: "z18", title: "4 AM", artist: "Kaskade", durationSec: 260, videoId: "ovsjkYytGOU" },
  ],
  energie: [
    { id: "e1", title: "Don't Stop Me Now", artist: "Queen", durationSec: 210, videoId: "HgzGwKwLmgM" },
    { id: "e2", title: "Lose Yourself", artist: "Eminem", durationSec: 326, videoId: "_Yhyp-_hX2s" },
    { id: "e3", title: "Thunderstruck", artist: "AC/DC", durationSec: 292, videoId: "v2AC41dglnM" },
    { id: "e4", title: "Eye of the Tiger", artist: "Survivor", durationSec: 245, videoId: "btPJPFnesV4" },
    { id: "e5", title: "POWER", artist: "Kanye West", durationSec: 292, videoId: "L53gjP-TtGE" },
    { id: "e6", title: "Stronger", artist: "Kanye West", durationSec: 311, videoId: "PsO6ZnUZI0g" },
    { id: "e7", title: "Jump Around", artist: "House of Pain", durationSec: 214, videoId: "ZsXRwQRrxkU" },
    { id: "e8", title: "Sabotage", artist: "Beastie Boys", durationSec: 162, videoId: "z5rRZdiu1UE" },
    { id: "e9", title: "The Pretender", artist: "Foo Fighters", durationSec: 270, videoId: "SBjQ9tuuTJQ" },
    { id: "e10", title: "In The End", artist: "Linkin Park", durationSec: 216, videoId: "eVTXPUF4Oz4" },
    { id: "e11", title: "Smells Like Teen Spirit", artist: "Nirvana", durationSec: 278, videoId: "hTWKbfoikeg" },
    { id: "e12", title: "Mr. Brightside", artist: "The Killers", durationSec: 228, videoId: "gGdGFtwCNBE" },
    { id: "e13", title: "Bangarang", artist: "Skrillex", durationSec: 236, videoId: "HxIHtDDjqWE" },
    { id: "e14", title: "Enter Sandman", artist: "Metallica", durationSec: 331, videoId: "CD-E-LDc384" },
    { id: "e15", title: "Killing In The Name", artist: "Rage Against The Machine", durationSec: 314, videoId: "bWXazVhlyxQ" },
    { id: "e16", title: "Hey Ya!", artist: "Outkast", durationSec: 235, videoId: "PWgvGjAhvIw" },
    { id: "e17", title: "Seven Nation Army", artist: "The White Stripes", durationSec: 232, videoId: "0J2QdDbelmY" },
    { id: "e18", title: "Song 2", artist: "Blur", durationSec: 121, videoId: "SSbBvKaM6sk" },
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
    { id: "n9", title: "Bohemian Rhapsody", artist: "Queen", durationSec: 354, videoId: "fJ9rUzIMcZQ" },
    { id: "n10", title: "Don't Stop Believin'", artist: "Journey", durationSec: 250, videoId: "1k8craCGpgs" },
    { id: "n11", title: "Livin' On A Prayer", artist: "Bon Jovi", durationSec: 249, videoId: "lDK9QqIzhwk" },
    { id: "n12", title: "Losing My Religion", artist: "R.E.M.", durationSec: 270, videoId: "xwtdhWltSIg" },
    { id: "n13", title: "Wonderwall", artist: "Oasis", durationSec: 278, videoId: "6hzrDeceEKc" },
    { id: "n14", title: "Wannabe", artist: "Spice Girls", durationSec: 173, videoId: "gJLIiF15wjQ" },
    { id: "n15", title: "...Baby One More Time", artist: "Britney Spears", durationSec: 236, videoId: "C-u5WLJ9Yk4" },
    { id: "n16", title: "I Want It That Way", artist: "Backstreet Boys", durationSec: 213, videoId: "4fndeDfaWCg" },
    { id: "n17", title: "Never Gonna Give You Up", artist: "Rick Astley", durationSec: 212, videoId: "dQw4w9WgXcQ" },
    { id: "n18", title: "I Wanna Dance", artist: "Whitney Houston", durationSec: 290, videoId: "eH3giaIzONA" },
  ],
  famille: [
    { id: "fa1", title: "Here Comes the Sun", artist: "The Beatles", durationSec: 185, videoId: "KQetemT1sWc" },
    { id: "fa2", title: "Walking on Sunshine", artist: "Katrina & the Waves", durationSec: 238, videoId: "iPUmE-tne5U" },
    { id: "fa3", title: "Shake It Off", artist: "Taylor Swift", durationSec: 219, videoId: "nfWlot6h_JM" },
    { id: "fa4", title: "Good as Hell", artist: "Lizzo", durationSec: 158, videoId: "SmbmeOgWsqE" },
    { id: "fa5", title: "We Are Family", artist: "Sister Sledge", durationSec: 185, videoId: "uyGY2NfYpeE" },
    { id: "fa6", title: "September", artist: "Earth, Wind & Fire", durationSec: 215, videoId: "Gs069dndIYk" },
    { id: "fa7", title: "Uptown Girl", artist: "Billy Joel", durationSec: 197, videoId: "hCuMWrfXG4E" },
    { id: "fa8", title: "Best Day of My Life", artist: "American Authors", durationSec: 194, videoId: "Y66j_BUCBMY" },
    { id: "fa9", title: "Sugar", artist: "Maroon 5", durationSec: 301, videoId: "09R8_2nJtjg" },
    { id: "fa10", title: "All Star", artist: "Smash Mouth", durationSec: 199, videoId: "L_jWHffIx5E" },
    { id: "fa11", title: "Fireflies", artist: "Owl City", durationSec: 224, videoId: "QBgl4rVz3Ks" },
    { id: "fa12", title: "Call Me Maybe", artist: "Carly Rae Jepsen", durationSec: 193, videoId: "fWNaR-rxAic" },
    { id: "fa13", title: "Hey, Soul Sister", artist: "Train", durationSec: 216, videoId: "kVpv8-5XWOI" },
    { id: "fa14", title: "Where Is The Love?", artist: "Black Eyed Peas", durationSec: 250, videoId: "WpYeekQkAdc" },
    { id: "fa15", title: "Viva La Vida", artist: "Coldplay", durationSec: 242, videoId: "dvgZkm1xWPE" },
    { id: "fa16", title: "Mamma Mia", artist: "ABBA", durationSec: 215, videoId: "unfzfe8f9NI" },
    { id: "fa17", title: "Bring It All Back", artist: "S Club 7", durationSec: 207, videoId: "nQwLbyyTAts" },
    { id: "fa18", title: "I'm Still Standing", artist: "Elton John", durationSec: 183, videoId: "MJ_aPtt4U8M" },
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
