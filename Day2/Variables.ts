// variable: container for storing data values

//var, let, const

//Syntax: var variableName : dataType(optional) = value;
//Ex: var age : number = 25;

/* var age = 25; 
console.log(age); */

//var vs let vs const

/* 
  1. Scope
  2. Declaration/Value assignment
  3. Re declaration
  4. Re assignment
  5. Hoisting
*/

//var - We do not use this modern JS/TS. avoid var beacause it has function scope and can lead to unexpected behavior due to hoisting and re-declaration issues.
//let - We use this for variables that can change their value. It has block scope and does not allow re-declaration within the same scope. It is not hoisted like var, so it cannot be accessed before declaration.
//const - We use this for variables that should not change their value. It has block scope and does not allow re-declaration or re-assignment. It is also not hoisted like var, so it cannot be accessed before declaration.

//Scope: Accesible are (Function scope (var), Block scope (let/const), Global scope)

//Example 1 : var (Function scope )
function varExample()
{
  if(true)
  {
    var message = "Hello, World!";
  }
  console.log(message); // Output: Hello, World! (accessible outside the block)
}

varExample();

// Example 2 : let/const (Block scope)

function blockExample()
{
  if(true)
  {
    let msg = "Hello, World!";
    const greeting = "Welcome to TypeScript!";
    console.log(msg);
    console.log(greeting);
  }
  

blockExample();
}

//example 3 :

/* function scopeDiff()
{
  if(true)
  {
    var num1 = 10; // var is function-scoped
    let num2 = 20; // let is block-scoped
    const num3 = 30; // const is block-scoped
    console.log(num1); // Output: 10
    console.log(num2);  // Output: 20
    console.log(num3);  // Output: 30 
  }
     console.log(num1); // Can access num1 because var is function-scoped
    console.log(num2);  // Cannot access num2 because let is block-scoped
    console.log(num3);  // Cannot access num3 because const is block-scoped
}

scopeDiff(); */

//2) Declaration/Value assignment

//Example1: var can be declared without initialization
var x; //declaration without initialization
console.log(x); // Output: undefined
x = 5; // value assignment
console.log(x); // Output: 5

//Example 2: Let can be declared without initialization
let y; //declaration without initialization
console.log(y); // Output: undefined
y = 10; // value assignment
console.log(y); // Output: 10

// example 3: const must be initialized at the time of declaration
/* const z;
console.log(z); // Error: Missing initializer in const declaration */

//3) Re-declaration
//var - allows re-declaration within the same scope
var city = "New York";
var city = "Los Angeles"; // No error, re-declaration allowed
console.log(city); // Output: Los Angeles

//let - does not allow re-declaration within the same scope
/* let country = "USA";
let country = "Canada"; // Error: Identifier 'country' has already been declared
console.log(country); */

//example 3: const - does not allow re-declaration within the same scope
/*  const pi = 3.14;
 const pi = 3.14159; // Error: Identifier 'pi' has already been declared
 console.log(pi);
  */

//4) Re-assignment
//var - allows re-assignment
var age = 25;
age = 30; // No error, re-assignment allowed
console.log(age); // Output: 30
//const - does not allow re-assignment

//5) hoisting
console.log(a); // Output: undefined (due to hoisting)
var a = 10; // variable declaration and initialization
console.log(a); // Output: 10 (after initialization)

console.log(b); // Error: Cannot access 'b' before initialization
let b = 20; // variable declaration and initialization
console.log(b); // Output: 20 (after initialization)
