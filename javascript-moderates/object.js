// onject literals

const sym = Symbol('key1')

const user = {
    name: "Abhigyaan",
    age: 19,
    [sym]: "abhigyaan",
    location: "dehradun",
    isOnline: true,
    "Full Name": "Abhigyaan Sharma"
}

// console.log(user.name)
// console.log(user["name"])
// console.log(user[sym])

user.age = 20

// console.log(user)
// Object.freeze(user)
user.isOnline = false

user.greeting = function(){
    console.log(`Hello Mr ${this.name}`);
}
console.log(user.greeting());

