let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  alert( rabbit.eats ); // true

  //constructor
  function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }


let raBbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(raBbit.constructor == Rabbit); // true (from prototype)