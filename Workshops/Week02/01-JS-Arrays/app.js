console.log("Arrays workshop");

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

// created array - display it
console.log(blogPosts);

// display first and second on separate lines
console.log(`first: ${blogPosts[0]}, \nsecond: ${blogPosts[1]}`);

// add a member to the the array - not ideal you need to know the index to use
blogPosts[3] = "My forth blog post";

// display the array
console.log(blogPosts);

// these are not my favorite foods, I'm not this healthy
let favouriteFoods = ["Apple", "Pairs", "Cheerys"];

console.log(favouriteFoods);

let favouriteColors = ["Pink", "Orange", "Red"];

console.log(favouriteColors);

let favoriteNumbers = [9, 3.1415, 0];

console.log(favoriteNumbers);

favouriteColors.unshift("This is also favorite song");

favouriteColors.push("by the Cocteau Twins");

console.log(favouriteColors);
