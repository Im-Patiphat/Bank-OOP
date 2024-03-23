//----------- Bank -----------//
class Bank {
  name = "";
  address = "";
  code = "";
  constructor(name, address, code) {
    this.name = name;
    this.address = address;
    this.code = code;
  }
  manage() {}
  maintain() {}
  vertify(name) {
    return this.name === name;
  }
  openAccount() {
    const account = new Account("acc", 1000);
    return account != null;
  }
  closeAccount() {
    const account = new Account("acc", 1000);
    return account = null;
  }
  createTransaction() {
    const transaction = new Transaction(
      "transaction1",
      "transactionType",
      0,
      "23/03/2567",
      "โอนสำเร็จ"
    );
    return transaction;
  }

  createATM() {
    const atm = new ATM("BankNPRU", "NPRU");
    return atm;
  }

  createAccount(accountType) {
    let account;
    if (accountType === "CurrentAccount") {
      account = new CurrentAccount("Current01", 1000.0, 200000, 0.3);
      return account;
    } else {
      account = new SavingAccount("Saving01", 1000.0, 200000, 0.5);
      return account;
    }
  }
}

//----------- Customer -----------//
class Customer {
  accounts = [];
  name = "";
  address = "";
  phone = "";
  email = "";
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
  customer = null;
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
  createTransaction(
    transaction,
    transactionType,
    amount,
    transactionDate,
    status
  ) {
    const transaction1 = new Transaction(
      transaction,
      transactionType,
      amount,
      transactionDate,
      status
    );
    return transaction1;
  }
  getTransation() {}
  getBalance() {
    return this.balance;
  }
  getAccountType() {
    return this.accountType;
  }
  getCustomer() {
    return this.customer;
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
  calculateInterest() {
    return this.balance * this.overdraftInterset;
  }
  getOverdraftLimit() {
    return this.overdraftLimit;
  }
  setOverdraftLimit(amount) {
    this.overdraftLimit = amount;
  }
}
//----------- SavingAccount -----------//
class SavingAccount extends Account {
  interestRate = 0;
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  calculateInterest() {
    return this.balance * this.interestRate;
  }
  getInterestRate() {
    return this.interestRate;
  }
  setInterestRate(rate) {
    this.interestRate = rate;
  }
}
class ATM {
  location = "";
  managedBy = "";
  customer = null;
  constructor(location, managedBy) {
    this.location = location;
    this.managedBy = managedBy;
  }
  identify() {
    return;
  }
  checkBalance() {
    return this.balance
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
  changePin() {
    return true;
  }
  transfer() {}
  vertify(name) {
    return customer.name === name;
  }
}

class Transaction {
  transaction = "";
  transactionType = "";
  amount = 0;
  transactionDate = "";
  status = "";
  constructor(transaction,transactionType ,amount ,transactionDate ,status ) {
    this.transaction = transaction
    this.transactionType = transactionType
    this.amount = amount;
    this.transactionDate =  transactionDate;
    this.status = status;
  }
  getTransation(){
    return this.transaction;
  }
  getTransationType(){
    return this.transactionType;
  }
  getAmount(){
    return this.amount;
  }
  getTransationDate(){
    return this.transactionDate;
  }
  getStatus(){
    return this.status;
  }
  setStatus(status){
    this.status = status;
  }
  setTransationType(transactionType){
    this.transactionType = transactionType;
  }
  setTransationDate(transactionDate){
    this.transactionDate = transactionDate;
  }
}

const main = () => {
  const asd = new Customer("asd", "asd", "123456789", "asd@gmail.com");
  console.log(asd.vertify("asd"));
  const qwe = new Account("qwe", 1000);

  console.log(qwe.deposit(1000));
};
main();
