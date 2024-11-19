//const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach(  (item) => {
 //   console.log(item);
 //   return item
//})

//console.log(values);


const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

// when we use scope {} in arrow function write return before condition 
const nemNumbs = myNums.filter( (num)=> num > 4)

const newNums = []
 myNums.forEach( (num) => {
        if (num > 4) {
            newNums.push(num)
        }
 })

console.log(nemNumbs);

