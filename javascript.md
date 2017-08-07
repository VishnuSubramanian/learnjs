# learnjs
This read me file is for my reference. While learning javascript need to take notes on it.
Javascript is Useful, Fun and available everywhere in the web.           

    /************************* JavaScript ***********************/

Javascript is a cross platform, object oriented scripting language.

What is a Scripting Language?
A script or scripting language is a computer language with a series of commands within a file that is capable of being executed without being compiled. Good examples of server side scripting languages include Perl, PHP, and Python. The best example of a client side scripting language is JavaScript.

It is light-weight, small Language.. Javascript is amazing..

Javascript connect with the Objects of the host(Eg:Web Browser) to provide programatic
 control over the host.

Javascript contain a standard library of objects such as Array, Date, Math ..etc
core set of language elements such as Operators, control structures and Statements..

Two types of Javascript:

      1. Client-side Javascript
              Supplying objects to control the browser and its Document Object Model
               (DOM). Act according to the user response eg: Mouse click, Form
               submission.. etc
      2. Server-Side Javascript
              Supplying objects relevant to the running javascript on the server.
              Creating communication between the database and the client-side
              javascript, or the file manipulations on the server.

  /***************  Java & JavaScript  ***********/

  Java and javascript are entirely different.

  Javascript has a prototype based object model and Java has class based object model.

  Prototype based object model provides dynamic inheritance that is,
  What is inherited can vary to individual objects.
  Javascript allows function without any special declarative requirements.

  Javascript is a free-form language compared to the java.
  You need not have to declare all variables, objects and methods.

  /************* ECMA Specifications **************/

  ECMA is a standardized, international programming language for JavaScript
  and the current ECMA is ECMA 6..

  /************* Grammar and Types ***************/

  Javascript is Case-sensitive and use Unicode Character set.
  In Javascript,
      1. Instructions are called statements, and they are separated by  semicolon(;).
      2. Space, tabs, new lines are called White-spaces.
      3. Javascript get scanned from left to right and converted into a sequence
      of input elements tokens, control characters, line terminators,
      comments or white-spaces.

  /************** JavaScript declarations *************/

  There are three kind of declaration in Javascript

    1. Var --> Declares a variable and optionally initializing it to a value.

    2. let --> Declares a block scope local variable and optionally
    initialize to a value.

    3. const --> Declare a read only named constant.

  /***************   Javascript Variables  **************/

    1. You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

    2. A JavaScript identifier must start with a letter, underscore, or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is
    case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).

        /****** Declaring Variables ******/

        1. With the keyword var. For example, var x = 10. This syntax can be used
        to declare both local and global variables.

        2. By simply assigning it a value. For example, x = 10. This always
        declares a global variable. It generates a strict JavaScript warning.
         You shouldn't use this variant.

        3. With the keyword let. For example, let y = 13.
        This syntax can be used to declare a block scope local variable.
        See Variable scope below.

        /******** Evaluating variables ********/

        1. A variable declared using the var statement with no initial
        value specified has the value undefined.

        2. An attempt to access an undeclared variable or an attempt to
        access an identifier declared with let statement before
        initialization will result in a ReferenceError exception being thrown:

            Eg:
              1.  var a;
                console.log("The value of a is " + a); // The value of a is undefined

              2.  console.log("The value of b is " + b); // Uncaught ReferenceError:
              b is not defined

              3.  console.log("The value of c is " + c); // The value of c is undefined
                var c;

              4.  console.log("The value of x is " + x); // Uncaught ReferenceError:
              x is not defined
                let x;

        3.  The undefined value converts to NaN when used in numeric context.
            Eg:
                    var a;
                    a + 2;  // Evaluates to NaN

        4. When you evaluate a null variable, the null value behaves as 0 in
        numeric contexts and as false in boolean contexts. For example:
            Eg:
                    var n = null;
                    console.log(n * 32); // Will log 0 to the console

        /********* variable scope **********/

        When you declare a variable outside of any function, it is called a
        global variable, because it is available to any other code in the c
        urrent document. When you declare a variable within a function,
        it is called a local variable, because it is available only within
        that function.
                For example: the following code will log 5, because the
                scope of x is the function (or global context) within
                which x is declared, not the block,
                which in this case is an if statement.

      Eg 1->      if (true) {
                  var x = 5;
                }
                console.log(x);  // x is 5

      Eg 2 ->     if (true) {
                    let y = 5;
                  }
                  console.log(y);  // ReferenceError: y is not defined     

  /*********** Variable & Function hoisting **********/

              Need to check that later..

  /************  Global variable ***********/

                Global variables are in fact properties of the global object.
                 In web pages the global object is window, so you can set and
                  access global variables using the window.variable syntax.

                Consequently, you can access global variables declared in
                one window or frame from another window or frame by
                specifying the window or frame name. For example, if a variable called phoneNumber
                is declared in a document,
                 you can refer to this variable from an iframe as parent.phoneNumber.

  /**************  Const *************/

                  You can create a read-only, named constant with the const keyword.
                  The syntax of a constant identifier is the same as
                  for a variable identifier: it must start with a letter,
                  underscore or dollar sign and can contain alphabetic,
                  numeric, or underscore characters.

                  Eg :: const hello_world = "hello hi";

                  A constant cannot change value through assignment or be
                  re-declared while the script is running.
                  It has to be initialized to a value.

                  The scope rules for constants are the same as those for
                  let block scope variables. If the const keyword is omitted,
                  the identifier is assumed to represent a variable.

                  You cannot declare a constant with the same name as a
                  function or variable in the same scope. For example:

                  // THIS WILL CAUSE AN ERROR
                  function f() {};
                  const f = 5;

                  // THIS WILL CAUSE AN ERROR ALSO
                  function f() {
                    const g = 5;
                    var g;

                    //statements
                  }

