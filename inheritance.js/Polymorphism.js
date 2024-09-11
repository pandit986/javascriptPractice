//Polymorphism means "many forms". 
// It allows methods in different classes to have the same name 
// but behave differently based on the class that calls them.
//In JavaScript, polymorphism is achieved through method overriding.

// Parent class
class Animal {
    speak() {
      console.log('The animal makes a sound');
    }
  }
  
  // Child class overriding the speak method
  class Dog extends Animal {
    speak() {
      console.log('The dog barks');
    }
  }
  
  // Child class overriding the speak method
  class Cat extends Animal {
    speak() {
      console.log('The cat meows');
    }
  }
  
  const animals = [new Dog(), new Cat()];
  console.log(animals)
  
  animals.forEach(animal => animal.speak());
  // Output:
  // The dog barks
  // The cat meows
  