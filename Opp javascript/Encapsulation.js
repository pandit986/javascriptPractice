//Let learn the Encapsulation

class SavingAcoount{
    #balace; // balance is my private 
    constructor(name,amount){
        this.name = name;
        this.#balace = amount;
    }
    checkBalnce(){
        return this.#balace;
    }
    deposite(amount){
        if(amount > 0){
            this.#balace += amount
        }
        return this.#balace
    }
    withdraw(amount){
        if(amount <= 0){
            console.log("Enter the Valid Number") 
            return
        }
        else if(amount > 0 && amount <= this.#balace){
            this.#balace -= amount
            console.log('Remaining Balance',this.#balace)
        }else{
            console.log("Insuffient Balance")
        }
    }
}

let accountHolderOne = new SavingAcoount('Abhishek Anand Pandit',50000000000000)

// console.log(accountHolderOne.checkBalnce(),'checking Balance')
// console.log(accountHolderOne.deposite(1000),"deposite")
accountHolderOne.withdraw(0)