/******************* Data structures and Types ***************/    


                  --> Basic value type in the variable
                          1. Numbers
                          2. String
                          3. Boolean
                          4. null
                          5. undefined
                          6. symbol

  Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. Objects and functions are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.            

                /***** Data type conversion *****/

      JavaScript is a dynamically typed language. That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution. So, for example, you could define a variable as follows:

      var answer = 42;
      answer = "Thanks for all the fish...";
      Because JavaScript is dynamically typed, this assignment does not cause an error message.

      In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

      x = "The answer is " + 42 // "The answer is 42"
      y = 42 + " is the answer" // "42 is the answer"
      In statements involving other operators, JavaScript does not convert numeric values to strings. For example:

      "37" - 7 // 30
      "37" + 7 // "377"  

                  /************  Objects *************/

      The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.      

      /*********** Properties of the Object Constructor *************/

      1. object.length
      2. object.prototype

      /*********** Methods of the Object Constructor ****************/

       Some of the methods of the object constructors are,

       1. Object.assign()
            Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object.   

       2. Object.create()
            Creates a new object with the specified prototype object and properties.



















javascript variables are the very important. It's keyword is var
Consider variable as a box you can create as many variables to your application to stop the confusion on which variable you placed which value, you can specify a variable with a unique name too..

          Rules to set a variables
          1. Variables shouldn't starts with a number
          2. Variables name ends with a number is allowed
          3. Variable names should contain only letters, numbers, $, _ sign is only allowed
          Always use a descriptive variable names so that you can understand the functionality of the variable.


          variables can be declared by two ways '  or "
          If you need to have a quote mark inside a string then simply use / and then put the quote inside the string then the interpreter will consider it as a normal string value.


          /******************* PROMPT command **********************/

          This PROMPT command is used to get the user input. When you need to save the user input then you place the command in a variable then print the variable so that you can get the value from the prompt command

          EX :
            var smalltalk = prompt("Hello how are you?");
            console.log(smalltalk);

          In this example you are asking a question and save it in a variable and then printing the value in the variable to the console.

          /****** Combining Strings is also called "Concatenation" *********/

          You can also combine a two string and can print

          Ex:   
              var smalltalk = prompt("What is your name?");
              var message = "Hello Welcome " + smalltalk + "You are amazing";
              document.write(message);

              /******** Property in a Object ******/

              Length Property::
                  This length property mainly used to find the length of the string

                  Ex::
                      var check = "check 123";
                      console.log(check.length);
                      Here .. check is a variable and also called as objects
                              length is the property of the object..

                    Where check.length --> Is called as a method
                    Method is what you can do with the objects..   



                        1. alert ("Alert message...");
                    javascript working the browser uses Interpreter to make it understandable to the browser.

                    // While you are placing the script tag in the end of the body tag will let you load the html elements first and then load the javascript, which will help you to display the html elements while the js is loading too :)

                    -> debugging the most important thing in the Javascript so when you encountered any error they check it in the browser javascript console to rectify the problem.

                            console.log("check where the mistake arise when there is a huge line of code");
                            This function is handy when there is a lots of lines in the code and you need to check where the error occurs  
