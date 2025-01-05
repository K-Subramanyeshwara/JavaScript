# Error Handling

Eroor handling is reponding and managing the errors to prevent application from crashing or unexpected behaviour.

## Why error handling?

- Prevent Crashes
- Improve User Experience
- Debugging and Logging

## Types of Errors in JavaScript

- Syntax Errors - Occur when the code violates the syntax rules of JavaScript.
  - Examples: Missing parentheses, misspelled keywords, incorrect use of operators.
- Runtime Errors - Occur during the execution of the program.
  - Examples: Division by zero, accessing undefined variables or properties, calling undefined functions.
- Logical Errors - When there is problem with the logic. It will not throw any error message.

## Built-in Errors in JavaScript

- `SyntaxError`: Occurs due to syntax mistakes in the code.
- `ReferenceError`: Occurs when an invalid reference is used. Ex: accessing a variable that has not been defined.
- `TypeError`: Occurs when a value is not of the expected type. Accessing properties/methods of undefined or null.
- `RangeError`: Occurs when a value is outside the allowable range.
- `URIError`: Occurs when `encodeURI`, `decodeURI`, or similar functions are used incorrectly.

## Ways to Handle Errors in JavaScript

### `try...catch...finally`

```JS
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that will always run, even if no error occurs
}
```

- Finallt used in cases where you want to close the database connection

### `throw` Statement
