const changeWindow = document.querySelector(".gameImageSlide");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");

image1.addEventListener("click", ()=> {
    changeWindow.innerHTML = 
    `<video class = "window" controls="controls">
    <source src="images/gameList/lol.mp4" type="video/mp4" />
    </video>`
    image1.style.border = "3px solid white";
    image2.style.border = "none";
    image3.style.border = "none";
    image4.style.border = "none";
    image5.style.border = "none";
})

image2.addEventListener("click", ()=> {
    changeWindow.innerHTML = `<img src = "images/gameList/gwen.png" class = "window">`;
    image1.style.border = "none";
    image2.style.border = "3px solid white";
    image3.style.border = "none";
    image4.style.border = "none";
    image5.style.border = "none";
})

image3.addEventListener("click", ()=> {
    changeWindow.innerHTML = `<img src = "images/gameList/darius.jpg" class = "window">`;
    image1.style.border = "none";
    image2.style.border = "none";
    image3.style.border = "3px solid white";
    image4.style.border = "none";
    image5.style.border = "none";
})

image4.addEventListener("click", ()=> {
    changeWindow.innerHTML = `<img src = "images/gameList/teemo.png" class = "window">`;
    image1.style.border = "none";
    image2.style.border = "none";
    image3.style.border = "none";
    image4.style.border = "3px solid white";
    image5.style.border = "none";
})

image5.addEventListener("click", ()=> {
    changeWindow.innerHTML = `<iframe class = "window"
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2pb4Ji?utm_source=generator&theme=0"
    width="100%" height="352" frameBorder="0" allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    image1.style.border = "none";
    image2.style.border = "none";
    image3.style.border = "none";
    image4.style.border = "none";
    image5.style.border = "3px solid white";
})




