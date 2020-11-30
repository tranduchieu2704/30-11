//There are 4 ways to create a new date object:
var a = new Date();
console.log(a); // Using new Date(), creates a new date object with the current date and time
var b = new Date(2020, 10, 30, 11, 33, 30, 0);
console.log(b); //Using new Date(7 numbers), creates a new date object with the specified date and time
var c = new Date(1606730000000);
console.log(c); //160673000000 milliseconds from Jan 1, 1970, is approximately Mar 3, 1973
var d = new Date();
console.log(d.toDateString());//The toDateString() method converts a date to a date string

//Long dates are most often written with a "MMM DD YYYY" syntax like this:
var e = new Date("Dec 25 2020");
console.log(e)
// returns the number of milliseconds between the date and January 1, 1970
var milisec = Date.parse("Dec 30, 2020");
console.log(milisec);

// Get Year, Month, Day of current date
var aa = new Date();
console.log("Year now is : " + aa.getFullYear());// Use funtion getFullYear to get year now
var bb = new Date();
console.log("Month now is : " + (bb.getMonth() + 1));//month counts from 0. December is month 11 so we must add 1 
var cc = new Date();
console.log("Day now is : " + cc.getDate());

//Math.round(x) returns the value of x rounded to its nearest integer
var r = Math.round(4.2);
console.log("The value of number rounded : " + r);

//Math.ceil(x) returns the value of x rounded up to its nearest integer
var ce = Math.ceil(4.2);
console.log("The value of number rounded up : " + ce);

//Math.floor(x) returns the value of x rounded down to its nearest integer
var fl = Math.floor(4.7);
console.log("The value of number rounded down : " + fl);

//Math.random() returns a random number between 0 and 1
var ra = Math.random();     // returns a random number
console.log("The number random is : " + ra);

var ran = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
console.log("The number random from 1 to 100 is : " + ran);

// Boolean JS
var b1 = Boolean(2704);
var b2 = Boolean("Hieu");
var b3 = Boolean('false');
var b4 = Boolean(0);
console.log("2704 is : " + b1);
console.log("Any (not empty) string is : " + b2 );
console.log("Even the string 'false' is : " + b3  );
console.log("Zero is : " + b4);

var x = false;             
var y = new Boolean(false);
console.log( x == y ); // Returns true

var x = false;             
var y = new Boolean(false);// (x === y) is false because x and y have different types
console.log( x === y ); // Returns false
 
var x = false;             
var y = false;// (x === y) is true because x and y have same types
console.log( x === y );// Returns true

//JavaScript Comparison and Logical Operators
var age = 20, voteable;
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log("The human is : " + voteable);

//Use Js Conditions 
var greeting;
var time = new Date().getHours();
    if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Hava a good day";
  } else {
    greeting = "Good evening";
  }
  alert(greeting);
