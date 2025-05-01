if (1 > 0) {
  console.log("1 is greater than 0");
}

let age = 10;
let legalDrivingAge = 17;

if (age > legalDrivingAge) {
  console.log("You can Drive");
} else {
  console.log(" No. Get in the other side!");
}

let isRoadLegal = false;

const age2 = 18;
const legalDrivingAge2 = 17;

if (age2 > legalDrivingAge2) {
  isRoadLegal = true;
}

console.log("Am I road legal?", isRoadLegal);

if (isRoadLegal) {
  console.log("Am I road legal? yes");
} else {
  console.log("Am I road legal? no");
}

let age3 = 17;
let legalDrivingAge3 = 17;

if (age > legalDrivingAge) {
  console.log("You are old enough to drive");
} else if (age3 === legalDrivingAge3) {
  console.log("You are just old enough to drive");
} else {
  console.log("You can't drive yet.");
}

// the following code only checks ratings U and PG and the ages are taken from the workshop instructions, it would not be suitable for the actual UK ratings.

// NOTE: no checks for valid movieRating values are made, use only U or PG

let movieRating = "PG";
let testAge = 16;

// decided to use constants here to demonstrate my (or 'lack of') understanding of them.
const uAgeLimit = 12;
const pgAgeLimit = 16;

if (testAge <= uAgeLimit) {
  if (movieRating == "U") {
    console.log("You can watch this movie");
  } else {
    console.log("You can NOT watch this movie");
  }
} else if (testAge <= pgAgeLimit) {
  if (movieRating == "U") {
    console.log("You can watch this movie");
  } else if (movieRating == "PG") {
    console.log("You can watch this movie");
  } else {
    console.log("You can NOT watch this movie");
  }
} else if (testAge >= pgAgeLimit) {
  console.log("You can watch any movie");
} else {
  console.log("You can NOT watch this movie");
}
