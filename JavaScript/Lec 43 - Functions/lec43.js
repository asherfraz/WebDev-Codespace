// Define a function that adds two numbers
function add(a, b) {
    return a + b; // Return the sum of a and b
}

// Call the function and store the result
let sum = add(3, 4); // sum is now 7
console.log(sum); // Output: 7


////////////////////////////////////////////////////////////
//* Anonymous functions in javascript

let greetAnonymous = function (name) {
    console.log("Hello, " + name + "!");
};

greetAnonymous("Asher"); // Output: Hello, Asher!

////////////////////////////////////////////////////////////
//* Arrow Function in JavaScript


let greetArrow = (name) => {
    console.log("Hello, " + name + "!");
};

greetArrow("Asher Fraz"); // Output: Hello, Asher Fraz!