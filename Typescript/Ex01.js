var num = 123; //syntax of creating values in TS. const when U dont modify the data. First preference of creation of data should be const. 
var uName = "Phaniraj";
var check = true;
var something = "Apple213"; //The Data type will be determined at execution time, so not good. So declare the variables with their type info and then assign the values. 
console.log(something);
var info = "The name is " + uName + " with a number as " + num;
//If U have a string literal and a combination of variables, then U can use the ` to create a string with mix of these variables using placeholders ${varName} and finally end the back-tick`
console.log(info);
