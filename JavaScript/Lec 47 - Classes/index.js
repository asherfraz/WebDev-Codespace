
class Human {

    name = "Asher";                  // public field
    age = 21;                       // public field
    #course = "Web Development";  // private field

    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.#course = course;
    }

    greet() {
        console.log(`Hello, ${this.name}! learning ${this.#course}.`);
    }

    // Getter
    get course() {
        return this.#course;
    }
    // Setter
    set course(course) {
        this.#course = course;
    }
}

let obj = new Human("Asher Fraz", 21, "Web Development");
// console.log(obj.course);
console.log(obj)