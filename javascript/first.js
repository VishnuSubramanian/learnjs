// This is an external js file so you need to link the js file to the index.html to tell html page that it has a external js file
console.log("Begnning of the program");

// variable is declared to save the value and put in a box with the reference name
var questions = 4;
var questionleft = '[' + questions + 'left to complete]';
var name = prompt("what is your name?" + questionleft);
questions -= 1;
questionleft = '[' + questions + 'left to complete]';
var age = prompt("What is your age?");
console.log("At the middle of the program.." + questionleft);
questions -= 1;
questionleft = '[' + questions + 'left to complete]';
var city = prompt("Where are you from?" + questionleft);
questions -= 1;
questionleft = '[' + questions + 'left to complete]';
var work = prompt("What do you do for living?" + questionleft);
alert("Ready to view the results?");
var final_result = "Hi my name is " + name + " and my age is " + age ;
final_result += " and i am from " + city + " and working as a " + work ;
console.log("At the end of the program..");
console.log(final_result);
document.write(final_result);

// maths Example 1
var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
console.log("Everything is going fine so far");
var secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
console.log("var secondsPerDay is working..");
document.write(secondsPerDay);
console.log(secondsPerDay);
var yearsAlive = 24;
var myWholeSeconds = secondsPerDay * yearsAlive;
console.log("My whole life seconds is working ...")
document.write("My whole seconds i lived so far is" + myWholeSeconds + "Wow, that is amazing");
console.log(myWholeSeconds);
