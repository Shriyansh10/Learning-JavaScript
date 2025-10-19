function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

// every thing is object in js

// function ->
// Array   ->      object -> null
// String  ->          


console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){

    this.username = username;
    this.score = score;

    this.increment2 = function(){
        this.score++;
    }

    this.printme2 = function(){
        console.log(`printme2`, this.score);
    }
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printme = function(){
    console.log(this.score);
}

const userOne = new createUser("Shriyash", 299);
const userTwo = new createUser("Agarwal", 399);

// userOne.increment();
// userOne.printme();
// console.log(userOne.score);

userOne.increment2();
userOne.printme2();