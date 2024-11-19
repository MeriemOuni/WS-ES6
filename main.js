/* Variables : var * let * const */

// const x = 20;
// console.log(x);
// const x = 25;
// console.log(x);

// var x = 20;
// console.log(x);
// var x = 25;
// console.log(x);

// let x = 20;
// console.log(x);
// let x = 25;
// console.log(x);

// console.log(x);
// var x = 20;

// console.log(x);
// let x = 20;

// console.log(x);
// const x = 20;

if (2 == 2) {
	// var age = 20;
	let age = 20;
	// const age = 20;
	// console.log(age);
}
// console.log(age);

/* Arrow function */

// let test1 = function () {
// 	return 5;
// };
// console.log(test1());

// let arrowTest = () => {
// 	return 5;
// };
// let arrowTow = () => 5;
// console.log(arrowTest());
// console.log(arrowTow());

// let arrowTest32 = function (n) {
// 	return n * 2;
// };
// let arrowTest3 = (n) => n * 2;
// let arrowTest3 = (n) => n * 2;
// console.log(arrowTest3(50));

/**  Numbres methods */

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));

// var x = 5;
// var z = x ** 2;
// var z = Math.pow(x, 2);
// console.log(z);

/* String Methods */

const title = "Jack and Jill Went Up the Hill";

// console.log(title.startsWith("Jack"));
// console.log(title.startsWith("jack"));
// console.log(title.startsWith("Jill", 9));

// console.log(title.endsWith("Hill"));
// console.log(title.endsWith("hill"));
// console.log(title.endsWith("Up", 21));

// let email = "admin@example.com";
// console.log(email.includes("com"));

// let str = "JavaScript String";
// console.log(str.includes("Script"));
// console.log(str.includes("script"));
// console.log(str.includes("Script", 4));
// console.log(str.repeat(4));

/** Existence cheking in Array */

// let fruits = ["apple", "orange", "grapes"];
// let isOrange = false;
// for (let i = 0; i < fruits.length; i++) {
// 	if (fruits[i] === "orange") {
// 		isOrange = true;
// 	}
// }
// console.log(isOrange);
// let isOrange = fruits.includes("orange");
// console.log(isOrange);

/* Template Literals */

// let myName = "Omar";
// let perviously =
// 	"Hello wordl, I am " +
// 	myName +
// 	" \n" +
// 	"Have a nice day \n" +
// 	"I wish you the best";

// let now = `Hello world, I am ${myName}
// Have a nice day
// I wish you the best`;

// console.log(perviously);
// console.log(now);

/* Spread Operator ... */

// let array1 = [1, 2, 3, 9, 4];
// array2 = [5, 6, 7];
// console.log(array1.concat(array2));

// let allArrays = [...array1, ...array2];
// console.log(allArrays);

// function sum(x, y, z) {
// 	return x + y + z; // 1 + 2 + 3
// }
// console.log(sum(1, 2, 3));
// const numbers = [1, 2, 3];
// console.log(numbers);
// console.log(...numbers);
// console.log(sum(...numbers));

// let cities = ["San Francisco", "Los Angeles"];
// let places = ["Miami", "Chicago", cities];
// console.log(cities);
// console.log(places);

/* Array Methodes */

// let array = [15, 24, 15, 26, 1, 8, 45];
// console.log(array);

// let array1 = array.map((el) => el * 2);
// console.log(array1);
// let array2 = array.filter((el) => el > 20);
// console.log(array2);
// let array3 = array.reduce((acc, cur) => acc + cur, 5);
// console.log(array3);
// let array4 = array.find((el) => el > 25);
// console.log(array4);
// let array5 = array.findIndex((el) => el > 25);
// console.log(array5);

/** Object methods */

// const zoo = {
// 	cat: "3",
// 	panda: "4",
// };
// console.log(Object.keys(zoo));
// console.log(Object.values(zoo));
// console.log(Object.entries(zoo));

/* Destructuring */

// const contact = {
// 	firstName: "Jhon",
// 	lastName: "Doe",
// 	age: "26",
// 	city: "London",
// 	email: "jhon@gmail.com",
// };
// const { firstName, age, city } = contact;
// console.log(
// 	`My name is: ${firstName}, My age is: ${age} and I am from ${city}`
// );

// let obj = { foo: 111, bar: 222, foobar: 333 };
// let { foo: x, bar: y } = obj;
// console.log(x, y);

/********* Ternary Operator **********/

let x = 5;
// if (x > 10) {
// 	console.log("is greater than 10");
// } else {
// 	console.log("is greater less 10");
// }

// Condition ? If true : If false

// x > 10 ? console.log("is greater than 10") : console.log("is greater less 10");

// let today = "saturdayk,";
// today === "saturday" ? console.log(today) : console.log("wrong input!");

/******* Modules *******/
//
// import { a, tab, sum } from "module.js";
