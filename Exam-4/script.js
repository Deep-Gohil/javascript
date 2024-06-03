let bankData = [];

class BankAccount {
    constructor(name, accountNumber, mobileNumber, address, balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.mobileNumber = mobileNumber;   
        this.address = address;
        this.balance = 0;
    }
    deposit(balance) {
        this.balance += Number(balance);
    }
}

let ac = new BankAccount()

const UIMaker = () => {
    // document.getElementById(".parent-print").innerHTML = "";
   bankData.map((ele) => {
        let h1 = document.createElement('h1');
        h1.innerHTML = `Name: ${ele.name}  `;
        let h3 = document.createElement('h3');
        h3.innerHTML = `Account Number: ${ele.accountNumber}`;
        let h4 = document.createElement('h4');
        h4.innerHTML = `Mobile No. ${ele.mobileNumber}`;
        let h6 = document.createElement('h4');
        h6.innerHTML = `Address: ${ele.address}`;
        let print = document.createElement('div');
        print.classList.add("print");
        let amount = document.createElement('h4');
        amount.innerHTML =  `Balance: ${0}`;
        amount.setAttribute("id","printAmount")
        print.append(h1, h3, h4, h6, amount)
        document.querySelector(".parent-print").append(print)
   })
   bankData = []
}

const handleBankAccount = (e) => {
    e.preventDefault();
    let data = {
        name: document.querySelector("#name").value,
        accountNumber: document.querySelector("#acnumber").value,
        mobileNumber: document.querySelector("#mobileNumber").value,
        address:document.querySelector("#address").value,
        depoamount: document.querySelector("#deposit").value
    }
    bankData.push(data);
    UIMaker();
}
const handleDeposit = () =>{
    let a = document.querySelector("#deposit").value
    document.querySelector("#printAmount").innerHTML = `Balance: ${a}`
    // document.querySelector("#printAmount").innerHTML = ac.deposit(a)
}
document.querySelector("#deposit-button").addEventListener("click", handleDeposit)
document.querySelector("#form").addEventListener("submit", handleBankAccount);