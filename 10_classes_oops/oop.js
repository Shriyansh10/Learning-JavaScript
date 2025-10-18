const userDetails= {
    username: "Shriyansh",
    isLoggedIn: true,
    loginCount: 20,
    display: function(){
        console.log(userDetails.username)
    }
}

// console.log(userDetails.username);
// console.log(userDetails.display());

function user(username, isLoggedIn, loginCount){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    this.display = function(){
        console.log(this.username);
    }

}

const userOne = new user("Shriyansh", false, 23);
const userTwo = new user("Agarwal", true, 3);

console.log(userOne.display())
console.log(userTwo.display())