"use strict";

// Define our known variable

var salary = 10000;

// Define our unknown variable

var taxWithHeld;

// Define the formula for our unknown variable from the assignment instruction

taxWithHeld = (23 * salary) / 100;

// Define the result to be displayed

var result;

result = ('The tax to be withheld from you every month with your monthly salary of ' + salary + '$' + ' is ' + taxWithHeld.toFixed(2) + '$.');

// Display the result

console.log(result);