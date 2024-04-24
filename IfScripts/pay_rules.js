"use strict";

// Let's define the known variables

// Example 1

var payRate = 12.5;
var hoursWorked = 20;
var overHours;
var grossPay;

// Example 2

// var payRate = 25;
// var hoursWorked = 40;
// var overHours;
// var grossPay;

// Example 3

// var payRate = 17.3;
// var hoursWorked = 45;
// var overHours;
// var grossPay;

// let's define the if statement

if (hoursWorked > 40) 
     {
      overHours = hoursWorked - 40;
      grossPay = (payRate*40) + (1.5*payRate*overHours);
      // console.log(overHours);
     }
     else 
     {
      grossPay = payRate * hoursWorked;
     }

console.log(grossPay);