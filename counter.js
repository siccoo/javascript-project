let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowCountBtn");

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > '0') {
        counter.style.color = '#4caf50';
    } else if (counter.innerHTML === '0') {
        counter.style.color = '#ffdd55';
    }
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = '#ff0000';
    } else if (counter.innerHTML === '0') {
        counter.style.color = '#ffdd55'
    }
}



