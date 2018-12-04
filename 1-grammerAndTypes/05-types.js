//Booleans
//What is a boolean?
var on = true;
console.log(on); //true
let off = false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off

//Null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); //null

var undef = undefined;
console.log(undef); //undefined

var grass;
console.log(grass); //undefined

/*
We've talked about how every variable is basically a storage containter in JavaScript
think of variables with null and undefined as packages coming out of UPS
null packages are packages that were intentionally packed up with nothing, but have been assembled
undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
*/

//numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999;
console.log(precise);

var rounded = 9999999999999999;
console.log(rounded);

var notQuite = 0.2 + 0.1;
console.log(notQuite);

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let stringOne = "Double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//numbers vs Strings
let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(second);
console.log(first+second);
console.log(typeof first);
console.log(typeof second);

/*
Addition vs. Concatenation

When JS sees combining to or more numbres, it adds the values together using the built-in
math functionality; when it sees adding together one or more strings, it changes and the plus
sign becomes an assignment operator--it smashes the values together without trying to
synthesize the values
*/

let third = 1050 + "100";

console.log(third);
console.log (typeof third);

var firstName = "Brandon";
var lastName = "Houtchens";
var houseNumber = 2863;
var aptNumber = null;
var street = "Windy Knoll Lane";
var city = "Carmel";
var state = "Indiana";
var zipcode = 46074;

console.log(firstName, lastName, houseNumber, street, city, state, zipcode, aptNumber);
/*
Objects

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): "blue" (value)), separated witha  colon
Each key separated with a comma
*/
let burritosNow = {
    size: "large",
    quantity: 4,
    now: true
};
console.log(burritosNow);
console.log(typeof burritosNow);

/*
Arrays are great for lists

Denoted by []
Has values ("Blue", "green", "yellow"), separated with commas
*/

var burritos = ["large", 4, true];
console.log(burritos);

console.log(typeof burritos);