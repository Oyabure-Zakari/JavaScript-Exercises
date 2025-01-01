//Advanced Level:

// 1) Deep Type Checker
//Create a function deepTypeChecker(input) that takes a nested object or array and returns a new object showing the data type of each value at every level.

//* solutions
const value = {
  a: 1,
  b: "hello",
  c: [true, null],
};

let a = {};
a.push(value);
const result = value;
console.log(a);

// deepTypeChecker(value);
// { a: "number", b: "string", c: ["boolean", "object"] }

// 2) Custom Data Type Parser
//Implement a function parseData(data) that takes a string input and returns its parsed value. It should recognize numbers, booleans, null, arrays, and objects. If the string cannot be parsed, return "Invalid data".

// parseData("42"); // 42
// parseData("[1,2,3]"); // [1, 2, 3]
// parseData("{ key: 'value' }"); // { key: "value" }
