//homework
//1
function categories() {
    let number = {
        units: 0,
        dozens: 0,
        hundreds: 0,
    };
    let N = +prompt('введите число от 0 до 999');
    if (N > 999 || N < 0) {
        console.log('необходимо ввести число в промежутке между 0 и 999')
        return 0;
    }
    if (N > 99) {
        let units = Math.floor(N / 100);
        number.units = units;
    }
    if (N > 9) {
        let dozens = Math.floor(N / 10 % 10);
        number.dozens = dozens;
    }
    if (N > 0) {
        let hundreds = Math.floor(N % 10);
        number.hundreds = hundreds;
    }
    console.log(number);
};
categories();

//2
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.mainPrice = 0;
    }
    allPrices(item) {
        this.mainPrice += item.price
    }
    addItem() {
        for (let i = 0; i < arguments.length; i++) {
            this.items.push(arguments[i])
            this.allPrices(arguments[i])
        }
    }
}

let cart = new Cart
let a = new Item('phone', 20000);
let b = new Item('headset', 1000);
let c = new Item('case', 300);
cart.addItem(a, b, c)

console.log(cart)