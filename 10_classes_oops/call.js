function setUserName(username){
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    // setUserName(username) => creates a problem that this function's ec gets destroyed after executing so current function doesn't get the values
    setUserName.call(this, username) // => this passes the execution context of createUser to setUserName
    this.email = email;
    this.password = password;
}

const user = new createUser("Shriyansh", "Shriyansh@gmail.com", "123");
console.log(user.username)

// 🧩 Summary Table
// Method	Runs Immediately?	How You Pass Args	What It Returns	Typical Use
// call()	✅ Yes	Separate values	Function’s result	Normal function call
// apply()	✅ Yes	As an array	Function’s result	When args are already in an array
// bind()	❌ No	Separate values	New function	When you want to call later (e.g., event listener)