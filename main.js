var affirmationButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var receiveMessageButton = document.querySelector(".button");
var outputDisplay = document.querySelector(".input-message-or-icon");
var messageDisplay = document.querySelector(".message-goes-here");
var iconDisplay = document.querySelector(".meditate-image");

// affirmationInput.addEventListener('click', loadRandomMessage())
//Add Event Listeners here
receiveMessageButton.addEventListener('click', viewOutput)

// function chooseMessage() {
//     receiveMessageInput
// }
// functions here
function viewOutput() {
  iconDisplay.style.display = "none";
  messageDisplay.style.display = 
}





 function loadRandomMessage() {
   console.log("input");
 console.log(formInput.value);
   if(formInput.value === "affirmation") { //for loop
     randomMessage.innerHTML = fakeAffirmationData[0];
   }
 }
// make file for mantra data and affirmation data. assign variable to file
