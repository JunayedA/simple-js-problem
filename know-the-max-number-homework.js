function knowTheMaxNumber(number1, number2, number3){
    if(number1>number2 && number1>number3){
        return number1;
    }
    else if(number2>number1 && number2>number3){
        return number2
    }
    else{
        return number3
    }
}


const solution = knowTheMaxNumber(234,434,650)
console.log(solution)


function knowTheMaxNumber2(num1, num2, num3){
    const maxNum = Math.max(num1, num2, num3);
    const minNum = Math.min(num1,num2,num3);
    const theResult = `the large number is ${maxNum} and the small number is ${minNum}`
    return theResult
}

console.log(knowTheMaxNumber2(324,2334,676))