

let obj = {
    name: "Asher",
    age: 21,
    course: "Web Development",
    greet: function () {
        console.log(`Hello, ${this.name}! learning ${this.course}.`);
    }
}

console.log("Full Object:\n", obj)

console.log("Name:", obj.name)

obj.greet()

console.log("\n\n")

// for-in loop

for (let key in obj) {
    console.log(key + ":", obj[key]);
}