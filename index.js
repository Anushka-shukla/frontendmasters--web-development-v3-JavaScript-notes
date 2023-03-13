// Eg - 1
const monthlyRent = 5000;  
const yearlyRent = monthlyRent * 12;  
console.log(yearlyRent);  
console.log("Hello World!")
console.log("Don\'t do that.."); // escape sequence

// Strings
const firstName = "Brian";
const lastName = "Holt";
const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! Hope you\'re doing well!`;

console.log(sentence);
console.log(sentenceWithTemplate);

// Booleans
let isSkyGreen = false;
console.log(isSkyGreen);

// Numbers
let cottonWeight = 10.5;

/////////////// Control flow ////////////////////////////////
// eg--1
const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

// eg--2

// if you see three lines, it's just three = in a row, ===. the font just combines them into one big character
if (2 + 2 === 4) {
    console.log(
      "Oh thank god, the fundamental principles of mathematics still hold true."
    );
  } else {
    console.log("Uh, panic?");
  }

// eg-3

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}







