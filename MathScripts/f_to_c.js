"use strict";

// Define our known variable

var fahrenheit;

fahrenheit = 79;

// Define our unknown variable

var celsius;

// Found the formula to convert fahrenheit to celsius from https://www.calculatorsoup.com/calculators/conversions/fahrenheit-to-celsius.php

celsius = (fahrenheit - 32) / 1.8;

// Define the result to be displayed

var message

message = ('The given fahrenheit value of ' + fahrenheit + ' degree fahrenheit can be converted to be ' + celsius.toFixed(2) + ' degree celsius.')

// Display the result

console.log(message);


