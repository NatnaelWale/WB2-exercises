"use strict";

//Let's define our known variables

var roomWidth = 10, roomLength = 13;

// Our tile per box is 12 sqfoot

var tileBox = 12

// Let's define the area of our room

var area = roomWidth * roomLength;

// Let's now define the formula to get the number of tile boxes we need

 var numOfBox = Math.ceil(area / tileBox);

 // We are told to add 10% more boxes, so let;s define the formula for that

 var newnumOfBox = Math.ceil(0.1 * numOfBox) + numOfBox;

 // Let's define the result to display

 var result = ('The number of boxes you need to buy is ' + newnumOfBox + ' boxes.');

 // Let's display the result

 console.log(result);
