var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset")

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        console.log(p1Score, winningScore);
        if(p1Score===winningScore){
            p1Display.classList.add("winner");
            console.log("game over");
            gameOver = true;
        }
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        console.log(p1Score, winningScore);
        if(p2Score===winningScore){
            p2Display.classList.add("winner");
            console.log("game over");
            gameOver = true;
        }
    p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    console.log("reset");
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})
// "this" assumes the original object that the .addEventListener is applied to. this = numInput.
// .value METHOD of numInput
// Number(object) turns value into NUMBER
