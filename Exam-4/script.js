let bankData = [];

class BankAccount {
    constructor(name, accountNumber, mobileNumber, address, balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.mobileNumber = mobileNumber;   
        this.address = address;
        this.balance = 0;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAccountNumber(accountNumber){
        this.accountNumber = accountNumber;
    }
    getAccountNumber(){
        return this.accountNumber;
    }
    setMobileNumber(mobileNumber){
        this.mobileNumber = mobileNumber;
    }
    getMobileNumber(){
        return this.mobileNumber;
    }
    setAddress(address){
        this.address = address;
    }
    getAddress(){
        return this.address;
    }
    deposit(balance) {
        this.balance += Number(balance);
    }
    #canWithdwow(reqAmount){
        if(this.balance >= reqAmount){
            return true;
        }
        else{
            return false;
        }
    }
    withdrawAmount(balance){
        if(balance < 1){
            alert("Invalid Amount");
        }
        else{
            if(this.#canWithdwow(balance)){
                this.balance = this.balance - balance;
            }
            else{
                alert("You Can't Withdwow ");
            }
        }
    }
    getBalance(){
        return this.balance;
    }
}

// ---------------------test-------------------- 
// let account = new BankAccount()
// account.setName("deep")
// account.setAccountNumber(23456712887654)
// account.setMobileNumber(9925814941)
// account.setAddress("24 Radhakrishna Society Chaprahatha road amroli surat")
// console.log(account.getName());
// console.log(account.getAccountNumber());
// console.log(account.getMobileNumber());
// console.log(account.getAddress());
let account = new BankAccount()
const UIMaker = () => {
    bankData.map((ele) => {
        account.setName(ele.name);
        account.setAccountNumber(ele.accountNumber);
        account.setMobileNumber(ele.mobileNumber);
        account.setAddress(ele.address);

        let maindiv = document.createElement('div');
        let name = document.createElement('h1');
        let accountNumber = document.createElement('h3');
        let mobilenumber = document.createElement('h3');
        let address = document.createElement('h5');

        name.innerHTML = `Name: ${account.getName()}`;
        accountNumber.innerHTML = `Account Number: ${account.getAccountNumber()}`;
        mobilenumber.innerHTML = `Mobile Number: ${account.getMobileNumber()}`;
        address.innerHTML = `Address: ${account.getAddress()}`;
        maindiv.append(name,accountNumber,mobilenumber,address);
        document.querySelector(".parent-print").append(maindiv);

        maindiv.classList.add("print");
        maindiv.setAttribute("id","print");
    })

}

const handleBankAccount = (e) => {
    e.preventDefault();
    let data = {
        name: document.querySelector("#name").value,
        accountNumber: document.querySelector("#acnumber").value,
        mobileNumber: document.querySelector("#mobileNumber").value,
        address:document.querySelector("#address").value,
        depoamount: document.querySelector("#deposit").value,
    }
    bankData.push(data);
    UIMaker();
}

const handleDeposit = () => {
    let balance = document.querySelector("#deposit").value
    account.deposit(balance);
    let printBalance = document.createElement("h6")
    printBalance.innerHTML = `Balance: ${account.balance}`
        document.querySelector(".print").append(printBalance);
}

document.querySelector("#form").addEventListener("submit",handleBankAccount)
document.querySelector("#deposit-button").addEventListener("click", handleDeposit)