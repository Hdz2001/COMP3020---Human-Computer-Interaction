const games=[
    {
        id:0,
        image:'Images/csgo.jpg',
        title:'CS:GO',
        genre:'Action',
        onsale:false,
        bestseller:true,
        price:0,
    },
    {
        id:1,
        image:'Images/DeadSpace.jpg',
        title:'Dead Space',
        genre:'Action',
        onsale:true,
        bestseller:false,
        price:26.99,
    },
    {
        id:2,
        image:'Images/EldenRIng.jpg',
        title:'Elden Ring',
        genre:'RPG',
        onsale:false,
        bestseller:false,
        price:79.99,
    },
    {
        id:3,
        image:'Images/5288877.jpeg',
        title:'League of Legends',
        genre:'Action',
        onsale:false,
        bestseller:false,
        price:0,
    },
    {
        id:4,
        image:'Images/TombRbetter.jpg',
        title:'Tomb Raider',
        genre:'RPG',
        onsale:false,
        bestseller:false,
        price:19.49,

    },
    {
        id:5,
        image:'Images/Overwatch_2_cover.jpg',
        title:'Overwatch 2',
        genre:'Action',
        onsale:false,
        bestseller:true,
        price:0,
    },
    {
        id:6,
        image:'Images/9413291-spongebob-squarepants-battle-for-bikini-bottom-rehydrated-window.jpg',
        title:'Spongebob Square Pants: Battle for Bikini Bottom',
        genre:'RPG',
        onsale:true,
        bestseller:true,
        price:29.99,
    },
    {
        id:7,
        image:'Images/d7a3803a2a6969551b7ff7b193c045e0.png',
        title:'Squad',
        genre:'Action',
        onsale:false,
        bestseller:false,
        price:59.99,
    },
    {
        id:8,
        image:'Images/assettoCorsa.jpg',
        title:'Assetto Corsa',
        genre:'Racing',
        onsale:false,
        bestseller:false,
        price:22.79,
    },
    {
        id:9,
        image:'Images/936133cd-96dd-4f93-a9a8-295946fb99ee.jpg',
        title:'Sea of Thieves',
        genre:'RPG',
        onsale:false,
        bestseller:false,
        price:49.99,
    },
    {
        id:10,
        image:'Images/HumansFallFlat.jpeg',
        title:'Humans Fall Flat',
        genre:'RPG',
        onsale:false,
        bestseller:false,
        price:22.79,
    },
    {
        id:11,
        image:'Images/Kerbal.jpg',
        title:'Kerbal Space Program',
        genre:'RPG',
        onsale:false,
        bestseller:false,
        price:43.99,
    },
    {
        id:12,
        image:'Images/assettoCorsaComp.jpg',
        title:'Assetto Corsa Competizione',
        genre:'Racing',
        onsale:false,
        bestseller:false,
        price:49.99,
    },
    {
        id:13,
        image:'Images/BeamNGdrive_cover.png',
        title:'Beamng Drive',
        genre:'Racing',
        onsale:false,
        bestseller:false,
        price:29.99,
    },
    {
        id:14,
        image:'Images/SpongeBob_The_Cosmic_Shake_cover_art.png',
        title:'Spongebob: The Cosmic Shake',
        genre:'RPG',
        onsale:false,
        bestseller:false,
        price:39.99,
    },
    {
        id:15,
        image:'Images/ReadyOrNot.jpg',
        title:'Ready Or Not',
        genre:'Action',
        onsale:true,
        bestseller:true,
        price:45.99,
    },
    {
        id:16,
        image:'Images/Forza.jpg',
        title:'Forza Horizon 4',
        genre:'Racing',
        onsale:false,
        bestseller:true,
        price:79.99,
    },
    {
        id:17,
        image:'Images/mgsvtdemain.jpg',
        title:'Metal Gear Solid 5: Ground Zeros + The Phantom Pain',
        genre:'Action',
        onsale:false,
        bestseller:false,
        price:79.99,
    }
];

const gameContainer= [];
const gamePage = [];
var start = 0;
var end = 6;

function setGameContainer(){
    count=0;
    for(var i = 0; i<  games.length; i++){
        gameContainer[count++] = games[i];
    }
}

function setPage(start,end){
count = 0;
    for(var k = start; k<end; k++){
        gamePage[count++] = gameContainer[k];
    }
}

const category = [];

let i=0;

function mapPage(){
const categories = [...new Set(gamePage.map((game)=>
    {return game}))]

    let i =0;


    
document.getElementById('items').innerHTML = categories.map((game)=>
{
    var{image,title,genre,price} = game;
    return(
        `<div class='item'>
            <div class='img-box'>
                <img class='images' src=${image} height="420" width="300"></img>
            </div>

            <div class='textitem'>
                
                <a style = "color: white" href = "../Game_page/index.html"><p>${title}</p></a>
                <h2>$ ${price}</h2>` +
                "<button onclick ='Wishlist'>&#x2661;</button>"+
                "<button onclick ='addtoCart(("+(i++)+"))'>add to cart</button>"+
            `</div>
        </div>`

    )
}).join('')


items = document.querySelectorAll('.slider .item');
for(var j = 0; j<categories.length; j++){
category[j] = categories[j];
}
}

