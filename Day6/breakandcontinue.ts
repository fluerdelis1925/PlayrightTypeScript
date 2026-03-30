
// break

for(let i=1; i<=10; i++)
{
    if(i === 2)
    {
        break;
    }
    console.log(i);
}

for(let i=1; i<=5; i++)
{
    if(i === 2 || i === 5)
    {
        continue;
    }
    console.log(i);
}