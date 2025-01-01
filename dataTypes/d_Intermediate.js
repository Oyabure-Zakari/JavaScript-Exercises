// Intermediate Level:

// 1) Array and Object Type Count
//Write a function countTypes(arr) that takes an array containing various data types and returns an object showing the count of each data type.

//* solution
function countTypes(arr) {
  return arr.reduce((typeCounts, item) => {
    // Get the type of the current item
    let type = typeof item;

    // Handle `null`, which is of type "object"
    if (item === null) {
      type = "null";
    }

    // Handle arrays, which are also of type "object"
    if (Array.isArray(item)) {
      type = "array";
    }

    // Increment the count for this type
    typeCounts[type] = (typeCounts[type] || 0) + 1;

    return typeCounts;
  }, {});
}

const inputArray = [1, "hello", true, {}, [], null, undefined];
console.log(countTypes(inputArray));

// 2) Data Type Conversion
//Write a function convertData(value, targetType) that converts the given value to the target type ("string", "number", or "boolean"). Return "Invalid target type" for unsupported types.

//* solution
function convertData(value, targetType) {
  switch (targetType) {
    case "string":
      return String(value); // Converts the value to a string
    case "number":
      return Number(value); // Converts the value to a number
    case "boolean":
      return Boolean(value); // Converts the value to a boolean
    default:
      return "Invalid target type"; // Handles unsupported target types
  }
}

// Test cases
console.log(convertData(42, "string")); // "42"
console.log(convertData("true", "boolean")); // true
console.log(convertData("123", "number")); // 123
console.log(convertData(true, "string")); // "true"
console.log(convertData(0, "boolean")); // false
console.log(convertData("hello", "object")); // "Invalid target type"
