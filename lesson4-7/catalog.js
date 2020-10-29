item = document.getElementById('list_products');
render(products, item, 'Product');
let cart = new Cart();
let matches = item.querySelectorAll('input.add_item');
for (let i = 0; i < matches.length; i++) {
    addEvent(matches[i], 'click', cart.addItem);
}