const score = 400

//Explicitly saying its a number type using constructors 
const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString());
// console.log(typeof(balance));
// console.log(balance.toFixed(2));


const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'))

// console.log(Math.abs(-4))
// console.log(Math.round(456.6))
// console.log(Math.ceil(456.6))
// console.log(Math.floor(456.6))
// console.log(Math.min(4, 56, 6))

// console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)