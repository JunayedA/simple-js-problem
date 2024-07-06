const arry = [34,45,26,456,245,564,32,23,12,45,3,233];

function minInArry(numbers){
    let smallest = numbers[0]
    for(let i =0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index]
        // console.log(element);
        if(smallest>element){
            smallest= element
        }
    }
    return smallest;
}

const smallest = minInArry(arry);
console.log(smallest)