const blogs = [
    {
        id: 1,
        title: "Title 1",
        image: "1.png",
        time: "1 hour"
    },
    {
        id: 2,
        title: "Title 2",
        image: "2.png",
        time: "2 hours"
    },
    {
        id: 3,
        title: "Title 3",
        image: "3.png",
        time: "3 hours"
    },
    {
        id: 4,
        title: "Title 4",
        image: "4.jpg",
        time: "1 day"
    },
    {
        id: 5,
        title: "Title 5",
        image: "5.jpg",
        time: "1 day"
    },
    {
        id: 6,
        title: "Title 6",
        image: "6.jpg",
        time: "2 days"
    },
    {
        id: 7,
        title: "Title 7",
        image: "7.jpg",
        time: "2 days"
    },
    {
        id: 8,
        title: "Title 8",
        image: "8.jpg",
        time: "3 days"
    },
]

const blogList = document.querySelector(".blogList");

for (var i=0; i<blogs.length; i++)
{
    blogList.innerHTML = blogList.innerHTML + 
    `
        <div class = "blogListContent">
            <div class = "blogImage">        
                <p id = "imageTitle${i}">${blogs[i].title}</p>
                <a style = "color: white" href="../Blog_page/index.html">
                    <img id = "imageBox${i}" src = "images/blogList/${blogs[i].image}"></img>
                </a>           
            </div>
            <p>Posted ${blogs[i].time} ago</p>
        </div>
    `
}

const blogIMG = document.querySelectorAll(".blogImage");

for (var i=0; i<blogIMG.length;i++){
    let id = "imageTitle" + i;
    let id2 = "imageBox" + i;
    let img = blogIMG[i];

    img.addEventListener("mouseover", ()=> {
        document.getElementById(id).style.display = "inline-block";
        document.getElementById(id2).style.border = "solid";
    })

    img.addEventListener("mouseout", ()=> {
        document.getElementById(id).style.display = "none";
        document.getElementById(id2).style.border = "none";
    })
}



