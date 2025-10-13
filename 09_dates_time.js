let myDate = new Date();
// console.log(typeof myDate) // => object

// console.log(myDate); // =>2025-10-13T12:44:39.447Z

// console.log(myDate.toDateString()); // => Mon Oct 13 2025
// console.log(myDate.toISOString()); // => 2025-10-13T14:39:26.096Z
// console.log(myDate.toJSON()); // => 2025-10-13T14:39:26.096Z
// console.log(myDate.toUTCString()); // => Mon, 13 Oct 2025 12:45:35 GMT
// console.log(myDate.toLocaleDateString()); // => 13/10/2025
// console.log(myDate.toLocaleString()); // => 13/10/2025, 8:09:26 pm
// console.log(myDate.toLocaleTimeString()); // => 8:09:26 pm
// console.log(myDate.toString()); // => Mon Oct 13 2025 20:09:26 GMT+0530 (India Standard Time)
// console.log(myDate.getTimezoneOffset()); // => -330

console.log(myDate.getFullYear());

const myCreatedDate = new Date(2025, 8, 21);
// console.log(myCreatedDate);

const timeStamp = Date.now();
console.log(timeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor((timeStamp - myCreatedDate.getTime())/60000));

const month = myDate.toLocaleString('default', 
    {
        year: 'numeric'
    }
)

console.log(month); // => 2025