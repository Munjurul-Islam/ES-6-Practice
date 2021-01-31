// normal system
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(23);
console.log(result)

// function like variable
const add = function(x, y){
    return x + y;
}                               /**function name is optional */                               
const total = add(3, 3);
console.log(total)

// es-6 arrow methode
const square = num => num * num;            /**num means (parameter).  => means (return). for single parameter ()is optional */
const output = square(4);
console.log(output)

const sub = (x, y) => x - y;                /**you have to( , ) for multiple parameter */
const output1 = sub(12, 7);
console.log(output1)
const giveNumber = () => 4;                  /**you have to empty() for no parameter */
console.log(giveNumber());


const doMath = (a, b) => {
    const sum = a + b;
    const sub = a - b;
    const diff = sum * sub;
    return diff;                                /**for bigger function used to 2nd{}. and also return for result */
}
const result3 = doMath(9, 6);
console.log(result3)

