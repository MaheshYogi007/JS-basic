//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Max"
tinderUser.isLoggedIn = false



//console.log(tinderUser);


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


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}


//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);  


const users = [
    {
       // id : 1
       // email : "xyz@gmail.com"
    },
    {
    },
    {
    },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));


const course = {
    coursename : "Js in Hindi",
    price : "999",
    courseInstuctor: "Hitesh"
}

//const{courseInstuctor} = course

const{courseInstuctor: instuctor} = course
console.log(instuctor);