# learnjs
This read me file is for my reference. While learning javascript need to take notes on it.

    /************************* JavaScript ***********************/

Javascript is a cross platform, object oriented scripting language.

It is light-weight, small Language..

Javascript connect with the Objects of the host(Eg:Web Browser) to provide programatic control over the host.

Javascript contain a standard library of objects such as Array, Date, Math ..etc
core set of language elements such as Operators, control structures and Statements..

Two types of Javascript:

      1. Client-side Javascript
              Supplying objects to control the browser and its Document Object Model (DOM). Act according to the user response eg: Mouse click, Form submission.. etc
      2. Server-Side Javascript
              Supplying objects relevant to the running javascript on the server.
              Creating communication between the database and the client-side javascript, or the file manipulations on the server.

  /***************  Java & JavaScript  ***********/

  Java and javascript are entirely different.

  Javascript has a prototype based object model and Java has class based object model.

  Prototype based object model provides dynamic inheritance that is, What is inherited can vary to individual objects.
  Javascript allows function without any special declarative requirements.

  Javascript is a free-form language compared to the java.
  You need not have to declare all variables, objects and methods.

  /************* ECMA Specifications **************/

  ECMA is a standardized, international programming language for JavaScript and the current ECMA is ECMA 6..

  /************* Grammar and Types ***************/

  Javascript is Case-sensitive and use Unicode Character set.
  In Javascript,
      1. Instructions are called statements, and they are separated by     semicolon(;).
      2. Space, tabs, new lines are called White-spaces.
      3. Javascript get scanned from left to right and converted into a sequence of input elements tokens, control characters, line terminators, comments or white-spaces.

  /************** JavaScript declarations *************/

  There are three kind of declaration in Javascript
    1. Var --> Declares a variable and optionally initializing it to a value.

    2. let --> Declares a block scope local variable and optionally initialize to a value.

    3. const --> Declare a read only named constant.

  /***************   Javascript Variables  **************/

javascript variables are the very important. It's keyword is var
Consider variable as a box you can create as many variables to your application to stop the confusion on which variable you placed which value, you can specify a variable with a unique name too..

          Rules to set a variables
          1. Variables shouldn't starts with a number
          2. Variables name ends with a number is allowed
          3. Variable names should contain only letters, numbers, $, _ sign is only allowed
          Always use a descriptive variable names so that you can understand the functionality of the variable.

      --> Basic value type in the variable
              1. Numbers
              2. String
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
