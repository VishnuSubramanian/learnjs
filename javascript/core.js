
// In this below section, It is just the example of the JavaScript code.
var para = document.querySelector('p');
para.addEventListener('click', updatename);

function updatename(){
    var name = prompt("Enter the new name you need to add");
    para.textContent = 'My name is :' + name;
}