//Creating a function in TS:
//data type, variable, const, function, function with args, function with return types, Array, class, object
//TS by itself does not have any additional data types other than what is supported in JS. 
//Data Types: number(integers and floats), string, boolean, undefined, object, null. 
function addFunc(num1 : number, num2 : number) : number{
   return num1 + num2;
}

//Math is a object of JS that is used to perform Mathematical operations like square, sqrt, random, round, sin, cos, tan etc.....
function squareRoot(num1 : number) : number{
    return Math.sqrt(num1);
}

function greeting(){
    console.log("Hello world!!!");
}
const res = addFunc(123, 234);
const sqrt = squareRoot(16);

greeting();
console.log(`The Added value is ${res}`);
console.log(`The Square Root of 16 is ${sqrt}`);