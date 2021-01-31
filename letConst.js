const wifeName = 'sharmin';
// wifeName = 'akter';        /**value not changeable */ 
console.log(wifeName);

// for an array
const userName = ['munjurul', 'islam', 'sabbir'];
userName[0] = 'Munjurul';           /**position changable */
console.log(userName[0])
userName.push = 'Sharmin';             /**push/pop/shift/unshift   acceptable */
console.log(userName)
// userName = ['shamin', 'akter', 'mahi'];    /**full array unchangable */
console.log(userName);

// for object
const nayok = {name: 'salman', age: 50, status: 'unmarried'}
console.log(nayok)
nayok.age = 52;
console.log(nayok)
// nayok = {sex: 'male'};           /**full object unchangable */
console.log(nayok)

// for let 
for (let i = 0; i < userName.length; i++) {
    const element = userName[i];
    console.log(element)              /**scope declearable */
}
// console.log(i)             /**not declearable for behind */