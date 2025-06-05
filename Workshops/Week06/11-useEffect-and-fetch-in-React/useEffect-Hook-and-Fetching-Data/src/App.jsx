// import { useState } from 'react'
import "./App.css";
import { useEffect, useState } from "react";

// const items = [
//   {
//     userID: 1,
//     id: 1,
//     title: "one flew over the tall tree",
//     completed: false,
//   },
//   {
//     userID: 1,
//     id: 2,
//     title: "one flew over the tall wall",
//     completed: false,
//   },
//   {
//     userID: 1,
//     id: 3,
//     title: "one flew over the tall hedge",
//     completed: false,
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        // "https://jsonplaceholder.typicode.com/todos"
        "https://dummyjson.com/recipes"
      );
      const data = await response.json();
      const heWrangled = data.recipes;
      setItems(heWrangled);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
