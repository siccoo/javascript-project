let hexNumbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let hexBtn = document.querySelector('button');
let bodyBcg = document.querySelector('body');
let hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexCol = '#';
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        // console.log('random')
        hexCol += hexNumbers[random];
        // console.log('hexCol');
    }

    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}

// Completed Randomly changing of Hex colors