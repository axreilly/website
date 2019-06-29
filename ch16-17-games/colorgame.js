var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    this.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
// style.display = none/invisible, block/visible
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    this.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }   
});

resetButton.addEventListener("click", function(){
    // generate all new colors
    this.textContent = "New Colors"
    messageDisplay.textContent = ""
    colors = generateRandomColors(numSquares);
    // pick new random correct colors
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // change color of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue"
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add colors
    squares[i].style.background = colors[i];
// add click listener
    squares[i].addEventListener("click", function(){
        // grab color of clicked square, "this" refers to i
        var clickedColor = this.style.background;
        // compare clicked color to correct color (picked by cpu)
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
    // change each color to match picked
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
// make array
var arr = []
// repeat num times
for(var i = 0; i < num; i++){
    arr.push(randomColor())
    // get random color and push into array
}   
// return array at end
return arr;
}

function randomColor(){
    // pick 3 values from 0-255 range
var r  = Math.floor(Math.random() * 256);
var g  = Math.floor(Math.random() * 256);
var b  = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b+ ")";
}