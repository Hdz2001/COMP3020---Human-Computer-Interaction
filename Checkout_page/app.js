console.log(shoppingCart)

const tbody = document.getElementById('games-table-body');

shoppingCart.forEach(game => {
    const tr = document.createElement('tr');

    const tdImage = document.createElement('td');
    tdImage.className = 'align-middle';
    const image = document.createElement('img');
    image.src = game.image ?? './Images/placeholder.jpg';
    image.alt = 'Game Image';
    image.width = '100';
    image.className = 'rounded';
    tdImage.appendChild(image);

    const tdName = document.createElement('td');
    tdName.className = 'align-middle';
    tdName.textContent = game.title;

    const tdPrice = document.createElement('td');
    tdPrice.className = 'align-middle';
    tdPrice.textContent = '$' + game.price;
    tr.appendChild(tdImage);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);

    tbody.appendChild(tr);
});

const subtotal = shoppingCart
    .map(game => game.price)
    .reduce((total, price) => total + price, 0);
const tax = subtotal * 0.12;
const total = subtotal + tax;

document.getElementById('subtotal-value').textContent = `$${subtotal.toFixed(2)}`;
document.getElementById('tax-value').textContent = `$${tax.toFixed(2)}`;
document.getElementById('total-value').textContent = `$${total.toFixed(2)}`;

