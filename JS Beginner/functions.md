## Functions

- A function is a bit of re-usable code.

```
function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
```

### Various Ways of Writing Functions

```
function bark() {
  console.log("woof");
}

const meow = function () {
  console.log("meeeeeeeow");
};

// the => is just = > put together, the font just combines them to one glyph(a specific form of a character)

const chirp = () => {
  console.log("chirp chirp");
};

bark();
meow();
chirp();
```

## Scopes

- Scope determines the accessibility of variables, objects, and functions from different parts of the code.

- Eg- in the below code we are logging "someVariable" outside the function "addFive" barces so it is out of scope. If it was written in inside the curly braces of the function it'd be in the scope of that function. 

``` function addFive(number) {
  const someVariable = "you can't see me outside this function";
  return number + 5;
}

addFive(10);
console.log(someVariable);
```

## Builtins

- Lots of functions already exist for you! Smart people have created this commonly-used functions for things we often need.
- Eg: see below functions "toLowerCase()" is a builtin function. Similarly there are more such functions in JS- split, toUpperCase(), slice, trim, substring etc. [Refer for more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```
const sentence = "ThIs HaS wEiRd CaSiNg On It";
const lowerCaseSentence = sentence.toLowerCase();
console.log(lowerCaseSentence);
```

More Eg.

```
// want to round a number? use Math!
const number = 5.3;
const roundedNumber = Math.round(number);
console.log(number);
```
- Read more on function [here](https://javascript.info/function-basics)