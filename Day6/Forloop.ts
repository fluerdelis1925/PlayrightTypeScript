// for loop: A for loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. It consists of three parts: initialization, condition, and increment/decrement. The loop will continue to execute as long as the condition is true.

/* 
   syntax:
    for(initialization; condition; increment/decrement)
    {

    }


*/

for(let i:number = 1; i <= 10; i++)
    {
        if(i % 2 === 0)
        {
            console.log(`Even number: ${i}`);
        }
 
    }

for(let i:number = 2; i <= 10; i += 2)
    {

            console.log(`Even number: ${i}`);
 
    }

    let i:number;
    for(i=1; i <=5; i++)
    console.log(i);
