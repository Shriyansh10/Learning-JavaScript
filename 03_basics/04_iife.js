// Immediately invoked function expression

(function chai(){         // named iife
    console.log("DB connected");
})();  // this is done becoz we dont want some functions to get polluted from global scope so we want to execute some functions right away

const name = "shriyansh";
((name) => console.log("DB connected 2", name))(name);             // unnamed iife
