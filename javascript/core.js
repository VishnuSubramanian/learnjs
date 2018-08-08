
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