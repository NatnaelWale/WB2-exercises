"use strict";

//Let's bring the variables from pay rules exercise:

var payRate =10
var hoursWorked = 45
var overHours;

// Let's define the new known variables

var annualGrossIncome;
var filingStatus = "joint";
var taxWithHoldings;
var annualNetIncome;
var taxRate;
var message;

if (hoursWorked > 40) 
     {
      overHours = hoursWorked - 40;
      annualGrossIncome = 52* ((payRate*40) + (1.5*payRate*overHours));
      // console.log(overHours);
     }
     else 
     {
        annualGrossIncome = 52 * (payRate * hoursWorked);
     }

console.log(annualGrossIncome);


// Let's now define the if statements for different filling status and conditions


if ( filingStatus == "single" && annualGrossIncome < 12000) {
    taxRate = 0.05;
}
else if (filingStatus == "single" && annualGrossIncome <= 24999.99) {
    taxRate = 0.1;
}
else if (filingStatus == "single" && annualGrossIncome <= 74999.99) {
    taxRate = 0.15;
}
else if (filingStatus == "single" && annualGrossIncome > 75000) {
    taxRate = 0.2;
}
else if ( filingStatus == "joint" && annualGrossIncome < 12000) {
    taxRate = 0;
}
else if (filingStatus == "joint" && annualGrossIncome <= 24999.99) {
    taxRate = 0.06;
}
else if (filingStatus == "joint" && annualGrossIncome <= 74999.99) {
    taxRate = 0.11;
}
else if (filingStatus == "joint" && annualGrossIncome > 75000){
    taxRate = 0.2;
}

//  Let's now define our known formulas


taxWithHoldings = taxRate*annualGrossIncome;

annualNetIncome = annualGrossIncome - taxWithHoldings;


// Let's now define our result message:


message = "You worked " + hoursWorked + "hours this period. Because you earn $" + payRate + " per hour, your gross pay is $" + annualGrossIncome + ". Your filing status is " + filingStatus + ". Your tax withholdings this period is $" + taxWithHoldings + ". Your net pay is $" + annualNetIncome + "."

console.log(message)
