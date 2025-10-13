// const score = 400;

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// const otherNumber = 1000000;

// console.log(otherNumber.toPrecision(3));

// console.log(otherNumber.toLocaleString("en-IN"));

//****************************Maths******************************* */

// console.log(Math); 
// console.log(Math.abs(-24.4));

// console.log(Math.round(4.455));

// console.log(Math.ceil(-4.3));
// console.log(Math.floor(-4.3));

// console.log(Math.min(4,5,2,5,6));
// console.log(Math.max(42525,522,232542,232335));

console.log(Math.ceil((Math.random()*6)));

// for getting random value between a range
let min = 10;
let max = 16;
for(let i=0;i<10;i++){
    console.log(Math.floor(Math.random()*(max-min+1)+min));
}

