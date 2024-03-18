
//----------- Bank -----------//
class Bank {
    name = "";
    address = "";
    code = "";
    constructor(name, address, code){
    this.name = name;
    this.address = address;
    this.code = code;
    }
    createATM(){
        const atm = new ATM("BankNPRU","NPRU");
        return atm;
    }

    createCustomer(name,address, phone , email){
        const customer = new Customer("Oay","Suphanburi","0800781563","oay@gmail.coom")
        return customer;
    }

    createAccount(accountType){
        let account
        if(accountType === "CurrentAccount"){
            account = new CurrentAccount("Current01", 1000.00,200000,0.3);
            return account
        }
        else {
            account = new SavingAccount("Saving01", 1000.00,200000,0.5);
            return account
        } 
        
    }
    
}

//----------- Customer -----------//
class Customer {
    accounts = [];
    name = "";
    address = "";
    phone = "";
    email = ""
    constructor(name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    addAccount(account) {
        this.accounts.push(account);
    }
    vertify(name) {
        return this.name === name;
    }
    getAccount() {
        return this.accounts;
    }
    createAccount(bank, accountType) {
        return bank.createAccount(accountType);
    }
}
//----------- Account -----------//
class Account {
    accountNumber = "";
    balance = 0;
    customer = null
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return this.balance;
        } else {
            console.log("ไม่สามารถฝากได้");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log("ไม่สามารถถอนได้");
        }
    }
    createTransation() {


    }
    getTransation() { }
    getBalance() {
        return this.balance;
    }
    getAccountType() {
        return this.accountType
    }
    getCustomer() {
        return this.customer
    }
    setCustomer(customer) {
        this.customer = customer;
    }
}
//----------- CurrentAccount -----------//
class CurrentAccount extends Account {
    overdraftLimit = 0;
    overdraftInterset = 0;
    constructor(accountNumber, balance, overdraftLimit, overdraftInterset) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterset = overdraftInterset;
    }

}
//----------- SavingAccount -----------//
class SavingAccount extends Account {
    interestRate = 0;
    constructor(accountNumber, balance,interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
}
class ATM {


}

const main = () => {
    const asd = new Customer("asd", "asd", "123456789", "asd@gmail.com")
    console.log(asd.vertify("asd"));
    const qwe = new Account("qwe", 1000)

    console.log(qwe.deposit(1000));
}
main()