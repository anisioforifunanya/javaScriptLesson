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

const name = "MArtins"
console.log(`hello ${name}`)