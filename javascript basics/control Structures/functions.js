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
