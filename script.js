let colorBtn = document.querySelector('.colorBtn');
let bodyBg = document.querySelector('body');

let colors = [ 'Yellow', 'Red', 'Green', '#3b5998' ]


colorBtn.addEventListener('click', changeColor);

function changeColor() {
    // bodyBg.style.backgroundColor = colors[1];
    let random = Math.floor(Math.random()*colors.length);
    bodyBg.style.backgroundColor = colors[random];
}

// Completed Random changing of background color

let hexNumbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let hexBtn = document.querySelector('.hexBtn');
let bodyBcg = document.querySelector('body');
let hex = document.querySelector('.hex');

hexBtn.addEventListener('click', changeColor);

function getHex() {
    let hexCol = '#';
    for(let i = 0; i < 6; i++) {
        let rendom = Math.floor(Math.random()+hexNumbers.length);
        hexColor += hexNumbers[random];
        console.log(hexCol);
    }
}

// Completed Randomly changing of Hex colors