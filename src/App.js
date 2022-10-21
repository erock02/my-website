import NavBar from "./components/navbar";
import "./App.css";
import Pages from "./pages/pages";
import beach from "./beach.jpg";

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${beach})`, backgroundRepeat: "false", backgroundSize: "cover"}}>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="page">
        <Pages />
      </div>
    </div>
  );
}

export default App;
