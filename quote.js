const quotes = [
{
    name: "Uzodinma Iweala",
    quote: "Nigeria is a difficult place. It is not a country for the faint of heart. On a good day, when our larger cities such as Abuja, Lagos, and Kano are filled with the teeming masses going in so many different directions, flogged by the heat and sun, bumping down uneven roads all in the name of 'the hustle,' it can appear chaotic."   
},

{
    name: "Goodluck Jonathan",
    quote: "We want to lead a country where people will be less greedy. Where people will know that the commonwealth of Nigeria belongs to all Nigerians, where people's wealth depends on the people around you. If you become a rich person and everyone around you is poor you are very poor."
},

{
    name: "Yemi Osibanjo",
    quote: "Nigeria's unity is one for which enough blood has been spilled and many hundreds of thousands of lives have been lost. Many have paid for the unity of this country with their lives, and it will be wrong of us, as men and women of goodwill in this generation, to toy with those sacrifices that have been made."
},

{
    name: "Ibrahim Babangida",
    quote: "The work of Nigeria is not complete for as long as there is any one Nigerian who goes to bed on empty stomach."
},

{
    name: "Chris Abani",
    quote: "My mother was English. My parents met in Oxford in the '50s, and my mother moved to Nigeria and lived there. She was five foot two, very feisty and very English."
},

{
    name: "Wole Soyinka",
    quote: "Nigeria has had the misfortune - no, the fortune - of seeing the worst face of capitalism anywhere in Africa. The masses have seen it, they are disgusted, and they want an alternative."
},

{
    name: "Chinua Achebe",
    quote: "I've had trouble now and again in Nigeria because I have spoken up about the mistreatment of factions in the country because of difference in religion. These are things we should put behind us."
},

{
    name: "Chimamanda Ngozi Adicie",
    quote: "Nobody just leaves medical school, especially given it's fiercely competitive to get in. But I had a sister who was a doctor, another who was a pharmacist, a brother who was an engineer. So my parents already had sensible children who would be able to make an actual living, and I think they felt comfortable sacrificing their one strange child."
}

]

const quoteBtn = document.querySelector('button');
const quote = document.querySelector("#quote");
const authorQuote = document.querySelector("#author-quote");

quoteBtn.addEventListener('click', displayQuotes);

function displayQuotes() {
    let number = Math.floor(Math.random()*quotes.length);
    // console.log(number);

    authorQuote.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote; 
}