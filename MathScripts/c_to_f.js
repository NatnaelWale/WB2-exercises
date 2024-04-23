"use strict";

// Define our known variable

var celsius;

celsius = 26;

// Define our unknown variable

var fahrenheit;

// Found the formula to convert celsius to fahrenheit from https://www.calculatorsoup.com/calculators/conversions/celsius-to-fahrenheit.php

fahrenheit = (celsius * 1.8) + 32;

// Define the result to be displayed

var message

message = ('The given celsius value of ' + celsius + ' degree celsius can be converted to be ' + fahrenheit.toFixed(2) + ' degree fahrenheit.')

// Display the result

console.log(message);