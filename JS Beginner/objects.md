## Objects

- JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
- Below is an eg. of objects:
```
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};
console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; prefer using the other one
```

## Context

- Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code or the function where it’s looked at. Use of "this" is that it refers to an object.
- Windows is a global object in the browser so if we type this in the console and it should return "window" object, which it does like below in the console:

```
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```
- The value of this keyword depends on the object the function is run/called /sit on. Therefore thiskeyword has different values depending on where it is used.

[Refer the context section for eg](./index.js)

### Context behaviour in "use strict"

- 

### Difference b/w strict and non-strict

## Arrays

- Objects are un-ordered collections of data using keys and values. Arrays, in contrast, are ordered collections of data. If you put something in an array, it has an order. 
- Eg. of an array: 
```
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
```
### Iterating through an array

```
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function (city) {
  console.log(city);
});
```






