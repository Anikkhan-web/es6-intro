const numbers = [1,5,7,8]
const output = [];
function doubleOld(numbers){
for (const number of numbers ){
    const double = doubleIt(number)
    output.concat(double)
}}
const doubleIt = num = num*2

const makeDouble = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(num=>num*2)
console.log(makeDoubleDirect);