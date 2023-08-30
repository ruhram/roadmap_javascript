const n = 123; // allocates memory for a number
const s = 'azerty'; // allocates memory for a string

const o = {
    a: 1,
    b: null
}; // allocates memory for an object and contained values

//contained values
const a = [1, null, 'abra'];

function f(a){
    return a + 2;
} // allocates a function (which is a callable object)

//function expressions also allocate an object
someElement.addEventListener(
    'click',
    () => {
        someElement.style.backgroundColor = 'blue';
    },
    false,
);