const person = {
    name: 'humayun', age: 33, rank: 'major', son: 'shafwan', 
    info : {                    /**inside of object */
        phone: 019111111111,
        address: 'dhaka cantonment',
        salary: 50000,
    }
}
const { rank } = person;
const { address, salary } = person.info;     /**call inside of object */   
console.log(rank, address, salary)



