var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";

var helloWorld = "Have a good day!";


//Conditional Statement 
var health = "good";
    if (health === "good")
    {
        console.log ("You are good to go");
    }    
    else{
        console.log("You need to take medication");
    }

//Function example

function multiply (n1, n2)
{
    var result = n1 * n2;
    return result;
}

// multiply(5,5);
document.write(multiply(5,5));

//Events Example
document.querySelector('html').onclick = function() {
    alert('Wesite is under construction');
}