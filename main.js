var formInput = document.querySelector(".wrapper-radio");
// var affirmationInput = document.getElementById("affirmation");
var mantraInput = document.querySelector(".wrapper-mantra");
var receiveMessageInput = document.getElementById("receive-message");
var randomMessage = document.querySelector(".message-goes-here");
var yogiSymbol = document.querySelector(".meditate-image");
var affirmation = document.getElementById("affirmation");

var fakeAffirmationData = ["Believe in yourself!", "You're doing great!", "Know your value!"]

// affirmationInput.addEventListener('click', loadRandomMessage())
receiveMessageInput.addEventListener('click', loadRandomMessage)

// function chooseMessage() {
//     receiveMessageInput
// }

 function loadRandomMessage() {
   console.log("input");
 console.log(formInput.value);
   if(formInput.value === "affirmation") { //for loop
     randomMessage.innerHTML = fakeAffirmationData[0];
   }
 }
// make file for mantra data and affirmation data. assign variable to file
