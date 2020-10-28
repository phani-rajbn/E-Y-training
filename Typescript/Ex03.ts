//Arrays in Typescript
const fruits : string[] = [
    "Apples", "Mangoes", "Bananas"
];

//Arrays can be modified 
fruits.push("PineApples");//adds a new element into the array. it adds the item to the bottom of the array...

fruits.unshift("Gauva");//add the element to the begining of the array

for (const fruit of fruits) {
    console.log(fruit);
}
fruits.splice(2, 1);//splice is used to remove/replace/insert elements into the array..
for (const fruit of fruits) {
        console.log(fruit);
}
//To do: Show an example on how splice could be used for deleting/modifying/inserting data into the array. 
/////////////////////////////////////////////////////////////
const integers : Array<number> = [345,45,35,67,78,74,85,89];
const numbers = integers.sort();//sorting the data in ascending order...

const sortednumbers = integers.sort((a, b)=>{
    if(a < b)
      return -1;
    else if(a > b)
      return 1;
    else 
      return 0;
})

for (const num of sortednumbers) {
    console.log(num);
}
//1, -1, 0