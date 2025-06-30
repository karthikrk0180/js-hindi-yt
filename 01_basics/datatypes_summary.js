// #primitive 

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Shakthi Man", "Nagaraj", "dogs"]
let myObj = {
    name: "Karthik",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World")
}

console.log(typeof(myFunction))