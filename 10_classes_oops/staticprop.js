class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createID(){
        return `123`;
    }
}

class Teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const chai = new Teacher("SHiryanhs", "123@123.com");
chai.logMe();
console.log(chai.createID());