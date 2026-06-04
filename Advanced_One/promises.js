const promiseOne = new Promise(function(resolve, reject){
    // Do an async tasks
    // DB calls, cryptography, ntework call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000) 
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task resolved");
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Shantanu", email:"shantanu@gmail.com"})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"Shantanu", password:"123"})
        } else {
            reject ('ERROR : Something went wrong')
        }
    }, 1000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"Javascript", password:"123"})
        } else {
            reject ('ERROR : JS went wrong')
        }
    }, 1000)
});


async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}


consumePromiseFive()


async function getAllUsers() {
    try {
        const response  = await fetch('https://api.github.com/users/Shantanu-0101')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error)
    }
}

getAllUsers()



fetch('https://api.github.com/users/Shantanu-0101')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))