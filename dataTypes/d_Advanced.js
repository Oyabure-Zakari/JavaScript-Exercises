//Advanced Level:

// 1) Deep Type Checker
//Create a function deepTypeChecker(input) that takes a nested object or array and returns a new object showing the data type of each value at every level.

//* solutions
function deepTypeChecker(input) {
  if (Array.isArray(input)) {
    return input.map(deepTypeChecker); // Recursively process each element of the array
  } else if (input && typeof input === "object") {
    return Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, deepTypeChecker(value)])
    ); // Recursively process each key-value pair in the object
  } else {
    return typeof input; // Return the type for non-object, non-array values
  }
}

// console.log(deepTypeChecker({ a: 1, b: "hello", c: [true, null] }));
// { a: "number", b: "string", c: ["boolean", "object"] }

// 2) Custom Data Type Parser
//Implement a function parseData(data) that takes a string input and returns its parsed value. It should recognize numbers, booleans, null, arrays, and objects. If the string cannot be parsed, return "Invalid data".

function parseData(data) {
  try {
    // Use JSON.parse to handle valid JSON strings
    return JSON.parse(data);
  } catch {
    // Handle cases where the input isn't valid JSON
    try {
      // Evaluate strings like "{ key: 'value' }" using the Function constructor
      return Function(`'use strict'; return (${data.replace(/'/g, '"')});`)();
    } catch {
      return "Invalid data";
    }
  }
}

// Test cases
console.log(parseData("42")); // 42
console.log(parseData("[1,2,3]")); // [1, 2, 3]
console.log(parseData(`{ key: 'value' }`)); // { key: "value" }
console.log(parseData("true")); // true
console.log(parseData("null")); // null
console.log(parseData("{ a: 1, b: [2, 3] }")); // { a: 1, b: [2, 3] }
console.log(parseData("invalid string")); // "Invalid data"
