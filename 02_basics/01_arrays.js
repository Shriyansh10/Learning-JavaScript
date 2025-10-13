const arr = [123, 242, 'shriyansh', function mood(){console.log(`mood called!`)}]

// console.log(arr); // => [ 123, 242, 'shriyansh', [Function: mood] ]

// arr.push(true);
// arr.push(123n);
// arr.pop();
console.log(arr);

// double ended queue
// arr.unshift(true);
// arr.shift();
// console.log(arr);

function mood1(){console.log(`mood1 called!`)};
arr.unshift(mood1);
// arr.pop('shriyansh');
// console.log(arr[0]);

// arr[arr.indexOf(fn => fn.name === "mood")]();
// console.log(arr.some(fn => fn.name === "mood"));
arr[arr.findIndex(fn=> fn.name === "mood")]();

// console.log(arr.find(fn => fn === mood1));
// console.log(arr.find(fn => fn.name === "mood"));
// console.log(arr.includes(mood));

const slicedArray = arr.slice(1,3);
console.log(slicedArray);
console.log(arr);

const splicedArray = arr.splice(1,3);
console.log(splicedArray);
console.log(arr);

// slice doesn't modifies the array, it only creates a copy of the array required and splice modifies the original array by taking out the a part of the array

