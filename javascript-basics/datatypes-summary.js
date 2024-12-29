// primitive data types
// String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.69

const isLoggedIN= false
const temp = null
let EmailId
const Id = Symbol('786')
const Id2 = Symbol('786')

// console.log(Id == Id2)

const BigNum = 8924822347233242

// reference(non-primitive datatypes)
// array, object, functions

const heros = ["ironman", "captain", "thor"]
let myObj = {
    name: "abhi", 
    age: 19
}

const myFunction = function(){
    // console.log("Hello")
}



//_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+



//Stack(primitive), Heap(non-primitive)

let petname = "tyson"
let petname2 = petname
petname2 = "oscar"

console.log(petname)
console.log(petname2)

let Person1 = {
    name: "abhi",
    age: 19,
    gender: "male"
}
let Person2 = Person1
Person2.name = "golu"
Person2.gender = "female"

console.log(Person1.name, Person1.gender)
console.log(Person2.name, Person2.gender)




