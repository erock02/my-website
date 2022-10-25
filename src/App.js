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
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
