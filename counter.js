const counter = document.querySelector("h1");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowCountBtn");

const count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter() {
    count++;
    counter.innerHTML = count;
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
}


