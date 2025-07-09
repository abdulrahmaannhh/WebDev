console.log("I am a tutorial for Loops in JavaScript");
let a =1;
console.log(a)
console.log(a+1)
console.log(a+2)

for (let i = 0; i < 100; i++) {
    console.log(a+i);
}

let obj ={
    name: "Abddul Rahman",
    role: "Web Developer",
    company: "Tech Solutions", 
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        
    }
}