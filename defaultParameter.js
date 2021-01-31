function add (num1, num2 = 2){              /**backup value of 2nd parameter */
    return num1 + num2;
}
const result = add(20, 23);     /**if 2nd parameter is not defined,then backup value is working */
console.log(result);        /**if 2nd parameter is defined,then backup value isn't working */



function createUser(name, age = 18){

    const user = {};
    
    user.name = name;
    
    user.age = age;
    
    return user;
    
    }
    const output = createUser('sabbir'); /**backup age is 18 */
    console.log(output)
    