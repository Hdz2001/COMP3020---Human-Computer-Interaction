const reviews = [
    {
        id: 1,
        pfp: "jeevan.jpg",
        name: "Jeevan",
        noRevies: 10,
        igHours: 5,
        time: "1 hour",
        star: "1star.png",
        content: "This game is too hard to play and instruction is not clear. Not recommended 😞",
        upIcon: "up.png",
        up: 5,
        downIcon: "down.png",
        down: -15
    },
    {
        id: 2,
        pfp: "david.jpg",
        name: "David",
        noRevies: 20,
        igHours: 10,
        time: "2 hours",
        star: "4star.png",
        content: "Amazing game! Very easy to play and keep up with! 😃",
        upIcon: "up.png",
        up: 15,
        downIcon: "down.png",
        down: -5
    },
    {
        id: 3,
        pfp: "aiden.jpg",
        name: "Aiden",
        noRevies: 15,
        igHours: 8,
        time: "3 hours",
        star: "3star.png",
        content: "Very nice MOBA game. I love the details and graphics of the game! Can be better though. 😅",
        upIcon: "up.png",
        up: 15,
        downIcon: "down.png",
        down: -10
    },
    {
        id: 4,
        pfp: "fry.jpg",
        name: "Fry",
        noRevies: 20,
        igHours: 20,
        time: "1 day",
        star: "2star.png",
        content: "The game is too fast to keep up with. Not interested to start a new game like this! 😠",
        upIcon: "up.png",
        up: 8,
        downIcon: "down.png",
        down: -15
    },
    {
        id: 5,
        pfp: "kevin.jpg",
        name: "Kevin 🐷",
        noRevies: 20,
        igHours: 30,
        time: "2 days",
        star: "5star.png",
        content: "Perfect game for a no-life human being 🥰",
        upIcon: "up.png",
        up: 20,
        downIcon: "down.png",
        down: -5
    },
    {
        id: 6,
        pfp: "thngoc.jpg",
        name: "Miss World 🐰",
        noRevies: 50,
        igHours: 1000,
        time: "3 days",
        star: "5star.png",
        content: "Very nice game. When I feel stressful, I play it and feel more stressful, but I like it tho. I don't want to be Mrs. World anymore. I want to be a streamer ❤️",
        upIcon: "up.png",
        up: 30,
        downIcon: "down.png",
        down: 0
    }
]

/*GET TOTAL*/


const reviewBox = document.querySelector(".reviewBoxes");
let recent = "";

for (let i=0; i<reviews.length; i++){
    let j = reviews[i];
    let total = j.up + j.down;

    if (total > 0)
    {
        total = "+" + total;
    }
    
    recent = recent +
    `
    <div class = "reviewBoxes">
        <div class = "reviewText">
            <!--1-->
            <div class = "userReview">
                <div class = "userReview1"> 
                    <img src = "images/review/${j.pfp}"></img>

                    <div class = "userReviewInfo">
                        <p id = "userName">${j.name}</p>
                        <p> ${j.noRevies} Reviews</p>
                    </div>
                </div>
                    

                <p id = "igPlaytime"> ${j.igHours} hrs ingame </p>
                    
                <p id = "postedTime"> Posted ${j.time} ago</p>
            </div>

            <!--2-->
            <div class = "reviewContent">
                <img src = "images/review/${j.star}"></img>
                <p> ${j.content} </p>
                    
                <div class = "voting">
                    <img class= "white" src = "images/review/${j.upIcon}"></img>
                    <p> +${j.up} </p>
                        
                    <p> ${total} </p>

                    <img class= "white" src = "images/review/${j.downIcon}"></img>
                    <p> ${j.down} </p>
                </div>
            </div>
                
        </div>
    </div>
    `
}

function showReview(){
    reviewBox.innerHTML = recent;
}

showReview();

/*REVIEW BUTTON ON CLICK*/
const reviewFilter = document.querySelector(".dropbtn");
const filterContent = document.querySelector(".reviewFilterContent");

reviewFilter.addEventListener("click", ()=> {
    if (filterContent.style.display == "none")
    {
        filterContent.style.display = "block";
    }
    else
    {
        filterContent.style.display = "none";
    }
})

/*FILTER MOST RECENT*/
const recentButton = document.querySelector(".mostrecent");

recentButton.addEventListener("click", ()=> {
    reviewBox.innerHTML = recent;
    reviewFilter.innerHTML = recentButton.innerHTML;
    filterContent.style.display = "none";
})

/*FILTER STAR REVIEW*/
let starArray = ["","","","",""];

