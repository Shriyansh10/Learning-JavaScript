// falsy values - false, 0, -0, Bigint 0n, "", null, undefined, NaN

(function if_else(){
    if(Number("0")){
        console.log(true);
    }else{
        console.log(false);
    }
})();

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// false == 0, 0=="", ""== false   // all true

// nullish coalescing operator => ??

const val1 = null ?? undefined ?? 10 ?? 20;
console.log(val1);

// ternary operator 

const val2 = (2==2)?true:false;
console.log(val2);