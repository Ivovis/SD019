// object methods workshop

const person = {
  name: "Bob",
  age: "31",
  favoriteColor: "red",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello();

const person2 = {
  name: "Bob",
  age: "31",
  favoriteColor: "red",
  sayHello: function (name) {
    console.log("Hello!", name + "!");
  },
};

person2.sayHello("Alice");

const person3 = {
  name: "Bob",
  age: "31",
  favoriteColor: "red",
  sayHello: function (name) {
    console.log("Hello!", name + "!");
  },
  getAge: function () {
    return this.age;
  },

  // rather than the car advert example I have added a short note from Bob
  getMessage: function () {
    return "Hi I'm Bob, I like swimming, walks in the park and coding until it gets daylight outside.";
  },
};

const age = person3.getAge();
console.log("Bob is", age);

console.log(person3.getMessage());

// there we got a return without needing a this :)
