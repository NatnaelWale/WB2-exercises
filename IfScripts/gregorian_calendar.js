"use script";

// Here are the resources I found for the conditions of leap year from https://www.rmg.co.uk/stories/topics/which-years-are-leap-years-can-you-have-leap-seconds#:~:text=To%20be%20a%20leap%20year,2036%20are%20all%20leap%20years.


// To be a leap year, the year number must be divisible by four – except for end-of-century years, which must be divisible by 400. This means that the year 2000 was a leap year, although 1900 was not. 

// A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

//Let's define our known variable

var year;

// Check 1

// year = 1900;

// Check 2

// year = 1950;

// // Check 3

// year = 1999;

// // Check 4

// year = 2000;

// // Check 5

// year = 2001;

// // Check 6

// year = 2012;


// Here we have 3 conditions to put together:


if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}