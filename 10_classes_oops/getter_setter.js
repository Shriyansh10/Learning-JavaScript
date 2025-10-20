// class User{
//     // constructor(email, password){
//     //     this.email = email;
//     //     this.password = password;
//     // }

//     get password(){
//         return this._password.toUpperCase();
//     }

//     set password(value){
//         this._password = value.toUpperCase();
//     }

//     get email(){
//         return this._email.toUpperCase();
//     }

//     set email(value){
//         this._email = value.toUpperCase();
//     }

// }

// // const shriyansh = new User("Shriyansh@google.com", "abvc");
// const shriyansh = new User();
// shriyansh.email = `A@b.c`
// shriyansh.password = `123`
// console.log(shriyansh.email);
// console.log(shriyansh.password);

// function User(email){
//     // this._email = email;

//     Object.defineProperty(this, "email", {
//         get: function() {return (`email is ${this._email}`)},
//         set: function(value) {this._email= value.toUpperCase()}
//     })
// }

// // const user = new User(`Shriyansh@google.com`);
// // console.log(user.set);
// const user = new User();
// user.email = `hello@gmail.com`
// console.log(user.email)


const obj = {
    _email: `S@example.com`,

    set email(value) {
        this._email = value
    },

    get email() {
        return (this._email.toUpperCase());
    }
}

obj.email = `new@example.com`
console.log(obj.email);