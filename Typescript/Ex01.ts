const num : number = 123;//syntax of creating values in TS. const when U dont modify the data. First preference of creation of data should be const. 

let uName : string ="Phaniraj";

const check : boolean = true

const something = "Apple213";//The Data type will be determined at execution time, so not good. So declare the variables with their type info and then assign the values. 

console.log(something);

const info = `The name is ${uName} with a number as ${num}`;
//If U have a string literal and a combination of variables, then U can use the ` to create a string with mix of these variables using placeholders ${varName} and finally end the back-tick`

console.log(info);

/*
There are 3 ways to declare values in TS: const, var, let. 
var is the older version and is used for variables where U dont know the data type initially. let and const are the most prefered way of declaring values in TS. 
Variables once declared cannot be declared. 
If U declare a variable without any  blocks { } they all will achieve global scope. 

*/