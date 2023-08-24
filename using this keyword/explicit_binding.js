//default binding
function myFunction(){
    console.log(this)
}
myFunction();

//Implicit Binding
const obj = {
    someKey : 1,
    myFunction : myFunction,
}

obj.myFunction();
// {someKey: 1, myFunction: ƒ}. ie. obj

//Nested function
const objt ={
    someKey: 1,
    outer: function(){
        function inner(){
            console.log(this);
        }
        inner();
    },
}

objt.outer(); //window

//Explicit Binding 
function explicitBinding(){
    console.log('Explicit Binding');
}
var objs = {
    a: 2
};

explicitBinding.call(objs);