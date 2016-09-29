// This is an external js file so you need to link the js file to the index.html to tell html page that it has a external js file
console.log("Begnning of the program");
var name = prompt("what is your name?");
var age = prompt("What is your age?");
console.log("At the middle of the program..");
var city = prompt("Where are you from?");
var work = prompt("What do you do for living?");
alert("Ready to view the results?");
var final_result = "Hi my name is " + name + " and my age is " + age ;
final_result += " and i am from " + city + " and working as a " + work ;
console.log("At the end of the program..");
console.log(final_result);
document.write(final_result);
