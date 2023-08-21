//function scope
{
    let x = 2;
}
// x can NOT be used here

{
    var x = 2;
}
// x CAN be used here

function myFunction(){
    let carName = 'Volvo'
    // code here can use carName
}
//code here can not use carName

function myFunction(){
    var carName = 'Volvo'; //function scope
}

let carName = 'Volvo'
//code here can use carName

function myFunction(){
    //code here can also use carName
}

//global scope
var x = 2;
let x = 2;
const x = 2;

myFunction();
// code here can use carName

function myFunction(){
    carName = 'Volvo';
}

var carName = 'Volvo'
//code here can use window.carName

let carName = 'Volvo'
// code here can not use window.carName