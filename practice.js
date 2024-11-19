let score = "33abc"

console.log(typeof score);


let valueInNumber = Number(score)
console.log(valueInNumber);


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let value = 3 
let negValue = -value

console.log(negValue);


let myYoutubeName = "abcdotcom"
let anothername = myYoutubeName
anothername = "xyz"

console.log(anothername);
console.log(myYoutubeName);



let userOne = {
    email: "abc@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hjk@google.com"

console.log(userOne.email);
console.log(userTwo.email);



const name = "mahesh"
const repoCount = 50

console.log(`my name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String('maheshww')

console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('w'));

const myArr = [1, 2, 3, 4, 5]
console.log(myArr [3]);

myArr.push(9)
myArr.pop()
console.log(myArr.includes(11));
console.log(myArr.indexOf(4));


const newArray = myArr.join()

console.log(newArray);

console.log(myArr);


const kk = ["a","b","c"]
const vv = ["j","k","l"]

const ww = [...kk, ...vv]
console.log(ww);


const anotherArray = [1, 2, 3, 4, 5, [2, 3], 6, [7, 8], 9, 10]

const realArray = anotherArray.flat(Infinity)
console.log(realArray);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


const jsUser = {
    name: "mahesh",
    age: "21",
    location: "ahemadabad",
    email: "mahesh@google.com",
    lastLoggedIn: "monday",
}

console.log(name);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["lastLoggedIn"]);


jsUser.email = "mahesh@yahoo.com"
console.log(jsUser);




const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mahesh",
            lastname: "Yogi",
        }
    }
}

console.log(regularUser.fullname.userfullname);

function calculateCartPrice (val1, val2, ...num1) {
        return num1
}

console.log(calculateCartPrice(200, 500, 800, 980, 1000));


const user = {
    name:"mahesh",
    price: 200,
}


function handleObject (anyobject) {
        console.log(anyobject.name);
        
}

handleObject(user)



function one(){
    const username = "sam"
    function two() {
        const website = "hotel booking"
        console.log(username);   
        console.log(website);  
    }   
    two()
}
one()

const user1 = {
    username: "mahesh",
    price: 999,
    welocmeMessage: function (){
        console.log(`${this.username},welcome to website `);
        
    }
}
user1.welocmeMessage()


const chai = () => {   
    let name = "samk"
    console.log(name);
    
}
chai()



const temp = 41

if (temp < 50) {
    console.log("less than 50");
    
}else{
    console.log("greter than 50");
    
}
console.log("execute");


const bal = 1000
if (bal < 500) {
    console.log("less 500");
    
}
else if (bal < 750) {
    console.log("bal less 750");
    
} else {
    console.log("bal less 1500");
    
}


const month = 3 

switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("april");
        
        break;
    case 5:
        console.log("may");
        
        break;

    default:
        break;
}

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(i);
    
}

const map = new Map()
map.set('IN', "INDIA")
map.set('USA',"AMERICA")

console.log(map);
