const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
    
}


const programming = ["js", "rb", "cpp", "py", "java"]


for (const key in programming) {
    console.log(programming[key]);
    
}

