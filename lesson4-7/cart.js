cart = document.getElementById('shopping_cart');
render(getCartData(), cart, 'Cart');

basket = new Cart()

let matches_delete = cart.querySelectorAll('input.delete_item');
for (let i = 0; i < matches_delete.length; i++) {
    addEvent(matches_delete[i], 'click', basket.deleteItem);
}

let matches_add = cart.querySelectorAll('input.add_count_item');
for (let i = 0; i < matches_add.length; i++) {
    addEvent(matches_add[i], 'click', basket.addCount);
}

let matches_subtract = cart.querySelectorAll('input.subtract_count_item');
for (let i = 0; i < matches_subtract.length; i++) {
    addEvent(matches_subtract[i], 'click', basket.subtractCount);
}

basket.reviewSum();