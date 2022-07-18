//user guesses a # 1-100
//app should respond hot or cold
//keep track of previous guesses
//new random number every time it starts
// A player can input a guess in the input field and submit it.
// If the guess submitted is the winning number, the game indicates the player has won. Otherwise, the game indicates the player is allowed to try again.
// The game shows the player a message after each incorrect guess that hints how close they are to the winning number and whether to guess lower or higher.
// After 5 unsuccessful guesses, the game indicates that the player has lost.





//declare global scopes
let guesses = [];
let guess = 0;
let guessCount = 0;
let difference = 0;
let correct = Math.round(Math.random() * 100)+1;
let guessList = document.querySelectorAll(".guessList");

console.log(correct);

//checking # of guesses

let submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", function() {

    // grab guess from input
 let guess = document.getElementById("guess").value;
console.log(guess);



   // checks if guess fits criteria
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert("Please enter a valid number between 1-100!");
    }
    
     if (guess === correct) {
        alert ("You got it in 5 tries!!");

    } 

    // otherwise, push guess to array of guesses and adds +1 to guessCount
    else {
        guesses.push(guess);
        guessCount += 1;
        // comparing difference and making appropriate style changes
        difference = Math.abs(guess - correct);


    guessList.textContent = guesses;


if (0 == difference){
    alert ("you are righto!");
}

         else if (5 >= difference) {
            alert ("you are very warm!");
        }
        // warm if absolute difference is equal to or less than 10
        else if (10 >= difference) {
            alert ("you are kind of warm!");
        }
        // otherwise, it's just very cold
        else {
            alert ("you are very cold!");
        }
        
        // if user has reached max # of guesses
        if (guessCount === 5) {
            //  if last guess is correct let them know
        
            if (guess === correct) {
                alert ("You got it in 5 tries!!");

            } 
            //if last guess is wrong ask to reset
            else {
                alert ("You ran out of chances. Please try again by refreshing!");
            }
        }
    }
});





// //reset the game

let resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", function(){
    guess.value = "";
    let correct = Math.round(Math.random() * 100)+1;

})



































