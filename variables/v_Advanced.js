// Advanced Level

// 1) Scope and Hoisting, Analyze the following code and predict the output. Then rewrite the program to fix any issues related to variable scope and hoisting.
console.log(x); // What will this output?
var x = 10;
let y = 20;
{
  var x = 30;
  let y = 40;
  console.log(x, y); // Output?
}
console.log(x, y); // Output?
