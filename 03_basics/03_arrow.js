const user = {
    username: "Shriyansh",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to this website`);
        // console.log(`this is ${this}`);  // dont use this in string interpolation as the object will also stringify and we wont get an object
        // console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "Agarwal";
// user.welcomeMessage();
// console.log(this);

const user2 = {
    username : "Kushagra",
    price : 999,
    welcomeMessage: user.welcomeMessage
}
console.log(user2.welcomeMessage);

// function chai(){
//     const name = "shriyansh"
//     console.log(this);  // => undefined cos this work on objects and not normal functions for this to work the function has to be invoked with reference to an object
// }
// chai();

// const chai = function (){
//     const name = "shriyansh";
//     console.log(this.name);
// }
// const chai = () => {
//     const name = "shriyansh";
//     // console.log(this.name);  // in arrow functions this also works like normal function
// }

// chai();

// const addTwoNumber = (num1, num2) => { return num1+num2 } // explicit return
// const addTwoNumber = (num1, num2) => num1 + num2  // implicit return

// const addTwoNumber = (num1, num2) => (num1 + num2)  // () => no return statement, {} => return necessary

const addTwoNumber = (num1, num2) => ({name: "shriyansh"})  // to return object we have to put {} inside ()
console.log(addTwoNumber(5,7));