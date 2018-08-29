##########  You Don't Know JavaScript ( YDKJS )   ##################

#############
#######
Introduction Part 
#######
#############
Book 1 
##############  Up & Going ###################

This first book Up & Going is the introduction to the basic concepts of Programming at a high level. 
It mostly dig deeper into individual concepts and understand from the Core. 

// Code 
A Program often refered to as Source Code or just Code. It is a Set of instruction to tell the computer what are the task it need to perform. usally Code is saved in the txt file format. 
The rule for the valid format and the combination of instructions is called as the "Computer Language". Sometimes it is refered to as Syntax. Much as like english tell you how to spell the words and how to create a valid sentences using the words and punctuation.

// Statements 
In a Computer language, a group of words, numbers and operators that perform a task is called a Statement. In Js example of the statement will look like this 
Eg::: a = b *5; 
In the above eg a and b are variables. Which is like a box for storing values in Js. and 2 is just a value itself and called Literal values also and = , * are the operations.

Most Js Statements concludes with ( ; )
The programs are just the collection of Statements with perform the program's purpose. 

//Expressions
Statements are made up of one or more expressions. An Expression is any reference for a variable or a value or more variable or value combined with an operator. 
Eg::: a = b *5; 
= : Assigment expression 
* : Arithmetic expression
5 : literal value expression 
b : Variable expression 

// Excecuting a Program 
How do those collections of programming statements tell the computer what to do? The program needs to be executed, also referred to as running the program.

Statements like a = b * 2 are helpful for developers when reading and writing, but are not actually in a form the computer can directly understand. So a special utility on the computer (either an interpreter or a compiler)is used to translate the code you write into commands a computer can understand.

For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code.

For other languages, the translation is done ahead of time, called compiling the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go.

It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.

//Output
console.log()
let’s split the above code into two sections, console and the log(). Where log() is the function call and the console is the object reference where the function is located. Another most common on is

alert()

//Input
The most common ways of the input is the HTML form or any other confirmation or clicks happens. Like console.log() there is a special input and it is
check = prompt("What is your favourite hobby?");     //input
console.log(check);                                  //Output

//Operators:
Operators are how we perform actions on variables and values. We’ve already seen two JavaScript operators, the = and the *.

The = equals operator is used for assignment -- we first calculate the value on the right-hand side (source value) of the = and then put it into the variable that we specify on the left-hand side (target variable).

a = 10;                    // The value in a variable is 10 
b = a + 20;                // The value in variable b is 10+20 = 30
console.log(b);            // The output: b = 30 ,printed in console
Some of the operators are,

Arithmetic Operator: Addition(+), Subtraction(-), Multiplication(*) and Division(/). These are the Arithmetic Operators. Operator Precedences are Multiplication, Division, Addition and Subtraction in top to bottom order.

Increment/Decrement Operator: Used When repeatedly adding or Subtracting. These are commonly used in the loops.

a++, a — , — a, ++a
Assignment Operator: Assignment operators are operators that assign a value to a variable. We have already used the most basic one, =, loads of times — it simply assigns the variable on the left the value stated on the right

a =  10;     // = are the assignment operator
a += 10;     // Which means  a = a + 10; 
a -= 10; 
b *= 10;
Comparison Operator: Sometimes we will want to run true/false tests, then act accordingly depending on the result of that test — to do this we use comparison operators.

20 === 10+10;   //Strictly equals to
20 !== 10;      //Strictly not equals to
10 < 20;        //Less than
10 <= 10;       //Less than or equal to

