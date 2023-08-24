function sayHi(){
    alert('Hello');
}

setTimeout(sayHi, 1000);

//With Argument

function sayHi(phrase, who){
    alert(phrase + ', '+ who);
}

setTimeout(sayHi, 1000, 'Hello', 'John'); //Hello, John