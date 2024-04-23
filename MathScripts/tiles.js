"use strict";

//Let's define our known variables

var width = 20, length = 20;

// Our tile per box is 12 sqfoot

var tileBox = 12

// Let's define the area of our room

var area = width * length;

// Let's now define the formula to get the number of tile boxes we need

 var numOfBox = (area / tileBox);

 // We are told to add 10% more boxes, so let;s define the formula for that

 var newnumOfBox = (0.1 * Math.round(numOfBox)) + Math.round(numOfBox);

 // Let's define the result to display

 var result = ('The number of boxes you need to buy is ' + Math.round(newnumOfBox) + ' boxes.');

 // Let's display the result

 console.log(result);
