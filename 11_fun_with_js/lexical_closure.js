// lexical scope

function outer(){
    let score = 1233;
    function inner(){
        const secret = '123';
        console.log(score);
    }
    console.log(`outer ${score}`)
}
outer();
console.log(score);
 

// closure

// function init() {
//   let name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName; // => return the lexical scope of outer function
// }
// const displayName = init();
// console.log(displayName());
