// Beginner Level:

// 1) Sum of Numbers
//Write a function sumNumbers(a, b) that takes two arguments a and b. If both arguments are numbers, return their sum. If either of them is not a number, return the string: "Invalid input".

//* solution
function sumNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Invalid input");
  } else {
    const sum = a + b;
    console.log(sum);
  }
}

const result1 = sumNumbers(3, 5);
console.log(result1); // 8
const result2 = sumNumbers(3, "5");
console.log(result2); // "Invalid input"

// 2) Type Checker
//Create a function checkType(value) that takes a single argument and returns a string indicating its type (e.g., "number", "string", "boolean", "object", "undefined", or "function").

//* solution
function checkType(value) {
  if (typeof value === "string") {
    return "string";
  } else if (typeof value === "number") {
    return "number";
  }
}

const result3 = checkType(42);
console.log(result3); // "number"
const result4 = checkType("hello");
console.log(result4); // "string"
