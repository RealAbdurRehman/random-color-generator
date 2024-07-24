const hexValueNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
];

let background = document.querySelector("body");

let button = document.querySelector(".clicker");

let colorName = document.querySelector("span");

button.addEventListener('click', function() {

    let hexNumbers = [];

    for (let i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * hexValueNumbers.length);
        hexNumbers[i] = hexValueNumbers[randomIndex] 
    };

    let hexColor = "#" + hexNumbers.join("");

    background.style.backgroundColor  = hexColor;
    
    colorName.innerText = hexColor;
});