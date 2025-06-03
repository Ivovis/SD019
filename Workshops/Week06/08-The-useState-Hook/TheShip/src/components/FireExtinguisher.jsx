export default function FireExtinguisher(props) {
  let color = "red";

  if (props.colour != null) {
    color = props.colour;
  }

  function handleClick(theColor) {
    console.log(`fire extinguisher ${theColor} used`);
  }

  function handleClick2() {
    console.log(`fire extinguisher ${color} used`);
  }

  return (
    <section>
      <h5>Fire Extinguisher</h5>
      <p>I'm a {color} one hanging and the wall.</p>

      {/* heres the inline from the workshop */}
      {/* <button onClick={() => console.log("used")}>Use</button> */}

      {/* heres the function call version */}
      <button
        onClick={() => {
          handleClick(color);
        }}
      >
        use me
      </button>
      <button onClick={handleClick2}>me2</button>
    </section>
  );
}
