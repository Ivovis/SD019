// creating objects

const person = {
  name: "Bob",
  age: 30,
  favoriteColor: "red",
};

console.log("this is the current person: \n", person);

console.log("\n and this is the table output from consol:");
console.table(person);

console.log("the persons name is", person.name);
console.log("the persons age is", person.age);
console.log("the persons likes", person.favoriteColor);

person.favoriteFood = "Pizza";

console.table(person);

console.log("\nYou wouldn't download a car, no you make it in JS!\n");

const car = {
  make: "Tesla",
  Model: "Why",
  Color: "Burnt Grey",
};

console.table(car);

console.log("\n now its time to create the complex object, a blogpost\n");

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: "30",
    favoriteColor: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  Content: "This is my blog post about learning objects and arrays.",
};

console.log("Author:", blogPost.author.name);
console.log("the first tag is ", blogPost.tags[0]);
console.log(
  "there are",
  blogPost.tags.length,
  "tags for this post, they are:\n"
);

for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(i, blogPost.tags[i]);
}
