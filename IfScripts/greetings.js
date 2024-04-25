"use strict";

// Let's define our variable

var time = -16000;

// Let's define our if statement

if ( time < 0 ) {
    console.log("ERROR: INVALID HOUR OF " + time);
}
else if (time <= 10) {
    console.log("Good Morning!");
} else if ( time < 16 ) {
    console.log("Good Day!");
} else if ( time <=23 ) {
    console.log("Good Evening!");
}
  else {
    console.log("ERROR: INVALID HOUR OF " + time);
}