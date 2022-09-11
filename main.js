var affirmationButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var receiveMessageButton = document.querySelector(".button");
var outputDisplay = document.querySelector(".input-message-or-icon");
var messageDisplay = document.querySelector(".message-goes-here");
var iconDisplay = document.querySelector(".meditate-image");
var errorMessage = document.querySelector(".error-message");
// affirmationInput.addEventListener('click', loadRandomMessage())
//Add Event Listeners here
receiveMessageButton.addEventListener('click', affirmationDisplay)

// function chooseMessage() {
//     receiveMessageInput
// }
// functions here


var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.","I am worthy of my dreams.",
  "I am enough.","I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];
var originalAffirmations = affirmations
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];
var originalMantras = mantras

function getRandomIndex(array, original) {
  if(array.length === 0) {
    errorMessage.innerText = "Message list starting over."
    array.push(...original)
  } else {
    errorMessage.innerText = ""
  }
  var index = Math.floor(Math.random() * array.length);
  var statement = array[index]
  array.splice(index, 1)
  return statement
};

// function showEveryStatement(array) {
//   var affirmationMessage
//   for (var i = 0; i < affirmations.length-1; i++) {
//     console.log(affirmations[i])
//   }



function affirmationDisplay(event) {
  event.preventDefault()
  if(affirmationButton.checked) {
    var affirmationMessage = getRandomIndex(affirmations, originalAffirmations)
    messageDisplay.innerText = affirmationMessage
  } else if(mantraButton.checked) {
    var mantraMessage = getRandomIndex(mantras, originalMantras)
    messageDisplay.innerText = mantraMessage
  }
  iconDisplay.classList.add("hidden")
};








// module.exports()
 // function loadRandomMessage() {
 //   console.log("input");
 // console.log(formInput.value);
 //   if(formInput.value === "affirmation") { //for loop
 //     randomMessage.innerHTML = fakeAffirmationData[0];
 //   }
 // }
// make file for mantra data and affirmation data. assign variable to file
