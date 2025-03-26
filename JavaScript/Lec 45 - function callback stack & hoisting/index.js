
//* Hositing
// 1. put all variable (var) and function declareation to the top of the scope/file.
// 2. Hoisting is not possible with let and const in ES6.


//* Function Callback stack
//* functions are also called "First class citizens"
// functions stack works as a LIFO.

////////////////////////////////////////////////
// function in functions

function greet() {
    console.log("Greeting for the day, ASH!")
}

function greetUser(name, greet) {
    console.log("Hello, " + name + "!");
    greet();
}

greetUser("Asher", greet); // Output: Hello, Asher! Greeting for the day, ASH!

//////////////////////////////////////////////

// function returning function

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

//////////////////////////////////////////////

// function in array

const arr = [
    function (a, b) {
        return a + b;
    },
    (a, b) => {
        return a - b;
    },
    (a, b) => {
        return a * b;
    }
];

let first = arr[2];
let ans = first(5, 10);
console.log(ans);