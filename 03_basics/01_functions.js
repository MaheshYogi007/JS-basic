function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("H");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log(`The entered value is ${abc(Number(50))}`)
}

function abc(secondParms){
    if((typeof secondParms == "number" )){
        let a = 10
        return a + Number(secondParms)
    }else{
        return String("not a valied Number in else")
    }
   
}
sayMyName()


//function addTwoNumbers(numer1, number2){
//   console.log(numer1 + number2);

//}

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
   // return result
   return number1 + number2
}

const result = addTwoNumbers(3, 5)
//console.log("Result:", result);

function loginUserMessage(username){
    if(username == null){
        console.log("Please enter a username");
        return
    }


return `${username} just logged in`
}
console.log(loginUserMessage("Mahesh Yogi"));
//console.log(loginUserMessage("mahesh"));




function calculateCartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 500, 800, 2000));


const user = {
    username: "mahesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500]));