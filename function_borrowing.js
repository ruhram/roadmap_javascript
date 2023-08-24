class Dog {
    constructor(name, age, breed){
        this.name = name
        this.age = age
        this.breed = breed 
    }
    tellUsAboutYourSelf(){
        return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
    }

    woof(){
        return 'woof!'
    }
}

let fido = new Dog('Fido', 3, 'dachshund')
fido.tellUsAboutYourSelf() 

// 'My name is Fido. I am a dachshund and I am 3 years old.'

class Cat {
    constructor(name, age, breed) {
      this.name = name
      this.age = age
      this.breed = breed
    }
  
    meow() {
      return "MEOW!!!"
    }
  }
  
let sparkles = new Cat("Sparkles", 5, "Siamese")
sparkles.tellUsAboutYourSelf()
//=>TypeError: sparkles.tellUsAboutYourSelf is not a function

//Function Borrowing 
fido.tellUsAboutYourSelf.call(sparkles) 
// 'My name is Sparkles. I am a Siamese and I am 5 years old.'

fido.tellUsAboutYourSelf.apply(sparkles) 
// 'My name is Sparkles. I am a Siamese and I am 5 years old.'

const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles)
describeSparkles()
// 'My name is Sparkles. I am a Siamese and I am 5 years old.'