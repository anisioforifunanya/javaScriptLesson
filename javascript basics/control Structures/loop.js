//Loops are used to exectute a block of code repeatedly until specfic conditions are met

for(let i=0; i <5; i++) {
    console.log("Hello From loop");
};
for(let i=2; i <5; i++) {
    console.log("Hello From loop " + i );
};

const colors=["red", "green", "blue", "yellow"]
for (let i=0; i<colors.length; i++) {
    console.log("color:", colors[i]);
}

const fruits=["mango", "orange", "carrot", "pawpaw", "pea"]
for (let i=0; i<fruits.length; i++) {
    console.log("List of Fruits:", fruits[i]);
}
const students = [
    {name:"john", grade:80},
    {name:"martins", grade:78},
    {name:"Seyi", grade:4}
]
for(let i=0; i < students.length; i++) {
    console.log("Student:", students[i].name, "Grade:", students[i].grade);
}


const aboutMe = [
    {name:"alex", school:"New Horizon", course:"Full-Stack Web Development"}
]
for(let i=0; i<aboutMe.length;i++) {
    console.log("My Name is:", aboutMe[i].name, "and i school in", aboutMe[i].school, "i'm currently studying", aboutMe[i].course);
}

//while loop
let prince = 0;
while (prince < 5) {
    console.log("count is:" + prince);
    prince++
}

const colorz=["red", "green", "blue", "yellow"]
let bt=0;
while ( bt<colorz.length) {
    console.log("The count is:" +colorz[bt]);
    bt++
}