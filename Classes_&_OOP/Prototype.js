// let myName = "Shantanu"

// console.log(myName.trim().length);

// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.shantanu = function(){
    console.log(`Shantanu is present in all objects`);
}


Array.prototype.heyShantanu = function(){
    console.log(`Shantanu says Hello`);
    
}

heroPower.shantanu()
// myHeros.shantanu()
// heroPower.heyShantanu()
myHeros.heyShantanu()

// Inheritance

const User = {
    name: "Chai",
    email: "Chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// MOdern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`This length is: ${this.trim().length}`);
        
}

anotherUserName.truelength()