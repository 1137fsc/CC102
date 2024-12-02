//this is where I am going to put my function. my plan is to create the funtion
//and call it playRPS. I will declare three constants; rock, paper, scissors and
//one for the players choice of number. 
//basically going to assign a number to each play, 1 for rock, 2 for paper, 3 for scissors
//Then use the random number generator to chose a number between 1 and 3 and then do the math
//or compare to see if the computer or human had the winning hand. then use the math function
//to see who wins 2 out of 3 plays. 
//if I have time, I will add in images to the buttons for selection. 

function playRPS(playersChoice) {
//map constants to the words, or give a value to the words within the array
const choices = ['ROCK', 'PAPER', 'SCISSORS']
//another constant for the players choice... will search for the position of the above constants array... 
//then I will add 1 to that, this way the zero position is basically ignored. 1 will be assigned to the 0, 2 to the 1, 3 to the two
//and now I have my number for the constant mapping...
const playerNumber = choices.indexOf(playersChoice) + 1; 

// now to do the random generator. so the math.random will create a number between 0 and 1 as a decimal
// so I have to figure out how to get rid of the decimal... Multiply times 3.. then
// use the math.floor to round down? https://www.w3schools.com/jsreF/jsref_floor.asp This only creates 1 and 2.
//maybe just add 1? yes, that works
const computerNumber = Math.floor(Math.random() * 3) + 1;
const computerChoice = choices[computerNumber - 1]; //uhg, the index of the array starts at 0, not 1. subtract one to get this back to the array. annoying, but I get it

// okay now for the guts. well declare a variable for the result using let. and well 
//say that player choses (playerschoice), and computer choses (computersChoice)
let resultMessage = `You chose ${playersChoice} <br /> <br /> Computer chose ${computerChoice}. `;
    if (playerNumber == computerNumber) {
        resultMessage += "<br /> <br /> DRAW! <br /> No Winner. <br /> <br />  Play Again!";//if both random number and player number are the same, its a draw
    } else if (
        (playerNumber == 1 && computerNumber == 3) || // rock beats scissors OR
        (playerNumber == 2 && computerNumber == 1) || // paper beats rock OR
        (playerNumber == 3 && computerNumber == 2)    // scissors beats Paper 
        //so compare player number to random number, had to add the OR because it stops at the first one
    ) {
        resultMessage += "<br /> <br /> You WIN!"; //if any of the above are correct, player wins
    } else {
        resultMessage += "<br /> <br /> YOU LOSE!"; //else they lose
    }

    // this satisfies the requirement from the assignment https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    document.getElementById("gameResult").innerHTML = resultMessage; 
}
