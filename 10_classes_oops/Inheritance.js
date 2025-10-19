class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    printMe(){
        console.log(`Username is ${this.username}`);
    }
}

const chai = new Teacher("Shriyansh", "123@gmail.com", "123");
chai.logMe();

const tea = new User("Agarwal");
tea.logMe();

console.log(chai instanceof User)