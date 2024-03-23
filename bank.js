//----------- Bank -----------//
class Bank {
  name = "";
  address = "";
  code = "";
  ATMs = [];
  customer = null;
  accounts = [];

  constructor(name, address, code) {
    this.name = name;
    this.address = address;
    this.code = code;
  }
  manage() {
    return 
  }
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
    return (account = null);
  }
  createTransaction(trans, type, amount, date, status) {
    const transaction = new Transaction(trans, type, amount, date, status);
    return transaction;
  }

  createCustomer(name, address, phone, email) {
    const cus = new Customer(name, address, phone, email);
    return cus;
  }

  createATM(name,location) {
    const atm = new ATM(name,location);
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
  toString() {
    return ` ${this.name}`;
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
  toString() {
    return `Customer [Name :${this.name}, Address :${this.address}, Phone :${this.phone}, Email :${this.email}]`;
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
    return this.balance;
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
    const min = 100000; 
    const max = 999999; 
    const pin = Math.floor(Math.random() * (max - min + 1)) + min; // สุ่มตัวเลขระหว่าง min และ max
    return pin.toString(); // แปลงเป็นสตริง
  }
  transfer() {}
  vertify(name) {
    return customer.name === name;
  }
}

class Transaction {
  transactionid = "";
  transactionType = "";
  amount = 0;
  transactionDate = "";
  status = "";
  constructor(transactionid, transactionType, amount, transactionDate, status) {
    this.transactionid = transactionid;
    this.transactionType = transactionType;
    this.amount = amount;
    this.transactionDate = transactionDate;
    this.status = status;
  }
  getTransationId() {
    return this.transactionid;
  }
  getTransationType() {
    return this.transactionType;
  }
  getAmount() {
    return this.amount;
  }
  getTransationDate() {
    return this.transactionDate;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }
  setTransationType(transactionType) {
    this.transactionType = transactionType;
  }
  setTransationDate(transactionDate) {
    this.transactionDate = transactionDate;
  }
  toString(){
    return `Transaction [ID : ${this.transactionid}, Type :${this.transactionType}, Amount :${this.amount}, Date :${this.transactionDate}, Status :${this.status}]`
  }
}

const main = () => {
  const bank1 = new Bank("BankNPRU", "Thailand", "789335");
  const customer1 = bank1.createCustomer(
    "Punsan",
    "BangPhae",
    "0922932011",
    "punsan@gmail.com"
  );
  const account1 = bank1.createAccount("CurrentAccount");
  const account2 = bank1.createAccount("SavingAccount");
  // Add accounts to customer1
  customer1.addAccount(account1);
  customer1.addAccount(account2);
  // Deposit and Withdraw example
  account1.deposit(500);
  console.log("Account 1 Balance:", account1.getBalance());

  account2.withdraw(2000);
  console.log("Account 2 Balance:", account2.getBalance());

  // Create a transaction
  const transaction1 = bank1.createTransaction(
    "Transaction1",
    "TransactionType1",
    1500,
    "23/03/2024",
    "Completed"
  );
  console.log(transaction1.toString());

  // Create an ATM
  const atm1 = bank1.createATM("Location1", "Manager1");
  console.log("ATM Location:", atm1.location);

  // Change PIN for the ATM
  console.log("Change PIN result:", atm1.changePin());
};
main();
