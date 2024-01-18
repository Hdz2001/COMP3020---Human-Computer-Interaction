const cart = document.querySelector(".cartInfo");

cart.addEventListener("click", ()=> {
    const cartContent = document.querySelector(".cartContent");

    if (cartContent.style.display == "flex")
    {
        cartContent.style.display = "none";
    }
    else{
        cartContent.style.display = "flex";
    }
})


