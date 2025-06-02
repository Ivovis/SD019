export default function FireExtinguisher(props) {
  let color = "red";
  if (props.colour != null) {
    color = props.colour;
  }
  return (
    <section>
      <h5>Fire Extinguisher</h5>
      <p>I'm a {color} one hanging and the wall.</p>
    </section>
  );
}
