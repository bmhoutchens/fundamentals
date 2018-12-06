/*
var x = 12;

function scope(){
    x = 33;
    console.log(x);
}
scope(); //33
console.log(x); //12
*/

const x = 12; //global x variable

function scope2(){
    const x = 33  //new x variable
    if (true){
        const x = 45; //another new x variable
        console.log(x);
    }
    console.log(x);
}

scope2();
console.log(x);

/*
    variable grammar    obeys functional scope  obeys block scope   can be mutated (changed after initialization)
    var                 x                       -                   x
    let                 x                       x                   x
    const               x                       x                   -
*/