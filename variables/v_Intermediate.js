// Intermediate Level

// 1) Area of a Circle, Write a program that calculates the area of a circle given its radius. Use the formula:
// Area = 𝜋𝑟2
//Example:
const radius = 7;

// Your code here
const radiusSquare = Math.pow(radius, 2);
const area = Math.floor(Math.PI * radiusSquare);
// console.log(area);

// 2) Reassigning Variables, Given a string name = "John" and a number age = 25, reassign both variables to new values of different data types and log their values and types using typeof.
//Example:
let name = "John";
let age = 25;

// Your code here
name = true;
age = "25";
console.log(name, typeof name); // Output: true, boolean
console.log(age, typeof age); // Output: "25", string
