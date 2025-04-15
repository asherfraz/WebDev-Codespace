//! ######################
//!  Arrays in JavaScript
//! ######################


let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = new Array("Asher", "Fraz", "Web Development", 21);
console.log(a2);

//  forEach loop => prints keys of object

console.log(`\n\nUsing forEach loop:`);
let sum = 0
a1.forEach((value) => {
    console.log(`${value}\tsum=${sum += value}`);
})
console.log(a1)

//  for-of loop => prints values of object
// let name = 'Asher Fraz'
for (const val of a2) {
    console.log(val)
}

console.log('\n\n-----------------------------------\n\n')

// Built-in array methods
console.log('Built-in Array methods\n')

console.log("typeof array", typeof (a1))

// 1. push() => add element at the end of the array
a1.push(6);
console.log("push =>", a1);

// 2. pop() => remove element from the end of the array
a1.pop();
console.log("pop =>", a1);

// 3. shift() => remove element from the beginning of the array
a1.shift();
console.log("shift =>", a1);

// 4. unshift() => add element at the beginning of the array
a1.unshift(1);
console.log("unshift =>", a1);

// 5. concat() => merge two or more arrays
let a3 = a1.concat(a2);
console.log("concat =>", a3);

// 6. join() => join all elements of an array into a string
let str = a1.join('-');
console.log("join =>", str);

// 7. reverse() => reverse the order of elements in an array
a1.reverse();
console.log("reverse =>", a1);
a1.reverse();
console.log("Original Array: ", a1);


// 8. slice() => return a portion of an array
let a4 = a1.slice(1, 3);
console.log("slice =>", a4);

// 9. splice() => add/remove elements from an array
a1.splice(2, 0, 10, 20);
console.log("splice =>", a1);

// 10. sort() => sort the elements of an array
a1.sort();
console.log("sort =>", a1);
// Sort a1 in descending order
a1.sort((a, b) => b - a);
console.log("sorted in descending order =>", a1);

// 11. indexOf() => find the index of an element in an array
let index = a1.indexOf(10);
console.log("indexOf =>", index);

// 12. includes() => check if an array contains a certain element
let hasElement = a1.includes(20);
console.log("includes =>", hasElement);

// 13. map() => create a new array with the results of calling a function on every element
let a5 = a1.map(x => x * 2);
console.log("map() =>", a5);

// 14. filter() => create a new array with all elements that pass a test
let a6 = a1.filter(x => x > 10);
console.log("filter =>", a6);

// 15. reduce() => apply a function against an accumulator and each element to reduce it to a single value
let total = a1.reduce((acc, x) => acc + x, 0);
console.log("reduce =>", total);

// 16. find() => return the first element that passes a test
let found = a1.find(x => x > 10);
console.log("find =>", found);

// 17. findIndex() => return the index of the first element that passes a test
let foundIndex = a1.findIndex(x => x > 10);
console.log("findIndex =>", foundIndex);

// 18. every() => check if all elements pass a test
let allAboveZero = a1.every(x => x > 0);
console.log("every =>", allAboveZero);

// 19. some() => check if at least one element passes a test
let someAboveTen = a1.some(x => x > 10);
console.log("some =>", someAboveTen);

// 20. fill() => fill all elements with a static value
// a1.fill(1);
console.log("fill =>", a1);

// 21. flat() => flatten nested arrays
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2);
console.log("flatArray =>", flatArray);

// 22. flatMap() => map each element and flatten the result
let flatMappedArray = a1.flatMap(x => [x, x * 2]);
console.log(flatMappedArray);
