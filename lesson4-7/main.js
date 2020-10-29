class Cart {
    constructor() {
        this.items = [];
        this.mainPrice = 0;
    }
    allPrices(item) {
        this.mainPrice += item.price
    }
    addItem(e) {
        this.disabled = true;
        let cartData = getCartData() || {},
            parentBox = this.parentNode,
            itemId = parentBox.getAttribute('data-id'),
            itemTitle = parentBox.querySelector('.item_title').innerHTML,
            itemPrice = parentBox.querySelector('.item_price').innerHTML,
            itemImage = parentBox.querySelector('.item_img').getAttribute('src');
        if (cartData[itemId]) {
            cartData[itemId].count += 1;
        } else {
            cartData[itemId] = {
                name: itemTitle,
                price: itemPrice,
                img: itemImage,
                count: 1
            };
        }

        if (!setCartData(cartData)) {
            this.disabled = false;
        }
        return false;
    }

    deleteItem(e) {
        this.disabled = true;
        let parentBox = this.parentNode,
            id = parentBox.getAttribute('data-id'),
            cartData = getCartData();
        delete cartData[id];
        parentBox.remove();
        setCartData(cartData);
        location.reload();
    }
    addCount(e) {
        this.disabled = true;
        let parentBox = this.parentNode,
            id = parentBox.getAttribute('data-id'),
            cartData = getCartData();
        cartData[id].count = cartData[id].count + 1;
        setCartData(cartData);
        this.disabled = false;
        location.reload()
    }

    subtractCount(e) {
        this.disabled = true;
        let parentBox = this.parentNode,
            id = parentBox.getAttribute('data-id'),
            cartData = getCartData();
        cartData[id].count = cartData[id].count - 1;
        setCartData(cartData);
        this.disabled = false;
        location.reload()
    }
    reviewSum() {
        let sum = document.querySelector('#sum'),
            warning = document.querySelector('#shopping_cart'),
            cartData = getCartData();
        if (JSON.stringify(cartData) !== '{}') {
            let orderAmount = 0;
            for (let key in cartData) {
                orderAmount += cartData[key].price * cartData[key].count;
            }
            sum.innerText = `Общая сумма: ${orderAmount}`;
        } else {
            warning.innerHTML = '<p class="warning">Корзина пуста</p>';
        }

    }
}

class Item {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

function render(items, elements, type = '') {
    for (let key in items) {

        let div = document.createElement('div'),
            elem_h3 = document.createElement('h3'),
            elem_p = document.createElement('p'),
            elem_span = document.createElement('span'),
            elem_img = document.createElement("img");
        elem_p.append(elem_span);

        if (type === 'Cart') {
            var value_id = key;
        } else {
            var value_id = items[key].id;
        }
        div.setAttribute('data-id', value_id)
        div.className = 'item';

        let value_name = items[key].name;
        let value_price = items[key].price;
        let value_img = items[key].img;



        elem_h3.className = 'item_title';
        elem_h3.textContent = value_name;

        elem_p.className = 'item_price_p';
        elem_p.innerHTML = `стоимость: <span class="item_price">${value_price}</span>`;

        elem_img.className = 'item_img';
        elem_img.src = value_img;

        div.append(elem_img, elem_h3, elem_p)
        if (type === 'Product') {
            let add_button = document.createElement('input');
            add_button.className = 'add_item',
                add_button.type = 'button',
                add_button.value = 'В корзину';
            div.append(add_button);
        } else if (type === 'Cart') {
            let remove_button = document.createElement('input'),
                subtract_count = document.createElement('input'),
                count_input = document.createElement('input'),
                add_count = document.createElement('input');



            subtract_count.className = 'subtract_count_item';
            subtract_count.type = 'button';
            subtract_count.value = '-';
            div.append(subtract_count);

            count_input.className = 'count_item';
            let value_count = items[key].count;
            count_input.value = value_count;
            div.append(count_input);

            add_count.className = 'add_count_item';
            add_count.type = 'button';
            add_count.value = '+';
            div.append(add_count);

            remove_button.className = 'delete_item';
            remove_button.type = 'button';
            remove_button.value = 'Удалить из корзины';
            div.append(remove_button);
        }
        elements.append(div);
    }
}

function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on' + type, function () { handler.call(elem); });
    }
    return false;
}

const products = [
    new Item('a0', 'Смартфон Samsung Galaxy S9 Black', 20000, 'https://img0.festima.ru/1/7rsrpcXNIOgOO65'),
    new Item('a1', 'Наушники внутриканальные Sennheiser CX 300-II Black', 1000, 'https://images-na.ssl-images-amazon.com/images/I/41YZ8sL9bvL.jpg'),
    new Item('a2', 'Чехол Samsung Silicone Cover для Samsung Galaxy S9, Gray', 300, 'https://05.ru/upload/iblock/47c/47c5d7eb8c243283e09bfa6b0c9c2118.jpg'),
    new Item('a3', 'Кресло синее уютное', 14000, 'https://www.ikea.com/ru/ru/images/products/strandmon-kreslo-s-podgolovnikom-shiftebu-temno-siniy__0652829_PE707677_S5.JPG?f=g 1600w,'),
    new Item('a4', 'Фонарь типа подсвечник, со звездочками', 350, 'https://www.ikea.com/ru/ru/images/products/rotera-fonar-dlya-greyushchey-svechi-d-doma-ulicy-belyy__73328_PE189972_S5.JPG?f=g 1600w,'),
    new Item('a5', 'Суккуленты - домашние производители кислорода', 400, 'https://www.ikea.com/ru/ru/images/products/succulent-sukkulenty-komntn-rast-v-gorshke-seryy__0654049_PE708272_S5.JPG?f=g 1600w,')];

const cart1 = new Cart();