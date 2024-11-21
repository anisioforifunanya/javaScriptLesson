//Functions: It's a block of code(i.e it's combination of different code) that performs an actions and is re-useable

//Types of Functions
/*i.)Function Declarations
 ii.)Function Expression
 iii.) Arrow function
*/

//1.) FUnction Declaration for Addition.

function add(a,b) {
    return(a+b)
    //return is what the program should process
}

const sumy = add(2,4);
console.log(sumy)

//2.) FUnction Declaration for Multiplication.

function multi(a,b) {
    return(a*b)
    //return is what the program should process
}

const multiply = multi(2,4);
console.log(multiply)


function greet (name) {
    console.log(`Hello ${name} Welcome to our App`)
}
greet ("ALEX")
greet ("Seyi")
greet ("Tolu")
greet ("ify")
greet ("john")
greet ("boy")
greet ("girl")
greet ("ALEX")
greet ("uyt")
greet ("iji")

const name = "MArtins"
console.log(`hello ${name}`)


function named(userx, coursex)
{
    console.log(`I am ${userx} and i am doing ${coursex} at new horizon`)
}
named ("billy", "Programming")

//function Expression
const add2 = function (a, b) {
    return a + b
}
const sum2 =add(1, 2)
console.log(sum2)


const  myName = function(NameOfUser) {
return (`Hello, Mr ${NameOfUser} Welcome to New Horizon`)
}

const greetings = myName("OJKO");
console.log(greetings)




const greeti = function(name) {
    return `Hello, ${name}! Welcome!`;
};

const greeting = greeti("Billy");
console.log(greeting);

//EXAMPLE
const prince1 = function(name, course, school) {
    return(`Hello dear, ${name}, i am studing ${course} in ${school}`);
}
const prince2= prince1("vyui", "yuet", "ytey")
console.log(prince2);

//EXAMPLE
const logIn1 = function(namez) { 
    console.log(`${namez} is logged in`)
}
logIn1("seyi");

//OR
const logIn = namez => console.log(`${namez} is logged in`)
logIn("seyi");
