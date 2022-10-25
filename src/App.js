import NavBar from "./components/navbar";
import "./App.css";
import beach from "./beach.jpg";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" style={
      {backgroundImage: `url(${beach})`, 
      backgroundRepeat: "false", 
      backgroundSize: "cover", 
      backgroundPosition: "center"}}
      >
      <div className="NavBar">
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
