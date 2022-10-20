import NavBar from "./components/navbar";
import "./App.css";
import Pages from "./pages/pages";

function App() {
  return (
    <div className="App">
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
