const friendAges = [19, 20, 18, 21];
const cousinAges = [30, 39, 40, 33];
const threeDot = [...friendAges, ...cousinAges];
console.log(threeDot)


const tk = [550, 654, 334, 876, 300]
// const maximumNumber = Math.max(tk);             /**output NaN */
const maximumNumber = Math.max(...tk);              /**three dot ... befor array name */
console.log(maximumNumber)