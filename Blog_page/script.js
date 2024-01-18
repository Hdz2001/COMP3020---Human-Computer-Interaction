let keywords = [
    'Overwatch',
    'Dont Starve Together',
    'Apex Legend',
    'OverCooked',
    'OverCooked 2',
    'Dont Starve',
    'Valorant',
    'CSGO',
    'Dead By Day Light',
    'Farming Simulator',
    'Supershot',
    'Stardew Valley',
    'Farm Together'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const searchBox = document.querySelector(".searchIcon");

searchBox.addEventListener("click", ()=> {

    if (inputBox.style.visibility == "hidden")
    {
        inputBox.style.visibility = "visible";
        resultBox.style.display = "block";
    }
    else{
        inputBox.style.visibility = "hidden";
        resultBox.style.display = "none";
    }

})

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    if (input.length){
        result = keywords.filter((keyword) => {
            let joinInput = input.replace(/\s/g, "");
            let joinKeyword = keyword.replace(/\s/g, "");

            if (keyword[0].toLowerCase().includes(input[0].toLowerCase()))
            {
                return joinKeyword.toLowerCase().includes(joinInput.toLowerCase());
            }
        });
    }

    display(result);

    if (!result.length)
    {
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick = selectInput(this)>" + list + "</li>"; 
    })

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";

    resultBox.style.display = "block";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}