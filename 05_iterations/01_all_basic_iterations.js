// for(let i=0;i<10;i++){
//     console.log(i);
// }

// Important 
// Array - of,in,each
// String - of
// Map - of
// Object - in

// for of

["", "", ""]
[{},{},{}]

const arr = [1,2,3,4,5];
for (const iterator of arr) {
    // console.log(iterator);
}

const greeting = "Shriyansh"
for(const greet of greeting){
    // console.log(greet);
}

const map = new Map()
map.set('IN', 'India');
map.set('US', 'United States');
map.set('CN', 'Canada');

for (const key of map) {
    // console.log(key);
}

const myobj = {
    name: "Shriyansh",
    age: 27,
    email: "agarwalshriyansh007@gmail.com"
}

for (const key in myobj) {
    // console.log(key);
}

const obj1 = {
    js: "javascript",
    rb: "ruby",
    "py": "python",
    cpp: "c++"
};

for (const key in obj1) {
    // console.log(`${key} is shortcut for ${obj1[key]}`);
}

for (const key in greeting) {
    // console.log(greeting.charAt(key));
}

