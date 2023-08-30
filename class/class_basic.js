//class syntax

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi(){
        alert(this.name);
    }
}

//usage
let user = new User('John');
user.sayHi(); //alert 'John'

//class is a function
alert(typeof User); // function

// the constructor method 
alert(User === User.prototype.constructor); //true

//class field
new User().sayHi(); //'John'

//Button 
class Button {
    constructor(value){
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let button = new Button('Hello');

setTimeout(button.click, 1000); //hello