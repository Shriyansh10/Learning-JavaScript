const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is completed")
        resolve();
    }, 1000)
});

promiseOne.then(() =>{
    console.log('Promise resolved')
});

new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(`promise 2`)
        resolve();
    }, 1000);
    
}).then(() => {
    console.log(`promise resolved`)
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({username: "shriyansh_agarwal", email: "agarwalshriyansh007@gmail.com"})
    }, 1000)
}).then(function (data) {
    console.log(data)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() =>{
        // console.log(`four promise`)
        let error = true;
        if(!error){
            resolve({username: "shriyansh_agarwal", email: "agarwalshriyansh008@gmail.com"})
        }else{
            reject(`Something went wrong`);
        }
    }, 1000)
}).then((user) => {
    console.log(user)
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log(`Finally block executed`))


const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        // console.log(`four promise`)
        let error = true;
        if(!error){
            resolve({username: "JavaScript", email: "agarwalshriyansh009@gmail.com"})
        }else{
            reject(new Error());
        }
    }, 1000)
})

async function handlePromise(){
    try{
        const fn = await promiseFive;
        console.log(fn); 
    }catch(e){
        console.log(e);
    }
}

handlePromise();


// async function getUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         // console.log(response)
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{ return response.json()})
.then((data) => console.log(data))
.catch((e) => console.log(e))