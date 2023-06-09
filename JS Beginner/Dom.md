## The DOM

- The way that JavaScript and HTML/CSS interact with each other is a thing called the DOM, the Document Object Model. The DOM is basically a bunch of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page.

### Projects with implementaion of DOM:
- [Lift Simulation ](https://github.com/Anushka-shukla/Lift-Simulation)
- [Password Generator](https://github.com/Anushka-shukla/Random_Password_Generator)

- Read more [here](https://javascript.info/browser-environment)

## Events & Listeners

- An **event** can be triggered by the user action e.g. clicking the mouse button or tapping keyboard, or generated by APIs to represent the progress of an asynchronous task and it takes place in DOM.
- [Read more here](https://javascript.info/introduction-browser-events)
- An event is created every time certain events happens like when a user clicks something or when they type something. We respond to these events by having what are called **event listeners**.

### Event Bubbling & Capturing

#### Bubbling
-  When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. ()
- Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:

```
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
A click on the inner "paragraph tag" first runs onclick:

a) On that "paragraph" tag. <br>
b) Then on the outer "div" tag. <br>
c) Then on the outer "form" tag. <br>
d) And so on upwards till the document object.(bottom up) <br>

- So if we click on "paragraph tag", then we’ll see 3 alerts: p → div → form.
- The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.

**event.target**

- The most deeply nested element that caused the event is called a target element, accessible as event.target.

- Note the differences from this (=event.currentTarget):

a) **event.target** – is the “target” element that initiated the event, it doesn’t change through the bubbling process. <br>
b) **this** – is the “current” element, the one that has a currently running handler on it.

**Stopping bubbling**

- A bubbling event goes from the target element straight up. Normally it goes upwards till "html tag", and then to document object, and some events even reach window, calling all handlers on the path.

- But any handler may decide that the event has been fully processed and stop the bubbling.

- The method for it is **event.stopPropagation()**.

- [Refer for more](https://javascript.info/bubbling-and-capturing)

#### Capturing

- There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful. (top down approach)

- The standard DOM Events describes 3 phases of event propagation:

a) Capturing phase – the event goes down to the element.<br>
b) Target phase – the event reached the target element.<br>
c) Bubbling phase – the event bubbles up from the element.<br>

- The event first goes through the ancestors chain down to the element (capturing phase), then it reaches the target and triggers there (target phase), and then it goes up (bubbling phase), calling handlers on its way.

### Event Delegation
- It’s often used to add the same handling for many similar elements, but not only for that.

- The algorithm:

a) Put a single handler on the container.<br>
b) In the handler – check the source element event.target.<br>
c) If the event happened inside an element that interests us, then handle the event.<br>
- [Reference to learn more deeper](https://www.youtube.com/watch?v=pKzf80F3O0U)
- [Read more here](https://javascript.info/event-delegation)
