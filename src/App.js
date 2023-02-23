import "./App.css";
import Componente from "./components/Componente";
function App() {
const nombres=["Belen","Pablo", "Eze", "Tomi"]
  return (
    <div className="App">
      <h1> hola mundo desde React</h1>
      <Componente nombre={nombres[0]}/>
      <Componente nombre={nombres[1]}/>
      <Componente nombre={nombres[2]}/>
      <Componente nombre={nombres[3]}/>
     
    </div>
  );
}

export default App;
