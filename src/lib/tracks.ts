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
    { id: "f19", title: "Espresso", artist: "Sabrina Carpenter", durationSec: 175, videoId: "eVXm6O2N0W4" },
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
    { id: "r22", title: "Lover", artist: "Taylor Swift", durationSec: 221, videoId: "-BjZmE2gtdo" },
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
    { id: "z19", title: "Always With Me", artist: "Joe Hisaishi", durationSec: 213, videoId: "o9Yk_7XoV3o" },
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
    { id: "e19", title: "Physical", artist: "Dua Lipa", durationSec: 193, videoId: "9HDEHj2yzew" },
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
    { id: "n19", title: "Toxic", artist: "Britney Spears", durationSec: 198, videoId: "lo0Xk7-A4ps" },
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
    { id: "fa19", title: "Let It Go", artist: "Idina Menzel", durationSec: 224, videoId: "L0MK7qz13bU" },
  ],
  coup_de_feu: [
{ id: "cdf1", title: "Pump It", artist: "Black Eyed Peas", durationSec: 213, videoId: "9oNiH7DXJ9Y" },
{ id: "cdf2", title: "Mr. Brightside", artist: "The Killers", durationSec: 222, videoId: "hBx9t9tJQZE" },
{ id: "cdf3", title: "Holding Out For A Hero", artist: "Bonnie Tyler", durationSec: 260, videoId: "Hq5mVt-iozQ" },
{ id: "cdf4", title: "Footloose", artist: "Kenny Loggins", durationSec: 228, videoId: "FDMHZFJnk2s" },
{ id: "cdf5", title: "Eye of the Tiger", artist: "Survivor", durationSec: 245, videoId: "btPJPFnesV4" },
{ id: "cdf6", title: "Don't Stop Me Now", artist: "Queen", durationSec: 210, videoId: "HgzGwKwLmgM" },
{ id: "cdf7", title: "Are You Gonna Be My Girl", artist: "Jet", durationSec: 213, videoId: "tuK6n2Lkza0" },
{ id: "cdf8", title: "One Way Or Another", artist: "Blondie", durationSec: 213, videoId: "Anzk-T0KgWc" },
{ id: "cdf9", title: "Lonely Boy", artist: "The Black Keys", durationSec: 193, videoId: "a_426RiwST8" },
{ id: "cdf10", title: "Run Boy Run", artist: "Woodkid", durationSec: 213, videoId: "lmc21V-zBq0" },
{ id: "cdf11", title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", durationSec: 227, videoId: "ngZzg6J8KHg" },
{ id: "cdf12", title: "Are You Gonna Go My Way", artist: "Lenny Kravitz", durationSec: 211, videoId: "0TdCxgOdG3k" },
{ id: "cdf13", title: "Can't Stop", artist: "Red Hot Chili Peppers", durationSec: 269, videoId: "8DyziWtkfBw" },
{ id: "cdf14", title: "Seven Nation Army", artist: "The White Stripes", durationSec: 232, videoId: "0J2QdDbelmY" },
{ id: "cdf15", title: "Smooth Criminal", artist: "Michael Jackson", durationSec: 257, videoId: "gV5SnMKpEqs" },
  ],
  italiano: [
{ id: "it1", title: "Felicità puttana", artist: "Thegiornalisti", durationSec: 222, videoId: "FQ3iXsyzhZU" },
{ id: "it2", title: "Mandela", artist: "Margherita Vicario", durationSec: 215, videoId: "A1GnILhQR7g" },
{ id: "it3", title: "Senza Parole", artist: "Vasco Rossi", durationSec: 282, videoId: "wlcny7uFeSk" },
{ id: "it4", title: "Tu Vuò Fà L'Americano", artist: "Renato Carosone", durationSec: 145, videoId: "BqlJwMFtMCs" },
{ id: "it5", title: "La Vita Di Mare", artist: "MIND ENTERPRISES", durationSec: 221, videoId: "9oEJFNWHhgY" },
{ id: "it6", title: "Solo in un caffè", artist: "Roberto Cicogna", durationSec: 249, videoId: "B4fomE2IGPQ" },
{ id: "it7", title: "Dunya", artist: "TÄRA", durationSec: 206, videoId: "HhVukc6pa7A" },
{ id: "it8", title: "Notti Siciliane", artist: "Shakalab & Lello Analfino ", durationSec: 197, videoId: "zerXrKCGTyc" },
{ id: "it9", title: "Va tutto bene", artist: "famiglia del sud", durationSec: 224, videoId: "zuqQ1mPapqw" },
{ id: "it10", title: "MAMMAMIJ", artist: "Spetrix x Denemi", durationSec: 167, videoId: "wrMDPpTtmfs" },
{ id: "it11", title: "Fenomeno", artist: "Fabri Fibra", durationSec: 246, videoId: "EJmRU9vOsgo" },
{ id: "it12", title: "Le radici ca tieni", artist: "Sud sound system", durationSec: 323, videoId: "z8_fl2UL0L0" },
{ id: "it13", title: "UNGARETTI", artist: "Riserva Moac", durationSec: 235, videoId: "gc4Qf-stzi4" },
{ id: "it14", title: "anima fragile", artist: "Vasco Rossi", durationSec: 218, videoId: "8P3rzz4ibGg" },
  ],
  barbecue: [
{ id: "bbq1", title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", durationSec: 285, videoId: "ngZzg6J8KHg" },
{ id: "bbq2", title: "Bad Moon Rising", artist: "Creedence Clearwater Revival", durationSec: 138, videoId: "uiqbJ0Gtb44" },
{ id: "bbq3", title: "Jolene", artist: "Dolly Parton", durationSec: 159, videoId: "wxhKU0QGdnY" },
{ id: "bbq4", title: "The Joker", artist: "Steve Miller Band", durationSec: 267, videoId: "Eb1TIGvvWWE" },
{ id: "bbq5", title: "Old Town Road", artist: "Lil Nas X ft. Billy Ray Cyrus", durationSec: 155, videoId: "jOidKBEzSWE" },
{ id: "bbq6", title: "Summer of '69", artist: "Bryan Adams", durationSec: 248, videoId: "1i0i5lG6Ojc" },
{ id: "bbq7", title: "Hotel California", artist: "Eagles", durationSec: 391, videoId: "x2yd-XZtkvk" },
{ id: "bbq8", title: "Fortunate Son", artist: "Creedence Clearwater Revival", durationSec: 141, videoId: "ZWijx_AgPiA" },
{ id: "bbq9", title: "Les Cornichons", artist: "Nino Ferrer", durationSec: 189, videoId: "0mGWYoBv9Fk" },
{ id: "bbq10", title: "L'incendie à Rio", artist: "Sacha Distel", durationSec: 181, videoId: "b_K8PrOTGmU" },
{ id: "bbq11", title: "On ira", artist: "Zaz", durationSec: 179, videoId: "U8LQnA9_kwQ" },
{ id: "bbq12", title: "Le café", artist: "Oldelaf", durationSec: 155, videoId: "ALvoFL5JVnc" },
{ id: "bbq13", title: "Start Me Up", artist: "The Rolling Stones", durationSec: 213, videoId: "SGyOaCXr8Lw" },
{ id: "bbq14", title: "Brown Eyed Girl", artist: "Van Morrison", durationSec: 184, videoId: "UfmkgQRmmeE" },
{ id: "bbq15", title: "Wonderwall ", artist: "Oasis", durationSec: 279, videoId: "6hzrDeceEKc" },
{ id: "bbq16", title: "Chicken Fried", artist: "Zac Brown Band", durationSec: 238, videoId: "e4ujS1er1r0" },
  ],
  bistro_parisien: [
{ id: "bp1", title: "Mets de l'huile !", artist: "Regg'Lyss", durationSec: 247, videoId: "PXXH4i6dgMQ" },
{ id: "bp2", title: "La fille du coupeur de joints", artist: "Hubert-Félix Thiéfaine", durationSec: 397, videoId: "OnIqvNxRxvc" },
{ id: "bp3", title: " Les nuits parisiennes ", artist: "Louise Attaque", durationSec: 168, videoId: "rJXoe1Mpk3I" },
{ id: "bp4", title: "L'apologie", artist: "Matmatah", durationSec: 200, videoId: "JT0Ul9cP5e4" },
{ id: "bp5", title: "Rimini", artist: "Les Wampas", durationSec: 165, videoId: "Im-z75LfP38" },
{ id: "bp6", title: "Un Gamin", artist: "Zoufris Maracas", durationSec: 196, videoId: "xwWI94CAwBk" },
{ id: "bp7", title: "Cielo Ciego", artist: "Boulevard des Airs", durationSec: 151, videoId: "8C1AGbXhT3s" },
{ id: "bp8", title: "Emmenez-moi", artist: "Charles Aznavour", durationSec: 215, videoId: "WTuaYZ7kCSs" },
{ id: "bp9", title: "Il est cinq heures Paris s'éveille", artist: "Jacques Dutronc", durationSec: 173, videoId: "-WGo35vzRL8" },
{ id: "bp10", title: "La Foule", artist: "Édith Piaf", durationSec: 175, videoId: "fFtGfyruroU" },
{ id: "bp11", title: "Les copains d'abord", artist: "Georges Brassens", durationSec: 238, videoId: "J1MiMYVd-Kc" },
{ id: "bp12", title: "Vesoul", artist: "Jacques Brel", durationSec: 188, videoId: "w36jLgyWPCg" },
{ id: "bp13", title: "J'aime pas travailler", artist: "Zoufris maracas", durationSec: 192, videoId: "mxvEjC28MJ8" },
{ id: "bp14", title: "3-0", artist: "PICON MON AMOUR", durationSec: 284, videoId: "NinHBbuBy0M" },
{ id: "bp15", title: " Ces gens là ", artist: "Jacques Brel", durationSec: 287, videoId: "ztv5W1aN1m8" },
  ],
  brunch_chill: [
{ id: "bc1", title: "Jammin", artist: "Bob Marley", durationSec: 200, videoId: "jGwlKCj8xYw" },
{ id: "bc2", title: "Banana Pancakes", artist: "Jack Johnson", durationSec: 192, videoId: "b8PX72doTFA" },
{ id: "bc3", title: "Better Together", artist: "Jack Johnson", durationSec: 207, videoId: "ZfsT7kzCrrM" },
{ id: "bc4", title: "New Soul", artist: "Yael Naim", durationSec: 225, videoId: "PhJY4rSX9og" },
{ id: "bc5", title: "Budapest", artist: "George Ezra", durationSec: 202, videoId: "VHrLPs3_1Fs" },
{ id: "bc6", title: "Coming Home", artist: "Leon Bridges", durationSec: 206, videoId: "MTrKkqE9p1o" },
{ id: "bc7", title: "Coffee", artist: "Miguel", durationSec: 286, videoId: "yAbsAzXkbRI" },
{ id: "bc8", title: "Bloom", artist: "The Paper Kites", durationSec: 210, videoId: "8inJtTG_DuU" },
{ id: "bc9", title: " Rehab", artist: "Amy Winehouse", durationSec: 219, videoId: "PdxH9DkUIjM" },
{ id: "bc10", title: "Je ne sais pas", artist: "Joyce Jonathan", durationSec: 216, videoId: "QQ6F7kqJLRE" },
{ id: "bc11", title: "Sunrise", artist: "Norah Jones", durationSec: 194, videoId: "c-9dkYGemp4" },
{ id: "bc12", title: "I'm Yours", artist: "Jason Mraz", durationSec: 242, videoId: "w5qOYi41WiA" },
{ id: "bc13", title: "Riptide", artist: "Vance Joy", durationSec: 204, videoId: "uJ_1HMAGb4k" },
{ id: "bc14", title: "The Lazy Song", artist: "Bruno Mars", durationSec: 189, videoId: "GYW87vbSxjg" },
{ id: "bc15", title: "Ho Hey", artist: "The Lumineers", durationSec: 161, videoId: "zvCBSSwgtg4" },
  ],
  en_cuisine: [
{ id: "ec1", title: "Canned Heat", artist: "Jamiroquai", durationSec: 322, videoId: "vE4VlA_9OrI" },
{ id: "ec2", title: "Lovely Day", artist: "Bill Withers", durationSec: 255, videoId: "bEeaS6fuUoA" },
{ id: "ec3", title: "Don't Start Now", artist: "Dua Lipa", durationSec: 203, videoId: "8CLkVWB_Lj8" },
{ id: "ec4", title: "Treasure", artist: "Bruno Mars", durationSec: 178, videoId: "nH7bjV0Q_44" },
{ id: "ec5", title: "Feel It Still", artist: "Portugal. The Man", durationSec: 163, videoId: "pBkHHoOIIn8" },
{ id: "ec6", title: "Kiss", artist: "Prince", durationSec: 226, videoId: "SOsKTmp1eA0" },
{ id: "ec7", title: "Cosmic Girl", artist: "Jamiroquai", durationSec: 243, videoId: "D-NvQ6VJYtE" },
{ id: "ec8", title: "Walking On Sunshine", artist: "Katrina & The Waves", durationSec: 239, videoId: "iPUmE-tne5U" },
{ id: "ec9", title: "Le Freak", artist: "Chic", durationSec: 327, videoId: "4jEgM53SRbI" },
{ id: "ec10", title: "Celebration", artist: "Kool & The Gang", durationSec: 235, videoId: "3GwjfUFyY6M" },
{ id: "ec11", title: "Stayin' Alive", artist: "Bee Gees", durationSec: 248, videoId: "WlgoUlOkyzU" },
{ id: "ec12", title: "Play That Funky Music", artist: "Wild Cherry", durationSec: 300, videoId: "8jWWultGJSc" },
{ id: "ec13", title: "Superstition", artist: "Stevie Wonder", durationSec: 240, videoId: "0CFuCYNx-1g" },
{ id: "ec14", title: "Good Times", artist: "Chic", durationSec: 329, videoId: "mWFWgYb6jgU" },
{ id: "ec15", title: "Groove Is In The Heart", artist: "Deee-Lite", durationSec: 231, videoId: "etviGf1uWlg" },
  ],
  a_table: [
{ id: "at1", title: "L-O-V-E", artist: "Nat King Cole", durationSec: 150, videoId: "EIOfulnAF2I" },
{ id: "at2", title: "Fly Me To The Moon", artist: "Frank Sinatra", durationSec: 147, videoId: "ZEcqHA7dbwM" },
{ id: "at3", title: "What A Wonderful World", artist: "Louis Armstrong", durationSec: 138, videoId: "1Z0Y7hY6jSY" },
{ id: "at4", title: "The Girl From Ipanema", artist: "Stan Getz", durationSec: 198, videoId: "0FTkt4Odq10" },
{ id: "at5", title: "Beyond The Sea", artist: "Bobby Darin", durationSec: 181, videoId: "6MNfJDbl7wI" },
{ id: "at6", title: "Dream A Little Dream Of Me", artist: "Ella Fitzgerald", durationSec: 184, videoId: "ClXIOmcNhrU" },
{ id: "at7", title: "Feeling Good", artist: "Nina Simone", durationSec: 182, videoId: "FQMQT61vy-8" },
{ id: "at8", title: "Unforgettable", artist: "Nat King Cole", durationSec: 198, videoId: "8J-ggzg_C5k" },
{ id: "at9", title: "Smooth Operator", artist: "Sade", durationSec: 258, videoId: "4TYv2PhG89A" },
{ id: "at10", title: "Killing Me Softly", artist: "Roberta Flack", durationSec: 284, videoId: "O1eOsMc2Fgg" },
{ id: "at11", title: "My Baby Just Cares for Me", artist: "Nina Simone", durationSec: 217, videoId: "vxx72Qm4ysI" },
{ id: "at12", title: "Ain't No Sunshine", artist: "Bill Withers", durationSec: 126, videoId: "C_lX7RoY3k8" },
{ id: "at13", title: "La Vie En Rose", artist: "Louis Armstrong", durationSec: 206, videoId: "gDK8MWL4ERY" },
{ id: "at14", title: "Autumn Leaves", artist: "Nat King Cole", durationSec: 210, videoId: "wKhRnZZ0cJI" },
{ id: "at15", title: "The Look of Love", artist: "Dusty Springfield", durationSec: 211, videoId: "VsN7pkkJpj8" },
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
