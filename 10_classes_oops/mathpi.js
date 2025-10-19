const obj = {
    name: "shriyansh",
    age: 27
}

Object.defineProperty(obj, "c", {
    value:248,
    writable:false,
    enumerable:false
})

const descriptor = Object.getOwnPropertyDescriptors(obj, "age");
console.log(descriptor);

obj.c = "28"
console.log(obj.c)

for(let key in obj){
    console.log(key, obj[key]);
}