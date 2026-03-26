// example : IF age is greater than or equal to 18, then print "eligible to vote", otherwise print "not eligible to vote"

let age1:number = 17;

if(age1 >= 18){
    console.log("eligible to vote");
}
else{
    console.log("not eligible to vote");
}

if(age1 % 2 == 0){
    console.log(`${age1} is an Even number`);
}

else{
    console.log(`${age1} is an Odd number`);
}

//nested if-else

let marks:number = 85;
if(marks >= 95 && marks <= 100){
    console.log(`Grade: A+ ${marks}`);
}
else if(marks >= 90 && marks <= 95){
    console.log(`Grade: A ${marks}`);
}
else if(marks >= 80 && marks <= 90){
    console.log(`Grade: B ${marks}`);
}
else if(marks >= 70 && marks <= 80){
    console.log(`Grade: C ${marks}`);
}

let browser:string = "chrome";

if(browser === "chrome"){
    console.log("You are using Chrome browser");
}
else if(browser === "firefox"){
    console.log("You are using Firefox browser");
}
else if(browser === "edge"){
    console.log("You are using Edge browser");
}
else{
    console.log("Browser not supported");
}

//swtich case
/* 
 switch(expression)
{
   case value 1:statement
   break;

  case value 2:statement
  break;

    default: statement
} 


*/

let day:number = 3;

switch(day)
{
    case 1: console.log("Monday");
    break;

    case 2: console.log("Tuesday");
    break;

    case 3: console.log("Wednesday");
    break;

    default: console.log("Invalid day");
}

let numberx:number = 5, numbery:number = 10;

switch(numberx - numbery)
    {
        case 0: console.log("Both numbers are equal");
        break;

        case 5: console.log("numberx is greater than numbery");
        break;

        case -5: console.log("numbery is greater than numberx");
        break;

        default: console.log("Invalid input");
    }
