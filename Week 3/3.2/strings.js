/* so my first attempt fizzeled out into confusion. instead I am taking the string, 
breaking it up with split, reversing the order, and rejoining it. This 
idea came from the twos compliment using integers to represent negative numbers. I
use this at work for negative numbers and made me think of just reversing the 
characters, if they reverse and are true, then its a palindrome!*/
const checkButton = document.getElementById("checkButton"); //so I am getting the element by its ID from the document
const palindromeInput = document.getElementById("palindromeInput");
const resultOutput = document.getElementById("resultOutput");


function checkInputField() {
    if (palindromeInput.value.trim().length === 0) {
        resultOutput.textContent = "Waiting for your entry...";
    } else {
        resultOutput.textContent = ""; // Clear message if input is provided
    }
}
//okay I am just going to use what I know to create a loop, an incrementing timer. This is eating my lunch.
//there realy isnt a need for a loop in my code, but I have gone through hell adding one in. 
let counterPreset = 10;
for (let counter = 0; counter < counterPreset; counter++) { //set counter to zero, if counter is less than the max count, increment counter
    setTimeout( function() {  //https://www.w3schools.com/js/js_timing.asp
        console.log(`60 sec: ${counter}`);
        if (palindromeInput.value.trim().length === 0) {
            resultOutput.textContent = "Waiting for your entry...";
        }// else {
             //   resultOutput.textContent = ""; //clear if text is entered
       // }
        if (counter === counterPreset - 1) { //if the counter hits max value
            resultOutput.textContent = "you took longer than 10 minutes, please refresh the browser";
        }
    }, counter * 60000); //  60sec timer
}


/* now I want to check for my 'event'. my event is just going to be
a button click. when I looked up events I found 'event listener'... 
the big thing here is adding more event handlers to the same element, which I am preparing for because
I want to add some animation here. w3 has this for event listener https://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/
checkButton.addEventListener("click", function() {
  const inputText = palindromeInput.value;

/* when I started looking up the stuff to clean up text entry, I came across sanitation using the replace. 
 I hope its okay to use this, it takes out some of the manual part of changing everything from
 however the user entered it and just makes it into a string of lower case letters and getting rid of the spaces. 
*/
const sanitizedInput = inputText.replace(/[^a-zA-Z]/g, "").toLowerCase(); //from https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_pattern
// and https://www.w3schools.com/jsref/jsref_regexp_charset_not.asp
console.log("sanitized", sanitizedInput);

const splitInput = sanitizedInput.split(""); //okay this seems easier than trying to sepearate the outers and moving in, just split them into an array of substrings, or each part... from here https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split6  
console.log("split input", splitInput);

const reorderSplitInput = splitInput.reverse(); // now I will reverse them, this is slick! https://www.w3schools.com/jsreF/tryit.asp?filename=tryjsref_reverse
console.log("after reversing", reorderSplitInput)

const rejoinString = reorderSplitInput.join(""); // and recombine them. then compare the whole thing to the input. https://www.w3schools.com/jsref/jsref_join.asp
console.log ("joined", rejoinString);
    // now lets compare the sanitized input to the split, reversed, and joined string. This should work...
const isPalindrome = sanitizedInput === rejoinString
    // so if the string length is nothing, display "enter your palindrome"
    // else if it is true (or equal is a better word), say this is a palindrome, good job!
    // else if it is not, say "this is not a palindrome, try again"
  if (/[^a-zA-Z\s]/.test(inputText)) { //so if not alpha upper/lower, test inputText
         resultOutput.textContent = "Please use letters only!";
      } else if (sanitizedInput.length === 1) { 
         resultOutput.textContent = "Dont get cute, use a whole word :)";
      } else if (sanitizedInput.length === 2) { 
            resultOutput.textContent = "c'mon... use a whole word";
      } else if (sanitizedInput.length === 0) { //else if there is no text
            resultOutput.textContent = "Please enter some text.";
      }  else if (isPalindrome) { //if it is actually a palindrome
        resultOutput.textContent = `"${inputText}" This is a palindrome, good job!`;     // https://www.w3schools.com/js/js_string_templates.asp
      } else { //and if its not
        resultOutput.textContent = `"${inputText}" This is not a palindrome, try again`;
      }
})

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const nameOver20 = document.getElementById("nameOver20");
const zipCode = document.getElementById("zipCode");
const badZip = document.getElementById("badZip");
function addNames () {
    const totalCount = (firstName.value + " " + lastName.value).length

    if (totalCount < 20 ) {  //if there are less than 20 characters in the total count
        nameOver20.textContent = `"${totalCount}" Less than 20 Characters`; //send the output as the message
    } else if (totalCount > 20){ //else stop the program
        nameOver20.textContent = "Name too long. Blame your parents.";
        return; //stop program if not right
    }
}
function checkZip() { //basically the same as above, just with different conditino checks
    const zipTotalCount = (zipCode.value.length === 5)
    const zipNumbersOnly = /^[0-9]+$/.test(zipCode);

    if (zipTotalCount  && zipNumbersOnly) {
        badZip.textContent = `"Your super secrete message is: Potato"` //creative, I know
     } else if (!zipTotalCount) {
        badZip.textContent = "Invalid ZIP code. Please enter 5 digits.";
        return;
     }
       
    }

// this is all code I was trying to setup, but was wasting too much time. I dont want to delete it
/*This is where the magic happens. In the html I have created the input
box, a check button, a form reset button, and an output text display.
now what I need to do is when the button is pressed (event) I will 
evaluate the string. first I will count the characters, find the middle
character position and use it for animation later. Then I will compare
the first character to the last character, the second to last to the second,
and so on. if there is an even number of characters, it will check all
positions, if there is an odd number, it will not check the center.
(later, if possible, I will include the ability to check phrases)
Once I have deteremined if the input is a palindrome (by comparing characters)
I will give an output of "success" or "fail". If fail, I will popup a
message with an explaination of a palindrome and prompt the user to tryagain
*/
//const findLength = sanitizedInput.length; // get the length
//console.log("string lenth", findLength)
//const findMiddle = Math.floor(findLength/2); //use the math function and divide the string length by 2 to get the middle
//console.log("middle", findMiddle) // this doesnt work. debugger says math is not defined at button element. I think I have 
                                  // to make another function to do math? found it, math needs to be Math. uhg. 
/* okay this is getting muddy. this worked for odd string lengths. but for even, I
 need to take both middle and split those so I can rotate the text around an imaginary center position 
 like the vsauce video. If I make another function to handle all of this, 
 I will have nested functions? Can I even do that in js? Lets see...*/
  /*  const centerToRotateAround = (sanitizedInput) =>{ // learned that => is the same as function()
    const findLength = sanitizedInput.length; // get the length
    console.log("string lenth", findLength)
    const findMiddle = Math.floor(findLength/2); //use the math function and divide the string length by 2 to get the middle
    console.log("string lenth", findLength)
    if (length % 2 === 0) { // so if the lenght is divided by 2 and there is a remainder, it is not even, but if it is, we will use that for this if statement
        const left = sanitizedInput.slice(0, middle); // left half
        const right = sanitizedInput.slice(middle);  // right half
        return right + left; // swap left and right
       } else {
        const left = sanitizedInput.slice(0, middle); // left part (before the middle)
    const middleChar = sanitizedInput[middle];   //  middle character
    const right = sanitizedInput.slice(middle + 1); // right part (after the middle)
    return right + middleChar + left; // Rotate keeping middle section in place
    // okay...this is becoming a waste of time. I am going to comment this out for now 
        }
    };
       */