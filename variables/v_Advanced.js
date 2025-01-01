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

// solutions

// prediction of the output
// the console.log(x) on line 4 will print undefined because of hoisting.
// the console.log(x,y) on line 10 will print 30,40.
// the console.log(x,y) on line 12 will print 30,20 because of var is not block scope. that's why it prints 30

//fixing any issues related to variable scope and hoisting.
var c = 10;
let d = 20;
console.log(c);
{
  let c = 30;
  let d = 40;
  console.log(c, d);
}
console.log(c, d);
