const shoppingCart = JSON.parse(localStorage.getItem('cart')) ?? [];
localStorage.setItem('cart', JSON.stringify(shoppingCart));
