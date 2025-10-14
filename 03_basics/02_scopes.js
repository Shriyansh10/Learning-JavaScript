var c = 100;
let a =300

if(true){
    a = 10;
    const b =20;
    // console.log(a);
}
// console.log(a); 

function one(){
    const username = "Shriyansh";
    function two(){
        const channel = "Lon3Walker Gaming";
        console.log(username);
    }
    // console.log(channel); // cant run coz the channel variable scope in over it was in function two and this is closure that variable inside a child function cant be accesses by global scope
    two();
}
one(); 


// *************************************************** Interesting ************************************************
addone(5);

function addone(num){
    return num+1;
}

// addtwo(4);  // this will give error as it is using a concept of hoisting 

const addtwo = function(num){
    return num+2;
}
