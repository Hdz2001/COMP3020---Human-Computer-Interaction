const games = [
    {
        id: 0,
        title: "League of Legends",
        price: 0
    }
]

const categories = [...new Set(games.map((item) =>
    {return item}))]

var totalPrice = 0;

function displaycart(a){
    let j = 0;
    const cartItems = document.querySelector(".cartContent");

    if (shoppingCart.length == 0){
        cartItems.innerHTML = `<p style = "padding:10px" >Your cart is empty :(</p>`
    }
    else{
        cartItems.innerHTML = 
        `<div class = "cartGames">
            <p style = "font-weight: bold" class = "underline" >Your Cart:</p>
        </div>

        <div class = "itemPrice">
            <p style = "font-weight: bold" class = "underline">Price</p>
        </div>
                
        <div class = "total">
            <p style = "font-weight: bold" class = "underline">Total</p>
        </div>
        `;
        

        document.querySelector(".cartGames").innerHTML = document.querySelector(".cartGames").innerHTML + shoppingCart.map((items)=>
        {
            var {title} = items;

            return(
                `
                    <p>${title}</p>
                `
            )

        }).join('')

        document.querySelector(".itemPrice").innerHTML = document.querySelector(".itemPrice").innerHTML + shoppingCart.map((items)=>
        {
            var {price} = items;

            return(
                `
                    <p>${price}</p>
                `
            )

        }).join('')

        /* calculate total price */

        for (var i=0; i<categories.length; i++)
        {
            if (categories[i].price !== 0)
            {
                totalPrice += categories[i].price;
            }
        }

        document.querySelector(".total").innerHTML = 
        `<p style = "font-weight: bold" class = "underline">Total</p>
            <p>${totalPrice}</p>
            <a style = "color: white" href="../Cart_page/cart.html">
                <button>View Cart</button>
            </a>
        `
        
    }
}

function addToCart(a){
    shoppingCart.push({...categories[a]});
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    displaycart();
}

displaycart();



