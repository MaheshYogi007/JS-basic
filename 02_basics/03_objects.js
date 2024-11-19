// singleton

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Mahesh",
    "full name": "Mahesh Yogi",
    [mySym]: "key1",
    age: 21,
    location: "Ahemadabad",
    email: "mahesh124@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "Mahesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "Mahesh@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

