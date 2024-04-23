"use strict";

// Define our known variable

var salary;

salary = 10000;

// Define our unknown variable

var taxWithHeld;

// Define the formula for our unknown variable from the assignment instruction

taxWithHeld = (23 * salary) / 100;

// Define the message to be displayed

var message;

message = ('The tax to be withheld from you every month with your monthly salary of ' + salary + '$' + ' is ' + taxWithHeld.toFixed(2) + '$.');

// Display the message

console.log(message);