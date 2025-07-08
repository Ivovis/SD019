class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  poop() {
    console.log(`${this.name} creates an artistic sculpture on the floor.`);
  }
}

const animal = new Animal("Dog");
animal.speak();
animal.poop();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks, "SQUIRREL"`);
  }
}

const dog = new Dog("Dug");
dog.speak();
dog.poop();

class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }
  fly() {
    console.log(`${this.name} flies.`);
  }
}

const bird = new Bird("Sparrow");
bird.speak();
bird.poop();
bird.fly();

class FlyingAnimal extends Animal {
  fly() {
    console.log(`${this.name} flies.`);
  }
}

class Pig extends FlyingAnimal {
  speak() {
    console.log(`${this.name} Oinks.`);
  }
}

const pig = new Pig("Pinky");
pig.speak();
pig.poop();
pig.fly();

console.log("================");

class GameItem {
  constructor(name, description) {
    this.name = name;
    this.desc = description;
  }
}

class Weapon extends GameItem {
  constructor(name, description, damage) {
    super(name, description);
    this.damage = damage;
  }
  use() {
    console.log(`Player deals ${this.damage} damage with ${this.desc}`);
  }
}

const dagger = new Weapon("Stabby", "a short dagger", 10);
dagger.use();
