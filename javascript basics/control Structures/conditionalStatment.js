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
    console.log("you can't be allowed into our app")/*The answer is True because in OR True+False is =True 1+0=1 */
}

//write if statement that checkes if checkes if someone has paid school fees and  also have good health before the person can have access to the 
//class, else the person should go back home

//Your output should be :WELCOME TO THE CLASS OR GO BACK HOME

const paidSchoolFees = true;
const haveGoodHealth = true;

if (paidSchoolFees && haveGoodHealth) {
    console.log("Welcome to the class")/*YOUR ANSWER IS WELCOME TO THE CLASS */
} else{
    console.log("GO BACK HOME")
}

const paidSchoolFees1 = true;
const haveGoodHealth1 = false;

if (paidSchoolFees1 && haveGoodHealth1) {
    console.log("Welcome to the class")
} else{
    console.log("GO BACK HOME")/*Your answer is GO BACK HOME */
}

let age4 = 25;
if(age4> 25) {
    console.log("your age is above 25")
} else {
    console.log("your age is below 25")/*The answer is your age is below 25 */
}

let age5 = 25;
if(age5> 25) {
    console.log("your age is above 25")
}else if(age <25) {
    console.log("your age is below 25")
}else {
    console.log("your age is 25")/*The answer is age is 25 because it's inbetween >25 and <25  */
}
 
let fruit = "apple";
if (fruit==="banana") {
    console.log("We have banana in the store")
} else if (fruit==="Orange"){
    console.log("we have orange in our store")
} else if (fruit==="coconut") {
    console.log("coconut is in our store")
}else if(fruit==="apple"){
    console.log("we have apple in our store")/*The answer is "we have apple in our store" */
}else {
    console.log("we do not have any fruit in our store")
}

let fruit1 = "apple";
switch (fruit1) {
    case "banana":
        console.log("it is banana");
        break;
    case "apple":
        console.log("it is apple");/*The answer is "It's is apple" */
        break;
    default:
        console.log("we do not have any fruits")    
}

let age6 = 25;
switch (age6) {
    case age6>25:
        console.log("your age is above 25");
        break;
    case age6< 25:
        console.log("your age is below 25");
        break;
    default:
        console.log("your age is 25");/*Your age is 25 is the answer */
}
const actions = ["start", "stop", "pause",]; // Creating an array of non primitive data.
let userAction = "start"; // creating a single variable by picking or singling out one item in the array of non primitive data created.
let isLoggedIn = true;  // A variable declaring that the data is true ...BOOLEAN
switch(true) {
    case actions.includes(userAction) && isLoggedIn: // Switch true if the userAction and isLoggedIn are both true. 
        console.log("Action permitted:" + userAction )  // console logged action will be to "Start"
        break;
    case actions.includes(userAction) && !isLoggedIn: // switch true if case userAction is true and isLoggedIn is false.
        console.log("please log in to perform this action"); // console logged action will be "please log in to perform this action"
        break;
    default: 
        console.log("No valid case"); // this happens if the subject matter is false or has a combinations of different datatypes

}