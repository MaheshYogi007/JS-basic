let a = 300


if(true) {
    let a = 10
    const b = 20

    console.log("INNER: ", a);
    
}


console.log(a);


function one(){
    const username = "Mahesh"

       function two(){
        const website = "youtube"
        console.log(username);
        
       }
      // console.log(website);
       two()

    }
    one()


    if(true) {
        const username = "Mahesh"
         if(username === "Mahesh"){
            const website = " youtube"
            console.log(username + website);
         }
         //console.log(website);
         
    }
   // console.log(username);



  // ++++++++++++++++++++++++ interesting +++++++++++++++++++++


    const addone (num){
        return num + 1
    }
    
addone(5)

const addtwo = function(num){
        return num + 2
}
addtwo(5)
