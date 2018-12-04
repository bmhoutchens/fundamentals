console.log("Hello World!")
//cmd ? highlighted : comment out
//console.log is a great tool to debug later down the line. For now we're going to use it as a learning tool

var a = 1;
var A = 2;
console.log(A,a);

var b = 1;
var b = 2;
console.log(b);

let c = 3;
c = 4;
console.log(c);

var firstName = "Brandon";
const lastName = "Houtchens";
console.log(firstName,lastName);
firstName = "Paul"; //This is fine, there is no logic error here.
//lastName = "Phillmeister"; //This won't work, as lastName is a const!

/*
Declarations are teh LEFT Side of a variable
    It is simply the var x
    It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
    It incoporates the variable name (x), the assigment operator (=), and the value (10) => x = 10
*/

var x
console.log("Declaration:",x);

x = 10
console.log("Initialization 1:",x);

var y = "Hello";
console.log("Both:",x,y);