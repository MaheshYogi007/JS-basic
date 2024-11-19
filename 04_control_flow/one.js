// if

const temprature = 41

if ( temprature === 41 ){
    console.log("less than 50");
    
}else{
    console.log("greter than 50");
    
}console.log("executed");



const score = 200

//if (score < 100){
 //   const power = "fly"
 //   console.log(`Usre power: ${power}`);
//}
//console.log(`Usre power: ${power}`);


const balance = 1000

if( balance < 500 ){
    console.log("less than 500");
    
}else if(balance < 750){
    console.log("less than 750");
}else if(balance <900){

}else{
    console.log("less than 1200");
    
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}