for (let x=1; x<=5; x++){
    let starImage = x + "star.png";

    for (let i=0; i<reviews.length; i++){
        let j = reviews[i];
        let total = j.up + j.down;

        if (total > 0){
            total = "+" + total;
        }
        
        if (starImage == reviews[i].star){
            starArray[x-1] = starArray[x-1] +
            `
            <div class = "reviewBoxes">
                <div class = "reviewText">
                    <!--1-->
                    <div class = "userReview">
                        <div class = "userReview1"> 
                            <img src = "images/review/${j.pfp}"></img>

                            <div class = "userReviewInfo">
                                <p id = "userName">${j.name}</p>
                                <p> ${j.noRevies} Reviews</p>
                            </div>
                        </div>
                            

                        <p id = "igPlaytime"> ${j.igHours} hrs ingame </p>
                            
                        <p id = "postedTime"> Posted ${j.time} ago</p>
                    </div>

                    <!--2-->
                    <div class = "reviewContent">
                        <img src = "images/review/${j.star}"></img>
                        <p> ${j.content} </p>
                            
                        <div class = "voting">
                            <img class= "white" src = "images/review/${j.upIcon}"></img>
                            <p> +${j.up} </p>
                                
                            <p> ${total} </p>

                            <img class= "white" src = "images/review/${j.downIcon}"></img>
                            <p> ${j.down} </p>
                        </div>
                    </div>
                        
                </div>
            </div>
            `
        } 
    }
}

for (let x=1; x<=5; x++){
    let starReview = "." + "star" + x;
    let starButton = document.querySelector(starReview);

    starButton.addEventListener("click", ()=> {
        reviewBox.innerHTML = starArray[x-1];
        reviewFilter.innerHTML = starButton.innerHTML;
        filterContent.style.display = "none";
    })
}

/* FILTER MOST UPVOTES */
let vote = [];

for (let i=0; i< reviews.length; i++){
    let j = reviews[i];
    let total = j.up + j.down;

    if (total > 0)
    {
        total = "+" + total;
    }

    vote.push({index: i, total: total});
}

var mostDownvote = vote.sort(function(a, b) {
	return a.total - b.total;
});

var mostUpvote = [];

for (let i = mostDownvote.length-1; i>=0; i--)
{
    mostUpvote.push(mostDownvote[i]);
}

let upButton = document.querySelector(".upvote");
let downButton = document.querySelector(".downvote");
let upValue = "";
let downValue = "";

for (let i=0; i<mostDownvote.length; i++){
    let indexUp = reviews[mostUpvote[i].index];
    let indexDown = reviews[mostDownvote[i].index];

    upValue += 
    `
        <div class = "reviewBoxes">
            <div class = "reviewText">
                <!--1-->
                <div class = "userReview">
                    <div class = "userReview1"> 
                        <img src = "images/review/${indexUp.pfp}"></img>

                        <div class = "userReviewInfo">
                            <p id = "userName">${indexUp.name}</p>
                            <p> ${indexUp.noRevies} Reviews</p>
                        </div>
                    </div>
                            

                    <p id = "igPlaytime"> ${indexUp.igHours} hrs ingame </p>
                            
                    <p id = "postedTime"> Posted ${indexUp.time} ago</p>
                </div>

                <!--2-->
                <div class = "reviewContent">
                    <img src = "images/review/${indexUp.star}"></img>
                    <p> ${indexUp.content} </p>
                            
                    <div class = "voting">
                        <img class= "white" src = "images/review/${indexUp.upIcon}"></img>
                        <p> +${indexUp.up} </p>
                                
                        <p> ${mostUpvote[i].total} </p>

                        <img class= "white" src = "images/review/${indexUp.downIcon}"></img>
                        <p> ${indexUp.down} </p>
                    </div>
                </div>
                        
            </div>
        </div>
    `

    downValue += 
    `
        <div class = "reviewBoxes">
            <div class = "reviewText">
                <!--1-->
                <div class = "userReview">
                    <div class = "userReview1"> 
                        <img src = "images/review/${indexDown.pfp}"></img>

                        <div class = "userReviewInfo">
                            <p id = "userName">${indexDown.name}</p>
                            <p> ${indexDown.noRevies} Reviews</p>
                        </div>
                    </div>
                            

                    <p id = "igPlaytime"> ${indexDown.igHours} hrs ingame </p>
                            
                    <p id = "postedTime"> Posted ${indexDown.time} ago</p>
                </div>

                <!--2-->
                <div class = "reviewContent">
                    <img src = "images/review/${indexDown.star}"></img>
                    <p> ${indexDown.content} </p>
                            
                    <div class = "voting">
                        <img class= "white" src = "images/review/${indexDown.upIcon}"></img>
                        <p> +${indexDown.up} </p>
                                
                        <p> ${mostDownvote[i].total} </p>

                        <img class= "white" src = "images/review/${indexDown.downIcon}"></img>
                        <p> ${indexDown.down} </p>
                    </div>
                </div>
                        
            </div>
        </div>
    `
}

upButton.addEventListener("click", ()=> {
    reviewBox.innerHTML = upValue;
    reviewFilter.innerHTML = document.querySelector(".upvote").innerHTML;
    filterContent.style.display = "none";
})

downButton.addEventListener("click", ()=> {
    reviewBox.innerHTML = downValue;
    reviewFilter.innerHTML = document.querySelector(".downvote").innerHTML;
    filterContent.style.display = "none";
})
