// Intermediate Level:

// 1) Array and Object Type Count
//Write a function countTypes(arr) that takes an array containing various data types and returns an object showing the count of each data type.

countTypes([1, "hello", true, {}, [], null, undefined]);
// { number: 1, string: 1, boolean: 1, object: 3, undefined: 1 }

// 2) Data Type Conversion
//Write a function convertData(value, targetType) that converts the given value to the target type ("string", "number", or "boolean"). Return "Invalid target type" for unsupported types.

convertData(42, "string"); // "42"
convertData("true", "boolean"); // true
