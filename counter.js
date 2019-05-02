let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowCountBtn");

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);
counter.addEventListener('click', changeColor);

function incrementCounter() {
    count++;
    counter.innerHTML = count;
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
}

function changeColor() {
    let color = addCount.style.color;
    let color = lowCount.style.color;
    addCount.style.color = 'green'; 
    lowCount.style.color = 'red';
}


