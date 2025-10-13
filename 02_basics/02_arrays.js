const dbz_characters = ['goku', 'vegeta', "krillin", "piccolo"];
const naruto_characters = ["naruto", "sasuke", "kakashi", "madara"];

// const characters = dbz_characters.concat(naruto_characters);
const characters = [...dbz_characters, ...naruto_characters];
// console.log(characters);

// flattening of array
const arr= [1,2,3,[4,5,[8,0,38],6],7];
const arr2 = arr.flat(Infinity);
console.log(...arr2);

// 

console.log(Array.isArray("Shriyansh"));
console.log(Array.from("Shriyansh"));
// console.log(Array.from({name: "Shriyansh"})); // Interesting case when we want to make array from keys

let score1 = 100;
let score2 = 200;
let score3 = 300;

const array_of = Array.of(score1, score2, score3);
console.log(array_of);