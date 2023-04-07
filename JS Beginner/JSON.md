## JSON

- The JSON object contains methods for parsing **JavaScript Object Notation (JSON)** and converting values to JSON. It can't be called or constructed.
- JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. 
- Eg JSON: 
```
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```
- We can use the JSON.parse() method to convert the above JSON string into a JavaScript object:
```
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));

```

### Static methods

- JSON.parse(): Parse a piece of string text as JSON, optionally transforming the produced value and its properties, and return the value.
- JSON.stringify(): Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.