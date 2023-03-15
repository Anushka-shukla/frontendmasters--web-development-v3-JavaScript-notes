## Control Flow & Loops

- The condition inside of the parenthesis is evaluated and if it's true, the first block is run and the second is skipped.
```
const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}
```

See [index.js](./index.js) control flow section for more egs.

## Loops

- In order to avoid writing the same statement repeatedly we use loops.
- In JS we have "while loop" and "for loops" as below:

#### while loop
```
let friendsAtYourParty = 0;
while (friendsAtYourParty < 10>) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);
```

#### for loop
```
let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);
```



