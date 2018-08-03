###### Getting Stronger in the JavaScript Basics ############

## Spend good amount of time in Understanding the Js basics. 

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





