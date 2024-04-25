"use strict";

// Let's first define the known variables:

var studentName = "Eden";
var studentMajor;
var majorCode = "BIOL";
var departmentOffice;

// Let's now write the SWITCH statement:

if (majorCode == "BIOL") {
  studentMajor = " Biology";
  departmentOffice = "Science Bldg, Room 310";
} else if (majorCode == "CSCI") {
  studentMajor = " Computer Science";
  departmentOffice = "Sheppard Hall, Room 314";
} else if (majorCode == "ENG") {
  studentMajor = " English";
  departmentOffice = "Kerr Hall, Room 201";
} else if (majorCode == "HIST") {
  studentMajor = " History";
  departmentOffice = "Kerr Hall, Room 114";
} else if (majorCode == "MKT") {
  studentMajor = "Marketing";
  departmentOffice = "Westly Hall, Room 310";
} else {
  studentMajor = "Unknown";
  departmentOffice = "Nothing";
}

// Let's now display the result message:

console.log(
  "Student: " + studentName,
  "\n" + "Major: " + studentMajor,
  "\n" + "Advising Location: " + departmentOffice
);
