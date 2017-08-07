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
// return statement should be the last thing added in the function because when the
// interpreter reaches the return statement it will immediately exit the function..

// when you are returning a value from the function then you can use it in any forms you need..
console.log(getRandomNumber());
document.write(getRandomNumber());
var randomNumber = getRandomNumber();

// Javascript function which accept an piece of information...
// Arguments that are adding in the functions as parameters...
// The arguments which is stored in a variable called Parameters...
/* From this below code you can generate any upperlimit number from which you
need a random number need to be generated.. by using function you can easily
pick the upperlimit of the number where the random number need to be generated...
*/
function gettingRandomNumber(upperlimit)
{
      var randomValue = Math.floor(Math.random() * upperlimit) +1;
      return randomValue;
}
console.log(gettingRandomNumber(10));

// another example

function goToCoffeeDay(drinks,snacks)
{
  alert("Get me " + drinks + "and " + snacks + " from the coffee Day");
}
goToCoffeeDay("cafefrappe","indulgence");

// This below code is to get the area of the rectangle

function toFindArea (width, length, unit)
{
  var area = width * length;
  return area + " " + unit;
}

console.log(toFindArea(10,20, "sq ft"));

// random number challenge...

function gettingBothRandomNumber(lowerlimit, upperlimit)
{
  var randomNumberValue = Math.floor(Math.random() * (upperlimit - lowerlimit + 1)) + lowerlimit;
  return randomNumberValue;
}

console.log(gettingBothRandomNumber(1,100));

// Check where the code get breaks...

function gettingBothRandomNumber(lowerlimit, upperlimit)
{
  if(isNaN(lowerlimit) || isNaN(upperlimit))
  {
    throw new console.error("Both should be a number");
  }
  var randomNumberValue = Math.floor(Math.random() * (upperlimit - lowerlimit + 1)) + lowerlimit;
  return randomNumberValue;
}

console.log(gettingBothRandomNumber(1,100));

// Arrays loops and Objects
// Using the while loop in the code.

function randomNumberGenerator(upperlimit)
{
  return Math.floor(Math.random * upperlimit) + 1 ;
}

var counter = 0;
while (counter < 10) {
  var randomNumberIs = randomNumberGenerator(10);
  document.write(randomNumberIs + '');
  counter += 1;
}
// awesomeness of the while loop and the conditions
var upperlimit = 10000;
var randomNumber1 = randomNumberGenerator(upperlimit);
var guess;
var attempts = 0;

function randomNumberGenerator(upperlimit)
{
  return Math.floor(Math.random * upperlimit) + 1 ;
}

while (guess !== randomNumber1) {
  guess = randomNumberGenerator(upperlimit);
  attempts += 1;
}
document.write("<p> The random number was " + randomNumber1 + "</p>");
document.write("<p> Add it tooks the computer" + attempts + "to make the correct guess </p>");


//  refractoring the long code and use the DRY concept in it...

// This is the color challenge code.. that is pretty amazing..

var html ="";
var red;
var green;
var blue;
var rgbColor;

for(i=0; i<10; i+=i)
{
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = rgb(+ red + ',' + green + ',' + blue +);
  html += "<div style=background-color:' + rgbColor +' > </div>";
}
document.write(html);

// The same above code but while using functions to follow the DRY concepts...
// to write a modular Javascript... :)


var html ="";
var red;
var green;
var blue;
var rgbColor;

function gettingRgbRandom()
{
  return Math.floor(Math.random() * 256);
}

for(i=0; i<10; i+=i)
{
  red = gettingRgbRandom();
  green = gettingRgbRandom();
  blue = gettingRgbRandom();
  rgbColor = rgb(+ red + ',' + green + ',' + blue +);
  html += "<div style=background-color:' + rgbColor +' > </div>";
}
document.write(html);

// Another way to write the same code as follows... with full of functions

var html ="";
var rgbColor;

function gettingRgbRandom()
{
  return Math.floor(Math.random() * 256);
}

function gettingColor()
{
  var color="rgb(";
  color +="gettingRgbRandom() + ','";
  color +="gettingRgbRandom() + ','";
  color +="gettingRgbRandom() + ','";
  return color;

}

function print(message)
{
  document.write(message);
}

for(i=0; i<10; i+=i)
{
  rgbColor = gettingColor();
  html += "<div style=background-color:' + rgbColor +' > </div>";
}
print(html);

console.log("Hello World");
