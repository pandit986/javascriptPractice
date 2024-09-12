
class Animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log(this.name,"Speeking well")
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name); // Call parent class constructor
        this.breed = breed; // Additional propert
    }
    bark(){
        console.log(this.name,'Bark')
    }
}

let myDog = new Animal('Buddy')
let myCat = new Animal('Meoooo')

let newDog = new Dog("JOO",'German')

// myDog.makeSound()
// myCat.makeSound()
console.log(newDog.breed)
console.log(newDog.name)
newDog.makeSound()
newDog.bark()
