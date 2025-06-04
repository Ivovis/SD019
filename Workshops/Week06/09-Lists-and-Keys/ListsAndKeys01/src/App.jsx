import "./App.css";

// example use of map() method
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// I wrote this and it returns an array of three undefined items!
// export default function App() {
//   const items = ["item 1", "item 2", "item 3"];
//   const htmlItems = items.map((item) => {
//     <li>{item}</li>;
//   });

//   console.log("the items:", htmlItems);

//   return (
//     <>
//       <h1>test</h1>
//       <ul>{htmlItems}</ul>
//     </>
//   );
// }

// added "react/prop-types": "off", to eslint.config.js

// This was copied and pasted from moodle and worked, it was then edited to add the key and worked without errors.
// export default function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];
//   const htmlItems = items.map((item) => <li key={item}>{item}</li>);
//   return <ul>{htmlItems}</ul>;
// }

// hand typed direct from moodle - this worked
export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ol>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}
