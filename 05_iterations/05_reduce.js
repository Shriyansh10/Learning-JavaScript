// const myTotal = nums.reduce( function (acc, currVal) {
//     console.log(`acc = ${acc}, currval = ${currVal}`)
//     return acc+currVal; 
// },0)

// const myTotal = nums.reduce((acc, currVal) => console.log(`acc = ${acc}, currval = ${currVal}`) acc+currVal ,0) // cant write multiple statements in implicit return statments
const myTotal = nums.reduce((acc, currVal) => acc+currVal ,0)

// console.log(myTotal);

const shoppingCart = [
    {
        coursename: "Js course",
        price: 1
    },
    {
        coursename: "Java course",
        price: 2
    },
    {
        coursename: "py course",
        price: 3
    },
    {
        coursename: "data science course",
        price: 4
    },
]

const finalPayment = shoppingCart.reduce((acc, item) => { return acc+item.price} , 0)
console.log(finalPayment);