/* //JS is dynamically typed language

let age = 10; //age is a number
console.log(typeof(age)); //Output: number

age = "ten"; //age is now a string
console.log(typeof(age)); //Output: string

console.log(age); //Output: ten */

//Type Safety in TypeScript

let message = "Hello, TypeScript!"; //message is inferred as a string
let count = 42; //count is inferred as a number

message = 10;

console.log(message); //Output: 10

let result = "5"+10; //result is inferred as a string due to string concatenation
console.log(result); //Output: 510