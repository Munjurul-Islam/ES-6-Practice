class Brand{
    constructor(product, price){
        this.brand = 'asus';
        this.product = product;
        this.price = price;

    }
}

const brand1 = new Brand ('phone', 10000);
const brand2 = new Brand ('laptop', 50000);
console.log(brand1.price)



class Student{
    constructor(sId, sName, sAge){
        this.id = sId;
        this.name = sName;
        this.age = sAge;
        this.dipartment = 'computer technology';
    }
}

const student1 = new Student(1, 'munjurul', 26);
const student2 = new Student(2, 'islam', 25);
const student3 = new Student ( 3, 'sabbir', 21);
console.log(student1)
console.log(student3.age)