import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// export default function App() {
//   const [isVisible, setIsvisible] = useState(false);
//   const [isVisible2, setIsvisible2] = useState(false);

//   return (
//     <>
//       <button onClick={() => setIsvisible(!isVisible)}>click me</button>
//       {isVisible && <p>Hello world</p>}
//       <button onClick={() => setIsvisible2(!isVisible2)}>click me 2</button>
//       {isVisible2 ? <p>Hello world</p> : <p>Hello universe</p>}
//     </>
//   );
// }

// demonstration of why && cannot be used in the traditional way
// export default function App() {
//   const [items, SetItems] = useState([
//     // { id: 0, title: "Turnip" },
//     // { id: 1, title: "Artichoke" },
//   ]);

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.length &&
//           items.map((item) => <li key={item.id}>{item.title}</li>)}
//       </ul>
//     </div>
//   );
// }

// the example above but using the ternary correctly
export default function App() {
  // note this following line gets flagged as assigned but never used but behaves ok
  const [items, SetItems] = useState([
    // { id: 0, title: "Turnip" },
    // { id: 1, title: "Artichoke" },
  ]);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.length ? (
          items.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>no items</li>
        )}
      </ul>
    </div>
  );
}
