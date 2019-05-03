const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide() {

}

function nextSlide() {
    if (counter === 4) {
        counter = -1;
    }

    container.animate([
        {
            opacity: '0.1'
        },
        {
            opacity: '1'
        }
    ], {
        duration: 1000,
        fill: 'forwards'
    });

    counter++;
    container.style.backgroundImage = `url(images/bcg-${counter}.jpg)`
}

function prevSlide() {
    if (counter === 0) {
        counter = 5;
    }

    container.animate([
        {
            opacity: '0.1'
        },
        {
            opacity: '1'
        }
    ], {
        duration: 1000,
        fill: 'forwards'
    });

    counter--;
    container.style.backgroundImage = `url(images/bcg-${counter}.jpg)`
}