"use strict";

// Let's define our known vairables

var x1, x2, y1, y2;

x1 = 2 , x2 = 4, y1 = 2, y2 = 3;

// Let's define our unknown variables

var x , y;

x = x2 - x1;

y = y2 - y1;

// Let's define the formula of distance that I got from https://byjus.com/maths/distance-between-two-points-formula/

var a;

var d;

a = x**2 + y**2;

d = Math.sqrt(a);

// Let's define the result to display;

var result

result = ('The distance between the given points of ' + '(' + x1 + ',' + y1 + ')' + ' and ' + '(' + x2 + ',' + y2 + ')' + ' is ' + d.toFixed(3) + '.');

// Display the message

console.log(result);
