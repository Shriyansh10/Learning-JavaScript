function add(x){
    return function(y){
        return x*y;
    }
}

const multiplyby2 = new add(2)(3);
console.log(multiplyby2);