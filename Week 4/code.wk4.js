
// Okay this is suposed to move the image around the page with a start and stop button. It should enable and disable the
//start button. This should call another function to move the image around the page. another function to disable/enable the
//stop button. use onClick to disable/enable

// let moveAmount; // variable for the move amount ID // I didnt end up using this

// this will be a function to randomly move the doggo image. 
function moveImage(){
    const doggo = document.getElementById('doggoImage'); //get the image based on the ID, doggoImage

//so my idea is to change x and y coords of the image randomly... so just use the math.random we used before
// okay this disapears off the screen... so I need to use the windows width as a constaraint
//and subtract the image size. x is width, y is height
//and still almost oges off the screen. I think this is based off the center (correction, width!) of the image, so I will just take 100px more?
    const x = Math.floor(Math.random() * (window.innerWidth - doggo.width -100));
    const y = Math.floor(Math.random() * (window.innerHeight - doggo.height -100));

    // I dont know if this will work, but i found this https://www.w3schools.com/cssref/pr_class_position.php
    //I am not sure if I can change css properties or html properties in the js? but going to try!
    // okay that works
    doggo.style.position = 'absolute';
    doggo.style.left = `${x}px`;
    doggo.style.top = `${y}px`;
}

// Function for start button to start the movement
function startMovement() {
    // Disable Start button, enable Stop button... I mean its just boolena, right? https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_disabled
    //right, it works that easy
    document.getElementById('buttonA').disabled = true;
    document.getElementById('buttonB').disabled = false;

    //so I ahve to addEventlistener for the button press, but what I will do is have that event listener start this function
    // and in this function I will move the image... I ususally use time based in the automation world... so going with what 
    //I know, I need to move the image automatically every set amount of time. kind of like using a countdown timer. 
    //https://www.w3schools.com/js/js_timing.asp looks like setInterval is the same as a free running timer. 
    moveInterval = setInterval(moveImage, 250);
}

// Function for stopping the movement, opposite logic from above
// https://www.w3schools.com/js/js_timing.asp says if I clear the interval it will stop
//it does
function stopMovement() {

    // Enable Start button, disable Stop button
    document.getElementById('buttonA').disabled = false;
    document.getElementById('buttonB').disabled = true;

    // Stop the movement
    clearInterval(moveInterval);
}

// "Wire" the buttons to functions... I think they mean to link the event to the button click. not sure if "wire" is the lingo of this language...
// okay this keeps giving me Cannot read properties of null (reading 'addEventListener'). I need  something like what we use in PLC... S:FS... start on first scan. I guess that would be
// start when the page is fully loaded? because it calls the script before the buttons are evena availabel to be read
// this isnt working. surely there is something out there for "wait until its loaded"
//AHA! https://www.w3schools.com/jsref/met_html_focus.asp
window.onload = () => {
    document.getElementById('buttonA').addEventListener('click', startMovement);
    document.getElementById('buttonB').addEventListener('click', stopMovement);

    // okay this isnt fixing the s:fs thing... so I am just going to set the stop button to true when the page is loaded. 
    document.getElementById('buttonB').disabled = true;
};