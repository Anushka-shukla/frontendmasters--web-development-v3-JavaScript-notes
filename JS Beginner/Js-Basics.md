## JS Basics Overview

- Js is single threaded, one thging is happening at a time not multiple things =happen at a time. Which also means it executes line by line.

```
Eg: const monthlyRent = 5000;  
const yearlyRent = monthlyRent * 12;  
console.log(yearlyRent);  
```

- In the above eg. "monthlyRent" is a **variable** that stores a value and **const** is a reserved keyword which means constant i.e. a vriable won't change later. **var** is another keyword which is an old way of defining a variable.
- ES6 or ECMAScript stands for European Computer Manufacturers Association which is a standardisation body.
- ";" semicolns are optional in JS we can avoid them too.


## Adding JS to a webste 

- In index.html add below just before the body tag ends because it gives the HTML time to load before any of the JavaScript loads, which can prevent errors, and speed up website response time.

```
<script src="index.js"></script>
```

## Numbers, Strings & Booleans

- For strings refer [index.js file](./index.js) strings section. Strings can be enclosed in double (" "), single (' ') quotes and back ticks too ( `` ).
- Booleans data types that can have only true and false values. And by default all the values are true.
- Some languages separate integers (whole numbers, like 1, 2, 3, 4, 500, 1000) and floats (1.2, 3.14159, 14.01, etc.) differently but not JavaScript. JavaScript just has one type of number, Number. A number is a number.
- "=" is used for **assigning values** while for **is this equal to that** we use "===" in JS
- "!==" is used in case of **is this not equal to that**