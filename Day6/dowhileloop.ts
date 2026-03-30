// do while loop: A do-while loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a given boolean condition is true. The key difference between a do-while loop and a while loop is that the do-while loop guarantees that the code block will be executed at least once, even if the condition is false from the beginning.

/* 
  syntax:
    do
    {
        //code to be executed
    } while(condition);
*/

// example: print 1 2 3 4 5 using do-while loop
let dowhile:number = 1;

do
{
    console.log(`dowhile: ${dowhile}`);
    dowhile++;
} while(dowhile <= 5);

//example print 5 4 3 2 1 using do-while loop
let dowhile2:number = 5;

do
{
    console.log(`dowhile2: ${dowhile2}`);
    dowhile2--;
}while(dowhile2 >= 1);