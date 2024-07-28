// Primitive 
// String, Number, Boolean, null, undefined, symbol, BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Non Primitive(Refrence)

// Array, Object, Function


const heros = ["shaktiman","spiderman","thor"];

let myObj = {
    name: "mahesh",
    age: 21,
}

const myFunction = Function()
{
    console.log("hello world");
}

console.log(typeof heros);




// ++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (non Primitive)       (Memory)



let myYoutubename = "Mahesh144.com"


let anothername = myYoutubename
anothername = "MaheshYogi8692"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
        email: "use@google.com",
        upi: "user@ybl"
}

let bank = {}
let userTwo = userOne

userTwo.email ="mahesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
console.log(`Hello my name is ${mahesh} and my repoCount is ${50}`);
