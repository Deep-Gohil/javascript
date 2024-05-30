class BankAccount {
    #accountNo;
    #username;
    #mobileNo;
    #amount;

    constructor(accountNo, username, mobileNo) {
        this.#accountNo = accountNo;
        this.#username = username;
        this.#mobileNo = mobileNo;
        this.#amount = 0;
    }

    setUsername(username) {
        this.#username = username;
    }

    getUsername() {
        return this.#username;
    }

}

let user1 = new BankAccount(345678, "Deep", 2345678);
console.log(user1);
user1.setUsername("Admin");
console.log(user1.getUsername());