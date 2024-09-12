
//Parent Class 

class LivingThing {
    constructor(id){
        this.id = id + 1 
    }
    breathe() {
      console.log('Breathing...');
    }
  }

  class Animal extends LivingThing {
    constructor(id,name) {
      super(id);
      this.name = name;
    }
  }

  class Bird extends Animal {
    constructor(id,name, canFly) {
      super(id,name);
      this.canFly = canFly;
    }
  
  }

  let myDog = new Animal('Joooooooooo')
  let myBird = new Bird(10,"Loooooooooo","Yes")
// console.log(myDog.name,'YES')
// console.log(myBird.name)
console.log(myBird.id)
console.log(myBird.canFly)
console.log(myBird.name)
// console.log(myDog.id)