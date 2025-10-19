const obj = {
    name: "shriyansh",

    printMe: function(){
        console.log(`the name is ${this.name}`)
    }
}

const obj2 = {
    name: "Agarwal"
}

// const printMe = obj.printMe;
// console.log(printMe());        => this function doesn't have the context of this

const printMe = obj.printMe.bind(obj2);
console.log(printMe())