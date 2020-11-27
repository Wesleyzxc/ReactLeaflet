import logo from "./logo.svg";
import "./App.css";
import MapComponent from "./Map";

function App() {
  document.title = "My Community Landmark";
  return (
    <div className="App">
      <header className="App-header">
        <MapComponent></MapComponent>
      </header>
    </div>
  );
}

export default App;
