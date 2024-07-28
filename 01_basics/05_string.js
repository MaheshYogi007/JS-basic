const name = "mahesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

//console.log(name + repoCount);


const gameName = new String('maheshkc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   mahesh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://mahesh.com/mahesh%20yogi"
console.log(url.replace('%20','-'));
console.log(url.includes('mahesh'));