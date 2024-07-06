//knowing includes 
const lyrics = "tumi bondhu kala pakhi ami jeno ki bosonto kale tomay bolte pari ni sada sada kala kala"
const acheNaki= 'tuMi';
console.log(acheNaki)
const checkInOneLine = lyrics.toLowerCase().includes(acheNaki.toLowerCase())
console.log(checkInOneLine)

//knowing index of
console.log(lyrics.indexOf('pakhi'))
if(lyrics.indexOf('tumi')!==-1){
    console.log('ache')
}
else(
    console.log('nai')
)

//knowing starts with or ends with 
console.log(lyrics.startsWith('bondhu'))
const file = 'documents.pdf'
const tourPic = 'me.png'
console.log(tourPic.endsWith('.png'))