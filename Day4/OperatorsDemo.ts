let c:number = 10, d:number = 20;

//Arithmetic Operators
console.log("Addition: ", c + d); // c = c + d; 
console.log("Subtraction: ", c - d); // c = c - d;
console.log("Multiplication: ", c * d); // c = c * d;
console.log("Division: ", c / d); // c = c / d;
console.log("Exponentiation: ", c ** d); // c = c ** d;
console.log("Modulus: ", c % d); // c = c % d;
//Assignment Operators

console.log("*********Assigment Operators*********");
c = 5;
d = 10;


console.log(c+=d); // Output: 15
console.log(c-=d); // Output: 5
console.log(c*=d); // Output: 50
console.log(c/=d); // Output: 5
console.log(c%=d); // Output: 5

// Relational Operators
// Returns a boolean value based on the comparison of two operands
console.log("*********Relational Operators*********");
c = 10;
d = 20;

console.log(c<d); // Output: true
console.log(c>d); // Output: false
console.log(c<=d); // Output: true
console.log(c>=d); // Output: false
console.log(c==d); // Output: false
console.log(c!=d); // Output: true

//Differenece between == (equality) and === (strict equality)
console.log("*********Equality vs Strict Equality*********");
let num3:any = 5;
let num4:any = "5";

console.log(num3 == num4); // Output: true (type coercion occurs)
console.log(num3 === num4); // Output: false (no type coercion, different types)

// Logical Operators
console.log("*********Logical Operators*********");

// b1       b2      &&      ||      !b1
//--------------------------------------------
// true     true    true    true    false    
// true     false   true    true 
// false    true    false   true    true
// false    false   false   false 

let b1:boolean = true;
let b2:boolean = false;

console.log(b1 && b1); //true
console.log(b1 || b2); //false
console.log(!b1); //false
console.log(!b2); //true