function clearPage(){
    document.getElementById('items').innerHTML ='';
    active = 0;
}

setGameContainer();
setPage(start,end);
mapPage();

let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none` ;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity=1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(1deg)` ;
        items[i].style.zIndex = -stt-1;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity=stt > 2 ? 0:1;
    }
    stt = 0;
    for(var j = active - 1; j>=0; j--){
        stt++;
        items[j].style.transform = `translateX(${-120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(-1deg)` ;
        items[j].style.zIndex = -stt-1;
        items[j].style.filter = 'blur(1px)';
        items[j].style.opacity=stt > 2 ? 0:1;

    }
    if(start == 0){
        document.getElementById("previous6").style.color="grey";

    }else{
        document.getElementById("previous6").style.color="white";
    }
    if(end == gameContainer.length){
        document.getElementById("next6").style.color="grey";

    }else{
        document.getElementById("next6").style.color="white";
    }
}

loadShow();

next.onclick = function(){
active = active+1 < items.length ? active + 1 : active;
loadShow();
}

prev.onclick = function(){
    active = active-1 >= 0 ? active -1 : active;
    loadShow();
}

var expanded = false;
    function showCheckBoxes(){
        var checkBoxes = document.getElementById("checkboxes");
        if(!expanded){
            checkBoxes.style.display = "block";
            expanded = true;
        }else{
            checkBoxes.style.display ="none";
            expanded=false;
        }
    }

function doSomethingNext6(){
    if(end+6 <= gameContainer.length){
        clearPage();
        setPage(start=start+6,end=end+6);
        mapPage();
        loadShow();
    }
   
}

function doSomethingPrev6(){
    if(start-6 >= 0){
        clearPage();
        setPage(start=start-6,end=end-6);
        mapPage();
        loadShow();
    }
 
   
}

function doSomethingSearch(){
    var A = document.getElementById("one").checked;
  
    var C = document.getElementById("three").checked;
    var D = document.getElementById("four").checked;
    var E = document.getElementById("five").checked;
    var F = document.getElementById("six").checked;
    if(A==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].onsale == true){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }

    if(C==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].bestseller == true){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }
    
    if(D==true){
        clearPage();     
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        count=0;
        for(var i=0; i< games.length;i++){
            if(games[i].genre == 'Action'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }
    if(E==true){
        clearPage();     
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        count=0;
        for(var i=0; i< games.length;i++){
            if(games[i].genre == 'RPG'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }
    if(F==true){
        clearPage();     
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        count=0;
        for(var i=0; i< games.length;i++){
            if(games[i].genre == 'Racing'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }

    if(A==true && D==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].onsale == true && games[i].genre=='Action'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }
    if(A==true && E==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].onsale == true && games[i].genre=='RPG'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }
    if(A==true && F==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].onsale == true && games[i].genre=='Racing'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }

    if(C==true && D==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].bestseller == true && games[i].genre=='Action'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }
    
    if(C==true && E==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].bestseller == true && games[i].genre=='RPG'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }

    if(C==true && F==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].bestseller == true && games[i].genre=='Racing'){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }

    if(A==true && C==true && D==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].onsale == true && games[i].bestseller ==true && games[i].genre=='Action' ){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }

    if(A==true && C==true && E==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].onsale == true && games[i].bestseller ==true && games[i].genre=='RPG' ){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }

    if(A==true && C==true && F==true){
        clearPage();
        count=0;
        gameContainer.splice(0,gameContainer.length);
        gamePage.splice(0,gamePage.length);
        for(var i=0; i< games.length;i++){
            if(games[i].onsale == true && games[i].bestseller ==true && games[i].genre=='Racing' ){
                gameContainer[count++]= games[i];
            }
        }
        if(gameContainer.length >=6){
            setPage(0,6);
        }else{
            setPage(0,end=gameContainer.length);
        }
        mapPage();
        loadShow();
    }
}

function doSomethingReset(){
        clearPage();
        setGameContainer();
        setPage(start=0,end=6);
        mapPage();
        loadShow();
        document.getElementById("one").checked = false;

        document.getElementById("three").checked = false;
        document.getElementById("four").checked = false;
        document.getElementById("five").checked = false;
        document.getElementById("six").checked = false;
}


/*ONCLICK CART ICON*/
const cartButton = document.querySelector(".cartInfo");

cartButton.addEventListener("click", ()=> {
    const cartContent = document.querySelector(".cartContent");

    if (cartContent.style.display == "flex")
    {
        cartContent.style.display = "none";
    }
    else{
        cartContent.style.display = "flex";
    }
})

/*DISPLAY CART*/
var totalPrice = 0;
const categories = [...new Set(gamePage.map((item) =>
    {return item}))]



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

        totalPrice += shoppingCart[shoppingCart.length-1].price;
        
        document.querySelector(".total").innerHTML = 
        `<p style = "font-weight: bold" class = "underline">Total</p>
            <p>${totalPrice.toFixed(2)}</p>
            <a href="../Cart_page/cart.html">
                <button>View Cart</button>
            </a>
        `
        
    }
}

function addtoCart(a){
    shoppingCart.push({...gamePage[a]});
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    displaycart();
}

displaycart();

