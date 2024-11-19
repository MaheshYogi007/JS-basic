// arrays

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["thor","hulk"]

console.log(myArr[0]);

for (let i = myArr.length; i > 0; i--) {
    console.log(`index is  ${i} and value ${myArr[i]}`);
  }

  console.log(`\n`);
  for (let i = 0; i < myArr.length; i++) {
    console.log(`index is  ${i} and value ${myArr[i]}`);
  }

// arrays methods

myArr.push(6)
console.log(myArr)
myArr.push(7)
console.log("second push",myArr)
myArr.pop()
console.log("after pop",myArr)
//myArr.unshif,t(9)
myArr.shift()
console.log("after shift",myArr)



console.log("check index of 9",myArr.includes(9));
console.log(myArr.indexOf(3));



const newArr = myArr.join()
console.log(newArr);
console.log(myArr);


// slice , splice

console.log("A ",myArr[2] + myArr[1]);
//console.log("A ",`${myArr[2]} and ${myArr[1]}`);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ",myArr);
console.log(myn2);

// splice manipulate the array