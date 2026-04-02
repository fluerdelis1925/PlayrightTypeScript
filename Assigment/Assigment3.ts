let ass3:number = 98765327;   // given number
let reversed:number = 0;

while (ass3 > 0) 
{
    let digit = ass3 % 10;  

    reversed = reversed * 10 + digit;

    ass3 = Math.floor(ass3 / 10);  
}

console.log(reversed);