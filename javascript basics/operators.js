//operators in js are special symbols that perform opertions on one or more operands in our Js

//Arithemetic Operation
//Addition
let sum =5+3;
console.log(sum)

//subtraction
let difference =10-sum;
console.log(difference)

//multiplication
let product= sum * difference;
console.log(product)


//division
let quotient =product/4;
console.log(quotient)

//modulus
let remainder=quotient%3;
console.log(remainder)

//Assignment Operators
//These  operators assign values to variables

//assignment
let x=5;
console.log(x)

//addition assignment
let y =5;
y+=1;
console.log(y)

//subtraction assignement
let z=10;
z-=y;
console.log(z)

//3.Comparision Operators
//These operators compare Values and return a boolean value

//Equal
console.log(5 =="5"); /*TRUE */

//strict Equal
console.log(5=== "5"); /*FALSE */
 
//Not Equal
console.log(5 != "5"); /*5 is not equal to 5 is false because the != and == accepts it as far as they look abit alike */

//EXAMPLE
let u=4;

//Strict Not equal
console.log(5 !== "5") ;/* 5 is not equal to 5 is True because === and !== checks whether they are the same and when it sees they are not the same
it accepts the fact that it's not true*/

//not equall
console.log(5 != "5") /*False */
let n = 3
let e = 3

console.log(n != e) /*False */

//Example
let b = 3
let c = 3

console.log(b != c)/*False */

//strict not equal
console.log(5 !== "5") /*True */
let q = "martins";
let w =10
console.log(q!== w) /*True */

//Greater than
console.log(10>5)  /*True */
let  g=12
let k= 10
let o= g+k
console.log(k>g)/*False */

//less than
console.log(3<2) /*True */
let l=12
let i=10
let m =l-i
console.log(0<m)/*False */

//greater than and equal
console.log(4>= 5)
let h =6
let j=6
let f=h *2
console.log(h>=j)/*True */

let t= j-3

console.log(f>=t)/*True */


// Using the AND (&&) operator, this variable will be true only if both conditions are true.
const isEmployed = true;

const isAdultAndEmployed = (age >= 18) && (isEmployed === true); 
console.log(isAdultAndEmployed); // Logs true if the person is 18 or older and employed; otherwise, false.

// Using the OR (||) operator, this variable will be true if at least one of the conditions is true.
const isStudent = true;
const isTeenOrStudent = (age >= 13 && age <= 19) || (isStudent === true);
console.log(isTeenOrStudent); // Logs true if the person is a teenager or a student; otherwise, false.

// Using the NOT (!) operator, this variable negates the value of the expression.
const isNotMinor = !(age < 18);
console.log(isNotMinor); // Logs true if the person is 18 or older (not a minor); otherwise, false.

// Combining multiple operators, this variable will be true if the person is either a teenager or both an adult and employed.
const isTeenOrAdultEmployee = (age >= 13 && age <= 19) || ((age >= 18) && (isEmployed === true));
console.log(isTeenOrAdultEmployee); // Logs true if the person is a teenager, or if they’re an adult and employed.



//using logical operators declare four variables that logs boolean value on console and using comments explain the meaning and how it functions
//&& OPerator
const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive); /*true */

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry;
console.log(canEnter); /*false */



//OR || Operator
const knowsHTML = false;
const knowsCSS = true;
const carDesignWebsite = knowsHTML || knowsCSS;
console.log(carDesignWebsite);

const isAdmin = false;
const isSUperUser= false;
const canAccessPage = isAdmin || isSUperUser;
console.log(canAccessPage);


