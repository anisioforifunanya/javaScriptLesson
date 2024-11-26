const fruitz = ["Apple", "Orange", "Banana", "Coconut"];
console.log(fruitz);

fruitz.push("cherry");

console.log(fruitz);

fruitz.unshift("Mango");
console.log(fruitz);

fruitz.pop();
console.log(fruitz);

fruitz.shift();
console.log(fruitz);

fruitz.splice(1, 1)
console.log(fruitz);

fruitz[1]="blueberry";
console.log(fruitz);

fruitz.splice (1, 0, "Pea", "water Melon");
console.log(fruitz);


for (let i = 0; i < fruitz.length; i++) {
    console.log("The list of the fruits are:", fruitz[i]);
}
fruitz.map(listOfFruit => console.log(listOfFruit))

let upperCaseFruits = fruitz.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

let longFruitsz = fruitz.filter(fruit => fruit.length > 7 );
console.log(longFruitz);

let longFruitsy= fruitz.filter (function returnFruits(fruit){
    return fruit.length > 7;
})
console.log(longFruitsy);

