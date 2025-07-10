// console.log("Hey there! This is a test file for the ar044 module.");
// console.log("Hey are you sure this is the right file?");
// console.log("Hey AR your code is not working properly, please fix it.");
// console.log("Hey AR, I think you need to check the logic in your code.");

function nice(name) {
    console.log("Hey " + name + " This is a test file for the ar044 module.")
    console.log("Hey " + name + " are you sure this is the right file?")
    console.log("Hey " + name + " your code is not working properly, please fix it.")
    console.log("Hey " + name + " I think you need to check the logic in your code.")
}

nice("AR");

nice("Abdul Rahman");

function sum(a, b, c = 3) {
    // console.log(a+b);
    console.log(a,b,c);
    return a + b + c;
}

result1 = sum(5,5);
result2 = sum(51, 10);
result3 = sum(5, 160,5);
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x)=> {
    console.log("I am an arrow function", x);
}

func1(34)
func1(66)
func1(84)