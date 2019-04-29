let colorBtn = document.querySelector('button');
let bodyBg = document.querySelector('body');

let colors = [ 'Yellow', 'Red', 'Green', '#3b5998' ]


colorBtn.addEventListener('click', changeColor);

function changeColor() {
    // bodyBg.style.backgroundColor = colors[1];
    let random = Math.floor(Math.random()*colors.length);
    bodyBg.style.backgroundColor = colors[random];

}

// colorBtn.addEventListener("click",changeColor);

// Completed Random changing of background color
