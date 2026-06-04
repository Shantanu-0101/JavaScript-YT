const user = {
    username: 'Shantanu',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from databse');
        // console.log(`User: ", ${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome: ${this.username}`);
        
    }

    return this
}

const UserOne = new User("Shantanu", 12 , true)
const UserTwo = new User("Panchal", 11, false)

console.log(UserOne.greetings());
console.log(UserOne.constructor);
console.log(UserTwo);

