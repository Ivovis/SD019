import { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  // const [name, setName] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    async function fetchFox() {
      // const res = await fetch("https://randomfox.ca/floof/");
      const res = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await res.json();
      const imageIndex = Math.floor(Math.random() * data.length);

      // console.log("frog stuff:", data[imageIndex].url);
      setImgUrl(data[imageIndex].url);
    }

    fetchFox();

    const intervalId = setInterval(fetchFox, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <p>Current name Value is: {formValues.name}</p>
        <p>Current email Value is: {formValues.email}</p>
        <button type="submit">Submit</button>
        <br />
        <img src={imgUrl} />
      </form>
    </>
  );
}
