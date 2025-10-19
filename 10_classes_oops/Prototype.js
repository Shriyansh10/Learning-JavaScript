let myName = "hitesh    ";

String.prototype.trueLength = function(){
    console.log(this)
    console.log(this.trim().length)
}

console.log(myName.trueLength());

let newHeroes = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getPower: function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.shriyansh = function(){
    console.log(`shriyansh is inserted`);
}

heroPower.shriyansh();

// inheritance

const user = {
    name: "Shriyansh",
    email: "Shriyansh@google.com"
}

const teacher = {
    makeVideo: false,
    __proto__: user
}

teacher.__proto__ = user;

console.log(teacher.name);

`        jfsidana skfskfj             `.trueLength();