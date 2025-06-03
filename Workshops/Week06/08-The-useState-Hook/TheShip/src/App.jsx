import "./App.css";
import EngineRoom from "./components/EngineRoom";
import Galley from "./components/Galley";
import CommandCenter from "./components/CommandCenter";
import Cookie from "./components/Cookie";

function App() {
  return (
    <>
      <h2>React State and Hooks</h2>
      <CommandCenter />
      <EngineRoom engineCount={2} />
      <Galley />
      <Cookie />
      <Cookie />
    </>
  );
}

export default App;
