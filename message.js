const sendBtn = document.querySelector("button");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

sendBtn.addEventListener("click", sendMsg);

function sendMsg() {
    let msgContent = messageIn.value;
    // console.log(msgContent)

    if (msgContent === ''){
        alert('Please field is blank, type a message');
    } else {
        messageOut.innerHTML = msgContent;
        messageIn.value = '';
    }   
}