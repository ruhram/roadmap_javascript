// export sayHi.js
export function sayHi(user){
    alert(`Hello, ${user}!`);
}

// import main.js
import {sayHi} from './sayHi.js';

alert(sayHi); //function...
sayHi('John'); //Hello, John!

//another module-level scope
<script type="module" src="user.js"></script>