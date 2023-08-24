//Object Method
let user = {
    name: 'John',
    age: 30
};

user.sayHi = function(){
    alert('Hello');
};

user.sayHi(); //Hello

//method shorthand 

users = {
    sayHi(){
        alert('Hello');
    }
};

//this method 
let usar = {
    name: 'John',
    age: 30,

    sayHi(){
        //'this' is the current object
        alert(this.name)
    }
};

user.sayHi(); // John

//Using 'user' instead of 'this'

let a = {
    name: 'John',
    age: 30,
    sayHi(){
        alert(a.name); //'user' instead of 'this'
    }
}

//Arrow Function 
let user = {
    firstName: 'Ilya',
    sayHi(){
        let arrow = ()  => alert(this.firstName);
        arrow();
    }
};

user.sayHi();