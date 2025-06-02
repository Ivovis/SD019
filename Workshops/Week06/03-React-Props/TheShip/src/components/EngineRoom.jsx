import FireExtinguisher from "./FireExtinguisher";

export default function EngineRoom(props) {
  return (
    <section>
      <h4>This is the engine room</h4>
      <p>its a little bit noisy with {props.engineCount} engines.</p>
      <FireExtinguisher colour="green" />
    </section>
  );
}
