import NavBar from "./components/navbar";
import "./App.css";
import beach from "./beach.jpg";

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${beach})`, backgroundRepeat: "false", backgroundSize: "cover"}}>
      <div className="NavBar">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
