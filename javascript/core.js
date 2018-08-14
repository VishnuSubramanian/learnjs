
// In this below section, It is just the example of the JavaScript code.
var para = document.querySelector('p');
para.addEventListener('click', updatename);

function updatename(){
    var name = prompt("Enter the new name you need to add");
    para.textContent = 'My name is :' + name;
}

// Arthimetic Operators 
console.log(6*2);
console.log(6%5);

// Assiging to a Variable and testing
var value1 = 22;
var value2 = 44; 

console.log( "The value is : ", value1 * value2);
console.log ( "The value is :", 122 * value1 );

// Assignment Operator 
//Addition assigment 
//The answer is x = x + 4 === 7; 
var x = 3 ;
x += 4; 
console.log("This is the result for the Addition assigment operator.", x);   

// String methods 
var myString = "Hello from the other side";
console.log("The total length of the text is " + myString.length);
//Retrieving a specific string character
console.log(myString[0]);
console.log(myString[24]);
console.log("The last letter is " + myString[myString.length-1]);
//finding the sub-string inside the string: 
console.log("Finding the Sub-string" + myString.indexOf('other'));
//slice
console.log("Using the Slice method " + myString.slice(15,19));

// Changing case
console.log(myString.toUpperCase());

//Updating parts of the Strings 
console.log(myString.replace("Hello", "Hola"));

//Excercise
// In the first exercise we'll start you off simple — we have an array of greeting card messages, but we want to sort them to list just the Christmas messages. We want you to fill in a conditional test inside the if( ... ) structure, to test each string and only print it in the list if it is a Christmas message.

// First think about how you could test whether the message in each case is a Christmas message. What string is present in all of those messages, and what method could you use to test whether it is present?
// You'll then need to write a conditional test of the form operand1 operator operand2. Is the thing on the left equal to the thing on the right? Or in this case, does the method call on the left return the result on the right?
// Hint: In this case it is probably more useful to test whether the method call isn't equal to a certain result.

var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i].indexOf("Christmas")!== -1) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}