let timer = 60;
let score = 0;
let hitNumber = 0;

let panelBottom = document.querySelector("#panel-bottom")
let hitValue = document.querySelector("#hitValue")
let scoreValue = document.querySelector("#scoreValue")
let bubble = document.querySelector(".bubble")

//this function makes new bubbles
function makeBubble(){
    let clutter = "";
for(let i=1; i<=168; i++){
    let randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`
}
    panelBottom.innerHTML = clutter
}

//this function updates the value of bubbles on every new hit and restricts from adding new 168 bubbles everytime
function updateBubbleNumbers() {
    let bubbles = document.querySelectorAll(".bubble"); // Select all bubbles
    bubbles.forEach((bubble) => {
        let newNumber = Math.floor(Math.random() * 10); // Generate new random number
        bubble.textContent = newNumber; // Update existing bubble
    });
}

//this function runs the timer
function runTimer(){
    let timeOut = setInterval(function(){
        if (timer > 0){
            --timer;
            document.querySelector("#timerValue").textContent = timer;
        }else {
            clearInterval(timeOut)
            panelBottom.innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}

//this function tells which number is to be hitted
function numberToBeHitted(){
    hitNumber= Math.floor(Math.random() * 10);
    hitValue.textContent = hitNumber
}

//this function updates the score
function updateScore(){
    score += 10;
    scoreValue.textContent = score
}

//this will tell what to do whenever a bubble is clicked
panelBottom.addEventListener('click' , function(details){
    let clickedNumber = (Number(details.target.textContent))
    if(clickedNumber == hitNumber){
        updateScore();
        updateBubbleNumbers();
        numberToBeHitted();  
    }
})


makeBubble();
runTimer();
numberToBeHitted();
