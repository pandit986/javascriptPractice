// define properties in a class in JavaScript. 
// There are two main ways to define properties

// 1. Inside the Constructor
class Animal {

    constructor(name,speak){
        this.name = name
        this.speakSound  = speak
    }

    speak(){
        console.log("speak sound",this.speak);
    }
    printValue(print = "hello"){
        console.log(print)
    }
}

let dog = new Animal("jon","booboo");
console.log(dog.name)
dog.speak();
dog.printValue()

//method and propety name not should be same
// in your case, the speak property is being overwritten by the speak() method, which means that when you call dog.speak(), it tries to call the speak property, which is a string, not a function.

console.log("------------------------------")
// 2 example
// Class Field Declarations (Outside the Constructor)

class Car{
    carName = 'defaultValue';
    carModel;
     constructor(carName,carModel){
        if(carName) this.carName = carName;
        if(carModel) this.carModel = carModel;
     }
     //method of the car
     drive(mode){
        console.log('I am  in which Mode',mode)
     }
}

let carObject = new Car("myCar",'BMW')
carObject.drive('sport')

console.log(carObject,"carObject")

// Summary:
// 1. You can define properties inside the constructor, which allows them to 
// be dynamically set for each instance.
// 2. You can define class fields outside the constructor, providing 
// default values that can be optionally overridden in the constructor.