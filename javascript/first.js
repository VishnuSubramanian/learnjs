/*
This is a test and my first javascript code
i am trying to make good basic javascript language..

*/

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

// math example 2
// This example is to round off the float value to the nearest integers
// Math object has both property and methods.
// This is a method.
var temperature = 32.6;
console.log(Math.round(temperature));
temperature = 43.8;
console.log(Math.floor(temperature));

// math for random number
// Random number always throw a random number from 0 to 1, so here is the code
var changing =  Math.random();
console.log(changing);
// This above variable with show deicmal results from 0 to 0.9999

var changing = (Math.random() * 6);
console.log(changing);
// this code with produce random number from 0 to 6 but in a decimal value. If you need a indeger value then use math.floor object
var changing = Math.floor(Math.random() * 6);
console.log(changing);
// This code will take the decimal value from the math.random and convert it to a integer value.


// random number generator challenge
// getting an input from the user
// convert the string into number by using parseInt
// then use the random math method to produce random number from 0 to the number provided by the user
// that it..:)

var input = prompt("What is your favorite number?");
var conversion = parseInt(input);
var result = (Math.random() * conversion);

// two random number conversion
document.write("Enter the top and bottom number to generate a random number ")
var input = prompt("What is your first number?");
var topNumber = parseInt(input);
var secondInput = prompt("what is the bottom number?");
var bottomNumber = parseInt(secondInput);
var result = Math.floor(Math.random() * (topNumber - bottomNumber +1) + bottomNumber);
console.log(result);

// conditioning statements

var question1 = prompt("Capital of India is?");
if (question1 === Delhi) {
  document.write("Your answer is right !!");
}else {
  document.write("Your answer is wrong !!");
}

//program testing for conditional statemtent
// In this program i am using multiple conditional statement you check more than two possinlilitite

var correctGuess = false;
var randomNumber = math.floor((math.random() * 6) +1);
var guess = prompt("Thing it is between 1 to 6");
if(parseInt(guess) === randomNumber)
{
  correctGuess = true;
}else if(correctGuess < randomNumber){
   var guessMore = prompt("You need to guess the greater number " + guess);
   if(parseInt(guessMore) === randomNumber){
     correctGuess = true;
   }

}else if (correctGuess > randomNumber) {
    var guessLess = prompt("You need to guess lower number" + guess);
    if(guessLess === randomNumber)
    {
      correctGuess = true;
    }
}
if(correctGuess === true) {
  document.write("You guessed the Correct number" + randomNumber);
}else {
  document.write("You guessed the Wrong number" + randomNumber);
}

// end of the program

// quiz program challenge
var counter = 0;
var answerOne = prompt("Which is our nearest planet?");
if(answerOne.toUppercase() === "MARS")
{
  counter = counter +1;
}
var answerTwo = prompt("What is the biggest planet?");
if(answerTwo.toUppercase() === "JUPITER")
{
  counter = counter +1;
}
var answerThree = prompt("Which is our last planet?");
if(answerThree.toUppercase() === "PLUTO")
{
  document.write("Your answer is correct");
  counter = counter +1;
}
var answerFour = prompt("which planet has a ring ?");
if(answerFour.toUppercase() === "SATURN")
{
  counter = counter +1;
}

// output results
document.write("The number of answer you entered correctly" + correct + "out of 4");

// Providing rank

if(correct === 5)
{
  document.write("You got gold reward");
}else if (correct === 4) {
    document.write("You got silver reward");
}else if (correct == 3 || correct === 2) {
    document.write("You got bronze reward");
}
else {
    document.write("Yikes ! You got no reward");
}

/* Learning functions..
Converting the random challenge into a function block
remember always use the functions at the top of the file..
*/
// functions can reduce the amount of time you spend in repeating the block
function randomGenerator(){
    var randomValue = Math.floor(Math.random() * 6) +1;
    alert(randomValue);
}
// This below calls the function...so it is the must when you need to access the function..
randomGenerator();

// Writing a function which returns a value .....

function getRandomNumber(){
    var randomValue = Math.floor(Math.random() * 6) +1;
    return randomValue;
}
// when you are returning a value from the function then you can use it in any forms you need..
console.log(getRandomNumber());
document.write(getRandomNumber());
var randomNumber = getRandomNumber();
