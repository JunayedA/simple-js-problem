const sentence = 'tomar jonno niche tarar ektukhani alo vorer rong raate mishe kalo';
function wordReversed(str){
    const words = str.split(' ')
    // console.log(words)
    let result = [];
    for(i=words.length-1; i>=0;i-- ){
        const element = words[i]
        result.push(element)
        console.log(result)
    }
    const reversed = result.join(' ')
    return reversed;
}

console.log(wordReversed(sentence))