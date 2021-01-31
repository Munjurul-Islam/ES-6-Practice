class brand{
    constructor(product, price){
        this.brand = 'asus';
        this.product = product;
        this.price = price;

    }
}

const brand1 = new brand ('phone', 10000);
const brand2 = new brand ('laptop', 50000);
console.log(brand1.price)