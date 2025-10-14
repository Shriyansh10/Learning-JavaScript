function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("R")
    console.log("I");
    console.log("Y")
    console.log("A");
    console.log("N")
    console.log("S");
    console.log("H");
}

// sayMyName();

function add(number1, number2){
    return number1+number2;
}

const result = (add(3,5));
// console.log(result);

// function loginUserMessage(userName){
//     if(userName)
//         return `${userName} just logged in`;
//     else
//         throw new Error("Enter a username");
// }

// try{
//     console.log(loginUserMessage());
// }catch(e){
//     console.log(e.message);
// }

function addCartValue(itemPrices1, itemPrices2, ...itemPrices){// ... is rest operator when passed in parameters and is spread operator when used with arrays and objects
    return itemPrices;
}

console.log(addCartValue(100,3999,253,123,3245));

function display(user){
    console.log(user.name)
}

display({
    name: "Shriyansh",
    age: 27
})


const myNewArray = [200,400,100,600];
function returnSecondValue(myNewArray){
    return myNewArray[1];
}
console.log(returnSecondValue(myNewArray));