class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this.email.toUppercase()
    }

    get email(value){
        this._email = value
    }

    get password(){
        return this.password.toUppercase()
    }

    set password(value){
        this._password = value.toUppercase()
    }
}

const Shantanu = new User("shantanu@gmail.com", "123")
console.log(Shantanu.password);