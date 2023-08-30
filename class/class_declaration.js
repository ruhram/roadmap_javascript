//class field declaration
class Rectangle {
    height = 0;
    width;
    constructor(height, width){
        this.height = height
        this.width = width;
    }
}

//private class declaration
class Rectangle{
    #height = 0;
    #width;
    constructor(height, width){
        this.#height = height;
        this.#width = width;
    }
}

//Inheritance
class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name){
        super(name); //call the super class constructor and pass in the name parameter
    }

    speak(){
        console.log(`${this.name} barks.`)
    }
}

const d = new Dog('Mitzie');
d.speak(); //Mitzie barks

//Binding

class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
  const obj = new Animal();
  obj.speak(); // the Animal object
  const speak = obj.speak;
  speak(); // undefined
  
  Animal.eat(); // class Animal
  const eat = Animal.eat;
  eat(); // undefined