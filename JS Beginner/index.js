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

// Loops

// while loop
let friendsAtYourPartyCount = 0;
while (friendsAtYourPartyCount < 10) {
  
  friendsAtYourPartyCount = friendsAtYourPartyCount + 1;
  console.log(friendsAtYourPartyCount + " friend joined")
}
console.log(friendsAtYourPartyCount);

// for loop

let friendsAtYourPartyCountTwo = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourPartyCountTwo++;
}
console.log(friendsAtYourPartyCountTwo);

// increment and decreamnet
let friendsAtYourPartyThree = 0;
friendsAtYourPartyThree = friendsAtYourPartyThree + 1;
friendsAtYourPartyThree += 1;
friendsAtYourPartyThree++;
++friendsAtYourPartyThree;
console.log(friendsAtYourPartyThree);

// context
// "this" refers to "me" which is an object

const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA",
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  },
};

console.log(me.getAddress());