class BankAccount{
    #username;
    #accountNo;
    #number;
    #amount;
    constructor(accountNo,username,number){
        this.#accountNo = accountNo;
        this.#username = username;
        this.#number = number;
        this.#amount = 0;
    }
    setUsername(username){
        this.#username = username;
    }
    getUsername(){
        return this.#username;
    }
    setAccountNo(accountNo){
        this.#accountNo = accountNo;
    }
    getAccountNo(){
        return this.#accountNo;
    }
    setNumber(number){
        this.#number = number;
    }
    getNumber(){
        return this.#number;
    }
    depositAmount(amount){
        if(amount < 1){
            console.log("Invalid Amount");
        }
        else{
            this.#amount = this.#amount + amount;
        }
    }
    #canWithdwow(amount,reqAmount){
        if(this.#amount >= reqAmount){
            return true;
        }
        else{
            return false;
        }
    }
    withdrawAmount(amount){
        if(amount < 1){
            throw new Error("Invalid Amount");
        }
        else{
            if(this.#canWithdwow(amount)){
                this.#amount = this.#amount - amount;
            }
            else{
                throw new Error("Insufficient Balance");
            }
        }
    }
}
class SalaryAccount extends BankAccount{
    constructor(type,limit,salary){
        supar(accountNo,username,number,type,limit)
        this.salary = salary;
        this.creditCard = 100000
    }
    payment(amount){
        if(amount < 1){
            throw new Error("Invalid Amount");
        }
        else{
            this.amount = this.amount - amount;
        }
    }
}