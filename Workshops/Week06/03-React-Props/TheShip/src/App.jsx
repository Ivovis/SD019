import "./App.css";
import EngineRoom from "./components/EngineRoom";
import Galley from "./components/Galley";
import CommandCenter from "./components/CommandCenter";

function App() {
  return (
    <>
      <CommandCenter />
      <EngineRoom engineCount={2} />
      <Galley />
    </>
  );
}

export default App;
