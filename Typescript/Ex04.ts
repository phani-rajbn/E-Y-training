//class is a definition on how ur UDT should hold, behave thru' its objects. 
class employee{
    name : string = "";
    address: string ="";
    salary : number =0;

   //function used to make the object usable by providing values to create the object. 
    constructor(name: string, address: string, salary : number) {
        this.name = name;
        this.address = address;
        this.salary = salary
    }

    display() : string{
        return `${this.name} from ${this.address}`
    }
}//Typescript checks syntax errors immediately without waiting for the code to be compiled. This feature is called auto-syntax check..

const empObj = new employee("Phaniraj", "Bangalore", 65000);
const data = empObj.display();
console.log(data);

//inheritance in Typescript. Inheritance is a feature of OOP where a predefined class could be extended to a new class where the new class gets all the functionalities and members of the extended class. The class which is being extended is called base class and the class which achieves the extension is called derived class, sub class. This feature is based on a principle of OOP called Open-Closed Principle. A class is closed for modification but is open for extension. 
 
//To DO: Go thru' articles on SOLID Principles of OOP...
class RegularEmployee extends employee{
   age: number;
   email: string;

    constructor(name: string, address: string, salary: number, age :number, email: string) {
      super(name, address, salary);
      this.age = age;
      this.email = email; 
   }

    display() {
        let detail = super.display();
        detail += ` The Employee is aged ${this.age} and can be officially contacted on ${this.email}`;
        return detail; 
    }
}
const regEmp : RegularEmployee = new RegularEmployee("Vinod", "Mysore", 56000, 44, "vinod@vinod.co");

console.log(regEmp.display());

//student: id, name, age. display:
