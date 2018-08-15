
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

// Excercises for string is here
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods


//Working on with Arrays
var myArray = ['this','is','gonna','be','awesome'];
console.log("The item in the array index is " + myArray[1]);
myArray[1] = "are";
console.log("The item in the array index is " + myArray[1]);
//Multidimentional array 
var multiDim = ['hello',4,[0,1,2]];
console.log("Example for the multidimentional array " + multiDim[2][2]);
console.log("The length of the array is " + multiDim.length);

//Some array methods 
///Converting strings to arrays
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
var myNewString = myArray.join(',');
console.log("My new String" + myNewString);
console.log(myArray);
console.log("Length of my new array is " + myArray.length);
console.log("Value of my new list is " + myArray[1]);
console.log("The last item in the array is  " + myArray[myArray.length-1]);

//Adding and removing the list in the array 
//push and pop methods respectively 
myArray.push('last','remove');
console.log("Push a list in the existing array " + myArray);
myArray.pop();
console.log(myArray);
