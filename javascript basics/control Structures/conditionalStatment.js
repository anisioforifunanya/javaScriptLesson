//control structure is js essential for controlling the flow of execution in your code. The allow you to dictate how your programme should respond
//based on conditions

//1. conditional statment
//conditional statement executes a block of code if the specified condition  is true or false

//a. If statment
let temperature = 30;

if(temperature > 25) {
    console.log('Its a hot day')
} else {
    console.log('Its a cool day')
}

const isAdmin2 =false;
const isSuperUser = false;

if (isAdmin2 || isSuperUser) {
    console.log("You can have access to the app")
} else {
    console.log("you can't be allowed into our app")
}

const isAdmin1 =false;
const isSuperUser1 = true;

if (isAdmin || isSuperUser1) {
    console.log("You can have access to the app")
} else {
    console.log("you can't be allowed into our app")
}

//write if statement that checkes if checkes if someone has paid school fees and  also have good health before the person can have access to the 
//class, else the person should go back home

//Your output should be :WELCOME TO THE CLASS OR GO BACK HOME

const paidSchoolFees = true;
const haveGoodHealth = true;

if (paidSchoolFees && haveGoodHealth) {
    console.log("Welcome to the class")
} else{
    console.log("GO BACK HOME")
}

const paidSchoolFees1 = true;
const haveGoodHealth1 = false;

if (paidSchoolFees1 && haveGoodHealth1) {
    console.log("Welcome to the class")
} else{
    console.log("GO BACK HOME")
}

let age4 = 25;
if(age4> 25) {
    console.log("your age is above 25")
} else {
    console.log("your age is below 25")
}

let age5 = 25;
if(age5> 25) {
    console.log("your age is above 25")
}else if(age <25) {
    console.log("your age is below 25")
}else {
    console.log("your age is 25")
}
 
let fruit = "apple";
if (fruit==="banana") {
    console.log("We have banana in the store")
} else if (fruit==="Orange"){
    console.log("we have orange in our store")
} else if (fruit==="coconut") {
    console.log("coconut is in our store")
}else if(fruit==="apple"){
    console.log("we have apple in our store")
}else {
    console.log("we do not have any fruit in our store")
}
