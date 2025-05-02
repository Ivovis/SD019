console.log("online");

const body = document.querySelector("body");

// I got null because I forgot the defer in the in the script tag
console.log(body);

// I got null again - there was no <H1> in the index.html - added and now I see it in the console
const h1 = document.createElement("h1");
console.log(h1);

// removed the H1 in the HTML file so I can add it in code

h1.textContent = "Heres the code added header";
body.appendChild(h1);

// and the h1 in console now reflects the change
// there was a difference now I have the <h1>heres the code added header</h1> displayed in the console

ulist = document.createElement("ul");

body.appendChild(ulist); // this can be done here or later after I have added the list items

let uitem1 = document.createElement("li");
uitem1.textContent = "list item 1";
ulist.appendChild(uitem1);

let uitem2 = document.createElement("li");
uitem2.textContent = "list item 2";
ulist.appendChild(uitem2);

let uitem3 = document.createElement("li");
uitem3.textContent = "list item 3";
ulist.appendChild(uitem3);

// now to remove the header
h1.remove();

// now removed the second list item
uitem2.remove();
