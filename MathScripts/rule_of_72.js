"use strict"

// Define our known values
var interest

var time

var saving

saving = 50000

interest = 7.2

// Calculate the unknown values

var double
double = saving * 2

// used this article https://www.calculatorsoup.com/calculators/financial/rule-of-72-calculator.php to get the rule of 72 formula

time = 72/interest

console.log('At a ' + interest + '%' + ' interest rate, your savings account will be worth ' + double.toFixed(2) + ' in ' + time.toFixed(2) + ' years');
