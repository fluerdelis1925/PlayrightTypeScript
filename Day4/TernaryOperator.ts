// Ternary Operator
//  ?:
// exp ? res1 : res2

let number1:number = 10, number2:number = 20;

let max:number = (number1 > number2) ? number1 : number2;
console.log("Maximum: ", max); //20

let age:number = 18;

let eligibility:string = (age >= 18) ? "eligible to vote" : "not eligible to vote";
console.log("Voting Eligibility: ", eligibility);