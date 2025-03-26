console.log("Built-in objects in JavaScript\n");

// 1. Math object
console.log("Math object\n");
console.log("Math.PI =>", Math.PI);
console.log("Math.E =>", Math.E);
console.log("Math.round(PI) =>", Math.round(Math.PI));
console.log("Math.floor(PI) =>", Math.floor(Math.PI));
console.log("Math.ceil(PI) =>", Math.ceil(Math.PI));
console.log("Math.trunc(PI) =>", Math.trunc(Math.PI));
console.log("Math.pow(2, 3) =>", Math.pow(2, 3));
console.log("Math.sqrt(25) =>", Math.sqrt(25));
console.log("Math.abs(-25) =>", Math.abs(-25));
console.log("Math.min(1, 2, 3, 4, 5) =>", Math.min(1, 2, 3, 4, 5));
console.log("Math.max(1, 2, 3, 4, 5) =>", Math.max(1, 2, 3, 4, 5));
console.log("Math.random() =>", Math.random());
console.log("\n\n");

// 2. Date object
console.log("Date object\n");
let date = new Date();
console.log("Date =>", date);
console.log("Date.toDateString =>", date.toDateString());
console.log("Date.toTimeString =>", date.toTimeString());
console.log("Date.toLocaleDateString =>", date.toLocaleDateString());
console.log("Date.toLocaleTimeString =>", date.toLocaleTimeString());
console.log("Date.getFullYear =>", date.getFullYear());
console.log("Date.getMonth =>", date.getMonth());
console.log("Date.getDate =>", date.getDate());
console.log("Date.getHours =>", date.getHours());
console.log("Date.getMinutes =>", date.getMinutes());
console.log("Date.getSeconds =>", date.getSeconds());
console.log("Date.getMilliseconds =>", date.getMilliseconds());
console.log("Date.getDay =>", date.getDay());
console.log("\n\n");

// 3. String object
console.log("String object\n");
let str = "Hello, World!";
console.log("str =>", str);
console.log("str =>", str.length);
console.log("str =>", str.toUpperCase());
console.log("str =>", str.toLowerCase());
console.log("str =>", str.charAt(0));
console.log("str =>", str.indexOf("World"));
console.log("str =>", str.lastIndexOf("World"));
console.log("str =>", str.startsWith("Hello"));
console.log("str =>", str.endsWith("World!"));
console.log("str =>", str.slice(0, 5));
console.log("str =>", str.substring(0, 5));
console.log("str =>", str.split(","));
console.log("str =>", str.replace("World", "JavaScript"));
console.log("\n\n");
