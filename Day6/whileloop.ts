//while loop: A while loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The loop will continue to execute as long as the condition is true.

/* 
 while(condition)
 {
    //code to be executed
}

*/

let num1:number = 1;
while(num1 <= 10)
{
    if(num1 % 2 != 0)
    {
        console.log(`Odd number: ${num1}`);
    }
        num1++;
}

let num2:number = 2;
while(num2 <= 10)
{
    console.log(`Even number: ${num2}`);
    num2+=2;
}

// print 9 8 7 6 5 4 3 2 1
let num5:number = 9;
while(num5 >=1)
{
    console.log(`num5: ${num5}`);
    num5--;
}