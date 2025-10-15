const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = nums.map((num)=> { return num+=10}) 
const newNums = nums
                .map((num) => num*10)
                .filter((num) => num>50)
                .map((num) => num * 100)   // method chaining

console.log(newNums);