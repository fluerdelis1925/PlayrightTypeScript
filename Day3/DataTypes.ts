/* 
1, Premitive data types: (build in)
numbers
strings
boolean
null
undefined
symbol
Any
Union types
void


2, Non-primitive data types: (Objects)
Arrays
classes
interfaces
objects
tuples
enums
*/

//1 Number type
// represents both integers and floating-point numbers

let num: number = 42;
let price: number = 19.99;
let big:number = 443534534; // BigInt for large integers

console.log("number: ", num); // Output: 42
console.log("Price: ", price); // Output: 19.99
console.log("Big", big); // Output: 443534534

console.log(typeof num); 
console.log(typeof price);
console.log(typeof big);

//2 String Type
/* 
    1. Single quotes(' ')
    2. Double quotes(" ")
    3. Template literals (backticks)(` `)

*/

let fname: string = "John";
let lname: string = 'Doe';
let fullName: string = `${fname} ${lname}`; // Template literal

console.log(fullName); // Output: John Doe


//3 Boolean type
let isActive: boolean = true;
let isLoggedIn: boolean = false;

console.log("Is Active: ", isActive); // Output: true
console.log("Is Logged In: ", isLoggedIn); // Output: false

//4 Null and Undefined
 let nulvalue:null= null;
let undef:undefined = undefined;

console.log("Null value: ", nulvalue); // Output: null
console.log("Undefined value: ", undef); // Output: undefined

//5 Any type

let randomValue:any = "Hello";
console.log(typeof (randomValue));

randomValue = 42;
console.log(typeof (randomValue));

randomValue = true;
console.log(typeof (randomValue));  

//union types - combination of multiple types

let id:number | string | boolean = 123; // id can be a number or a string

console.log("ID: ", id); // Output: 123

id = "abc123"; // id can also be a string
console.log("ID: ", id); // Output: abc123
 
id = true; // id can also be a boolean
console.log("ID: ", id); // Output: true


