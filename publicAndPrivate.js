class BankAccount{
    constructor(accountHolderName,balance){
        this.accountHolderName = accountHolderName;
        this._balance = balance //"Private" property (by convention using an underscore) 
    }
}

let account = new BankAccount('Abhishek Anand Pandit',100000000)

console.log(account)
console.log(account._balance)

//but i can access outside the private key outside the class 

console.log('-----------------------------')

//To properly enforce privacy, use # (modern approach)

class DmatAccount{
    #balance;
    constructor(name,balane){
        this.#balance = balane; //i can modify 
        this.name = name;
    }
    getBalance() {
        // this.#balance = 100
        return this.#balance;
    }
}
let shareAccount = new DmatAccount('Abhishek Anand Pandit',500000000)

//console.log(shareAccount.#balance) // not able access the private value 
console.log(shareAccount.getBalance())

//Now, #balance is truly private and cannot be accessed or modified from outside the class. Only the getBalance() method can access it, ensuring control over the balance.