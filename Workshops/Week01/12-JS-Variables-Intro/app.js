console.log("Hello world");

let number = 1;
console.log(number);

let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;

console.log(sweets);

let myName = "Bob";
console.log(myName);

let firstName = "Bob";
let lastName = "Smith";
let fullName = firstName + " " + lastName;

console.log("full name is " + fullName);

let fullName2 = `${firstName} ${lastName}`;

console.log(fullName2);

firstName = "Imhotep";
console.log(`${firstName} is ${firstName.length} characters long`);

let isTrue = true;
console.log(isTrue);

let isFalse = false;
console.log(isFalse);

console.log(typeof firstName);
console.log(typeof isTrue);

let isNothing;
console.log(typeof isNothing);

firstName = null;
console.log(typeof isNothing);

let a = 21;
let b = 22;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;
console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB);
console.log(`Is ${a} less than ${b}?`, isALessThanB);
console.log(`Is ${a} equal to ${b}?`, isAEqualToB);
console.log(`what is ${a} plus ${b} - 1?`, a + b - 1);

let favProgLang = "JavaScript";
let currentDay = 4;

const sentence = `my favorite programming language is python, but I am learning ${favProgLang}. We're on day ${currentDay} but the work shop is from yesterday :)`;

console.log(sentence);
