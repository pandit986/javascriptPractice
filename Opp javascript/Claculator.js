class Calculator{
    a;
    b;
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(num1,num2){
        this.a = num1
        this.b = num2
        return this.a + this.b
    }
    subStrcat(){
        return this.a - this.b
    }
    divide(){
        return this.a - this.b
    }
    multiply(){
        return this.a * this.b
    }
}

let addNumber = new Calculator()
// console.log(addNumber)
console.log(addNumber.add(10,25))
console.log(addNumber)
// console.log(addNumber.subStrcat())
// console.log(addNumber.divide())
console.log(addNumber.multiply())

