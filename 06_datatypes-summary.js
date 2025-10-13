// Primitive
// 
// 7 types - String, Boolean, Number null undefined symbol bigint

// js -> dynamically typed language

// let id = Symbol("123");
// let id2 = Symbol("123");
// console.log(id == id2);  // => false
// console.log(id === id2); // => false

const bigno = 12345n;  // typeof => object


// Reference 

// 3 types - arrays functions objects 

// Arrays
const arr = ['Nagraj', 'Dograj', "Shaktiman"];

for(let i=0;i<arr.length;i++){
    console.table(arr[i]);
}

const obj = {
    name: "Shriyansh",
    age: 27
}

const fun = function(){
    console.log("Hello World");
}

// console.table([typeof(bigno),typeof(arr),typeof(obj),typeof(fun)]);


// ***************************************************************************************************************************************************

// Stack (Primitive), Heap (Non - Primitive)

let name1 = "Shriyansh";

let anotherName = name1;
anotherName = "Mayank";

console.log(name1); // => "Shriyansh"
console.log(anotherName); // => "Mayank"
// change in anotherName variable doesn't affect name1 as the copy is passed to the new variable

const details = {
    name: "Priyanshu",
    age: 25
}

const anotherDetails = details; 

console.log(details);  //{ name: 'Priyanshu', age: 25 }

anotherDetails.name = "Nikhileshwar";  
anotherDetails.age = 26;

console.log(details);  //{ name: 'Nikhileshwar', age: 26 }
console.log(anotherDetails);  //{ name: 'Nikhileshwar', age: 26 }
// changes are reflected in original variable hence details are changed

