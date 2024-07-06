const lyrics = "tumi bondhu kala pakhi ami jeno ki bosonto kale tomay bolte pari ni sada sada kala kala";
console.log(lyrics)
const parts = lyrics.split('')
const parts2 = lyrics.split(' ')
console.log(parts);
console.log(parts2);

const partial = lyrics.slice(4,6)
const partial2 = lyrics.substring(7,10)
console.log(partial)
console.log(partial2)
const lines = ['Tumi bondhu kala pakhi',
                'Ami jeno ki bosonto kale',
                ' Tomay bolte pari ni sada',
                ' Sada kala kala'];

const newSong = lines.join('. ')
console.log(newSong);

