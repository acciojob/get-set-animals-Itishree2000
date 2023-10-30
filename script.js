//complete this code
class Animal {
	 constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
	 constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }
}

class Cat extends Animal {
	 constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`${this.name} purrs: Purr... Purr...`);
    }
}
// Usage
const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

myDog.makeSound(); // Outputs: Buddy barks: Woof! Woof!
myCat.makeSound(); // Outputs: Whiskers purrs: Purr... Purr!
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
