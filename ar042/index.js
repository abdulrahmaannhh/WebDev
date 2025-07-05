console.log("Hello, I am conditional tutorial");

let age = 1;
// let grace = 2;

// age += grace; // Increment age by grace
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);
if (age ==18) {
    console.log("You are an adult.");
} 

else if (age == 0) {
    console.log("Are you kidding?");
}
else if (age == 1) {
    console.log("Are you again kidding?");
}

else {
    console.log("You are a minor.");
} 
a=6;
b=8;
let c= a>b ?(a-b):(b-a);

/*
translates to:
if (a > b) {
 let c = a - b;
}
else {
 let c = b - a;

*/