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

        totalPrice = 0

        for (var i=0; i<shoppingCart.length; i++)
        {
            if (shoppingCart[i].price !== 0)
            {
                /* if item is not free */
                totalPrice += shoppingCart[i].price;
            }
        }

        document.querySelector(".total").innerHTML = 
        `<p style = "font-weight: bold" class = "underline">Total</p>
            <p>${totalPrice.toFixed(2)}</p>
            <a style = "color: white" href="../Cart_page/src/App.js">
                <button>Checkout</button>
            </a>
        `
    }
}

displaycart();


function displayMainCart(a){
    let j = 0;
    if(shoppingCart.length==0){
        document.getElementById('cartItem').innerHTML ="Your cart is empty"
    }else{
        document.getElementById("cartItem").innerHTML = shoppingCart.map((item)=>
        {
            var{image,title,price} = item;
            return(
                `<div class='cart-item'>
                    <div class = 'row-img'>
                        <img class='rowimg' src=${image ?? './Images/placeholder.jpg'} >
                    </div>

                    <p style='font-size:20px;'>${title}</p>
                    <h2 style='font-size:20px;'>$ ${price}</h2>` + 
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'>remove</i></div>"

            );
        }).join('');
        
        /*SET MAIN CART TOTAL PRICE*/
        document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
    }
}

displayMainCart();

function delElement(a){
    shoppingCart.splice(a,1);
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    displaycart();
    displayMainCart();
}



