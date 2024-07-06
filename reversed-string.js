const shyeri = 'joo nadiyo me nahayega ooo kisidin dudh me terega';
function reversed(str){
    let reversed = '';
    for(i=str.length-1 ; i>=0 ; i--){
        // console.log(i)
        const element = str[i];
        // return element;
        reversed = reversed + element
        console.log(element,i, reversed)
    }
    return reversed
}
const result = reversed(shyeri);
console.log(result)