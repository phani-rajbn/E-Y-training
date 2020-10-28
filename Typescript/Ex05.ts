//if a Class has one or more functions where the implementation is not possible because of non-clarity of the function, but U R sure that U need that function. In this case, U make the function as abstract and the class as abstract. abstract functions cannot be implemented. The derived class which will have the specific clarity will implement it. 
//As abstract methods are not implemented, the class is incomplete. Incomplete classes cannot be instantiated. 

abstract class Account{
    accNo : number;
    holder : string;
    balance: number;

    credit(amount: number ){
        this.balance += amount;
    }

    debit(amount: number){
        if(amount > this.balance)
            throw "Insufficient funds"//Raising of Exceptions...
        this.balance -= amount;
    }

    constructor(no: number, name : string, balance :number = 5000) {
        this.accNo = no;
        this.holder = name;
        this.balance = balance;
    }

    abstract calculateInterest();
}
//If a class extends an abstract class, it must implement all the abstract methods. Else even this class should be marked abstract. 
class SBAccount extends Account{
    calculateInterest() {
        const rate : number = 6.5/100;
        const term : number = 1/4;
        const principle = this.balance;
        const interest : number = rate * term * principle;
        this.credit(interest);
    }
}

//ToDo: Calculate RD interest and FD interest

const acc : Account = new SBAccount(123, "Phaniraj", 50000);
acc.calculateInterest();
console.log("The current balance: "+ acc.balance);