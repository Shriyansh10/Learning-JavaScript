// const name = "Shriyansh" 
// const repoCount = 50;

// console.log(name + " "+repoCount+" Value");  // => outdated way
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const name = new String("Shriyansh");

// console.log(name[0]); // => S
// console.log(name.length); // => 9
// console.log(name.__proto__);  // => {}

// console.log(name.substring(0,2)); // => Sh
// console.log(name.toUpperCase()); // => SHRIYANSH

// console.log(name.charAt(8)); // => h

// console.log(name.indexOf('h')); // => 1
// console.log(name.indexOf('h',2)); // => 8

// console.log(name.slice(2, -2)); // => riyan
// console.log(name.slice(-8, 4)); // => hri
// in slice negatives start from the end in second case -8 from last is h and in first case -2 for end value omits last 2 characters 
// in slice as well as substring start is inclusive and end is exclusive

const newName = new String("  Shriyansh  ");
console.log(newName.trim());

const url = new String("https://shriyansh.com/shriyansh%20agarwal");

console.log(url.replace("%20", "-"));

const arr = url.split("/");
console.log(arr);
