###### Getting Stronger in the JavaScript Basics ############

## Spend good amount of time in Understanding the Js basics. 

##### Understand good things take TIME....  ###########

This is amazing

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


Introduction :: 

JavaScript ("JS" for short) is a full-fledged dynamic programming language that, when applied to an HTML document, can provide dynamic interactivity on websites. It was invented by Brendan Eich, co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.

 every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.

Application Programming Interface ( API's )
  API's give extra Superpowes to use in your JavaScript Code.

  APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. They do the same thing for programming that ready-made furniture kits do for home building — it is much easier to take ready-cut panels and screw them together to make a bookshelf than it is to work out the design yourself, go and find the correct wood, cut all the panels to the right size and shape, find the correct-sized screws, and then put them together to make a bookshelf.

  Two major Categories of API's
    1. Third- Party API's ( Twitter API, Google Maps API...etc)
    2. Browser API's (Geolocation API, DOM API, WebGL...etc)

Browser Security :: 
     Each Browser has a seperate bucket for running the code, These buckets are called "Excecution Environment". This means each tab runs mostly seperately and nothing can affect it.

JavaScript running order :: 
    When the browser encounters the block of the JavaScript code, It runs from the top to bottom order. So be careful in what order you puts in.

Interpreted versus compiled Code :: 

    Interpreted :: 
        In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it.

    Compiled :: 
        Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. For example C/C++ are compiled into assembly language that is then run by the computer.

    JavaScript is the lightweight Interpreted Programming language. 

Server-side versus client side code :: 

    Client Side :: 
    You might also hear the terms server-side and client-side code, especially in the context of web development. Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. In this JavaScript module we are explicitly talking about client-side JavaScript.

    Server Side ::
    Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.

Dynamic Versus Static code :: 
    
    Dynamic code :
    The word dynamic is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.

    Static Code:
    A web page with no dynamically updating content is referred to as static — it just shows the same content all the time.

Script loading Strategies ::

    Async: 
    Async scripts will download the script without blocking rendering the page and will execute it as soon as the script finishes downloading. You get no guarantee that scripts will run in any specific order, only that they will not stop the rest of the page from displaying. It is best to use async when the scripts in the page run independently from each other and depend on no other script on the page. 
    <script async src="js/jquery">
    <script async src="js/main">

    Defer: 
    Defer will run the scripts in the order they appear in the page and execute them as soon as the script and content are downloaded
    <script defer src="js/jquery">
    <script defer src="js/main">


language basics :: 

1. Variables
    Variables are the containers where you can Store the value. You can start declaring variable by var keyword at the beginning.

    Imp : JavaScript is Case-sensitive. var helloWorld ==! var helloworld

    Eg:: 
        1. var learning = " JAVASCRIPT "
        2. learning = " SKETCH "

2. Data Types 
    You can store the values in these below different data types 

        1. String :
            A sequence of text known as a string. To signify that the value is a string, you must enclose it in quote marks.
                Eg: var learning = " JAVASCRIPT "
        2. Number :
            A number. Numbers don't have quotes around them.
                Eg: var learning = 10;
        3. Boolean :
            A True/False value. The words true and false are special keywords in JS, and don't need quotes.
                Eg: var learning = true;
        4. Array : 
            A structure that allows you to store multiple values in one single reference.
                Eg: var learning = ["JavaScript","ReactJs","Python"];
        5. Object :
            Basically, anything. Everything in JavaScript is an object, and can be stored in a variable. Keep this in mind as you learn.

    So why do we need variables? Well, variables are needed to do anything interesting in programming. If values couldn't change, then you couldn't do anything dynamic, like personalize a greeting message or change the image displayed in an image gallery.

3. Comments 
    Comments will be helpful in the future understanding of the code or the process. 
    You can add comments in /* */ or in // way. 

4. Operators 
    An Operator is a mathematical Symbol which produce a result between the values  

        1. Addition Eg: var health = 100 + 90;
        2. Subtraction, Multiplication, Division Eg: var h = 100-10; var h = 100 * 10; var h = 100/10;
        3. Assigment Eg: helloWorld = "Programming"
        4. Equality Eg: var helloWorld ==== "Programming"

5. Conditionals 
    Conditionals are code structures which allow you to test if an expression returns true or not, running alternative code revealed by its result. A very common form of conditionals is the if ... else statement. For example:


6. Functions 
    Functions are a way of packaging functionality that you wish to reuse. When you need the procedure you can call a function, with the function name, instead of rewriting the entire code each time. You have already seen some uses of functions above, for example:

7. Events 
    Real interactivity on a website needs events. These are code structures which listen for things happening in browser, running code in response. The most obvious example is the click event, which is fired by the browser when you click on something with your mouse. To demonstrate this, enter the following into your console, then click on the current webpage:


    Beginner's Course module: (First Step )

    1. What is Js?
    2. A first Splash in Js -- Through practical examples by build Project
    3. Troubleshooting in Js
    4. Storing the data -- Variables 
    5. Basic math -- Operators 
    6. Handling text -- String
    7. Useful String  build-in methods.
    8. Arrays

    1 & 2 -- View the number's game to understand the First 1 and 2 Steps
            guess.html

    Types of Error :: 
    There are usually two main types of error :: 
    1. Syntax error
    2. Logic error 

    Syntax Error : 
    These are spelling errors in your code that actually cause the program not to run at all, or stop working part way through — you will usually be provided with some error messages too. 

    Logic Error : 
    These are errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results. These are often harder to fix than syntax errors.        


    V. All About Variables :: 

    A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence. But one special thing about variables is that their contained values can change.

    Visit V.1 in core.js

        Declaring a Variable :
            To use a variable you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword var followed by the name you want to call your variable:
                Eg: var myName;
                    var Name = "Vishnu";
                    var check = 20; 
                    var statements = True;
                    ...etc
            ********************
            *********
            In JavaScript, all code instructions should end with a semi-colon (;) — your code may work correctly for single lines, but probably won't when you are writing multiple lines of code together. Try to get into the habit of including it.
            *********
            *********************
            You can test whether these values now exist in the execution environment by typing just the variable's name
            If there is no value in the variable container then they will return Undefined but if the Variable name doesn't exists then it will throw an error message. 

        Initializing a Variable : 
            Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it. 
            ********************
            **********
             If you write a multiline JavaScript program that declares and initializes a variable, you can actually declare it after you initialize it and it will still work. This is because variable declarations are generally done first before the rest of the code is executed. This is called hoisting. 
             **********
             ********************

             Var hoisting -->
             Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.
             If you want to learn more about variable hoisting visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting

        Updating a Variable : 
            Once a variable has been initialized with a value , you can change (or update) that value by simply giving it a different value.
            var myName = 20;
            myName = "check";
            console.log(myName);
            Check this in the console, you will get the updated value for the variable.     
            You can call a variable pretty much anything you like, but there are limitations. Generally you should stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character.

            Rules for naming the variables : 
            ---You shouldn't use other characters because they may cause errors or be hard to understand for an            international audience.
            ---Don't use underscores at the start of variable names — this is used in certain JavaScript constructs to     mean specific things, so may get confusing.
            ---Don't use numbers at the start of variables. This isn't allowed and will cause an error.
            ---A safe convention to stick to is so-called "lower camel case", where you stick together multiple words,     using lower case for the whole first word and then capitalize subsequent words. We've been using this       for our variable names in the article so far.
            ---Make variable names intuitive, so they describe the data they contain. Don't just use single    letters/numbers, or big long phrases.
            ---Variables are case sensitive — so myage is a different variable to myAge.
            ---One last point — you also need to avoid using JavaScript reserved words as your variable names — by this, we mean the words that make up the actual syntax of JavaScript! So you can't use words like var, function, let, and for as variable names. Browsers will recognize them as different code items, and so you'll get errors. 

        Variable Types : 
            1. Numbers
            2. Strings
            3. Boolean
            4. Arrays
            5. Objects     

            Numbers :
            You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating point numbers). You don't need to declare variable types in JavaScript, unlike some other programming languages. When you give a variable a number value, you don't include quotes:
            Eg: var numberInt = 50;
                var numberfloat = 4.445;

            Strings : 
            Strings are pieces of text. When you give a variable a string value, you need to wrap it in single or double quote marks, otherwise JavaScript will try to intepret it as another variable name.
            Eg: var nameAString = "Hello World, this is a String";

            Boolean: 
            Booleans are true/false values — they can have two values, true or false. These are generally used to test a condition, after which code is run as appropriate. So for example, a simple case would be
            Eg: var checkIt = True;
            But Whereas, the boolean will be used as 
            Eg: var checkIt = 10<5;
            The Answer will return a true or false value.

            Arrays : 
            An array is a single object that contains multiple values enclosed in square brackets and separated by commas.
            Eg: var setOfNumbers = [10,20,30];
            The square brackets specify an index value corresponding to the position of the value you want returned. You might have noticed that arrays in JavaScript are zero-indexed: the first element is at index 0. 

            Objects : 
            In programming, an object is a structure of code that models a real life object. You can have a simple object that represents a car park and contains information about its width and length, or you could have an object that represents a person, and contains data about their name, height, weight, what language they speak, how to say hello to them, and more.
            Eg: 
            var pet = {name="Babu", bread="labrador", age = "10", color = "fawn"};
            pet.bread;

    Basic Math in JavaScript :: 
        Okay, maybe not. Some of us like math, some of us have hated math ever since we had to learn multiplication tables and long division in school, and some of us sit somewhere in between the two. But none of us can deny that math is a fundamental part of life that we can't get very far without. This is especially true when we are learning to program JavaScript (or any other language for that matter) — so much of what we do relies on processing numerical data, calculating new values, etc. that you won't be surprised to learn that JavaScript has a full-featured set of math functions available.

        Types of Numbers:
            In programming, even the humble decimal number system that we all know so well is more complicated than you might think. We use different terms to describe different types of decimal numbers, for example: 
            1. Integers Eg: 10, 20, 999 ...etc
            2. Floats  Eg: 10.22, 44.85 ...etc
            3. Doubles  

            We have different types of number system as well 
            1. Binary - The lowest level language of computers; 0s and 1s.
            2. Octal -  Base 8, uses 0–7 in each column.
            3. HexaDecimal - Base 16, uses 0–9 and then a–f in each column 










