// singleton
// Object.create

// object literals

let sym1 = Symbol("symbol");
// console.log(sym1)
const JsUser = {
    name: "Shriyansh",
    age: 27,
    [sym1]: "my-key1",
    location: "Agra",
    email: "agarwalshriyansh007@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[sym1]);
// console.log(typeof sym1);

JsUser.email = "agarwalshriyansh008@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "agarwalshriyansh009@gmail.com"


JsUser.greeting = function(){
    return "Hello, How are you!";
}
JsUser.greetingTwo = function(){
    return `Hello ${this.name}, How are you!`;
}
// console.log(JsUser);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());