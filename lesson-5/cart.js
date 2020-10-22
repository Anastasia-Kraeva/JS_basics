//2

class Item {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
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
    reviewItems() {
        let out = ''
        for (let key in this.items) {
            out += '<div class= "items">'
            out += '<img src="' + products[key].img + '">' + '<br>';
            out += '<p class = "text">'
            out += 'Наименование: ' + products[key].name + '<br>';
            out += 'Цена: ' + products[key].price + '<br>';
            out += '</p>';
            out += '</div>';
        }
        return out;
    }
    reviewSum() {
        return '<div class ="prise">Общая стоимость: ' + this.mainPrice + ' руб.</div>';
    }
}

const products = [new Item('phone', 20000, 'http://placehold.it/200x150'), new Item('headset', 1000, 'http://placehold.it/200x150'), new Item('case', 300, 'http://placehold.it/200x150')];

const cart1 = new Cart();
for (let key in products) {
    cart1.addItem(products[key]);
}

document.getElementById('shopping_cart').innerHTML = cart1.reviewItems();
document.getElementById('sum').innerHTML = cart1.reviewSum();