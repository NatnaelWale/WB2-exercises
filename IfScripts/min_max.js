"use strict";

var a = 50;
var b = 40;
var c = 11;

// Let's first find the minimum from the given three integers:

if (b > a && a < c)
    {
       console.log(a + " is the min.");
    }
    else if (a > b && b < c)
    {
       console.log(b + " is the min.");
    }
    else

    // At this point we know C is the min

    {
       console.log(c + " is the min.");
    }

// Let's now find the maximum from the given three integers:

if (b < a && a > c)
    {
        console.log(a + " is the max.");
    }
    else if (a < b && b > c)
    {
        console.log(b + " is the max.");
    }

    // At this point we know C is the max

    else
    {
        console.log(c + " is the max.");
    }


