import "./App.css";
import "./index.css";
import WhiteTexture from "./assets/white-texture.jpg";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About1 from "./components/About1";
import About2 from "./components/About2";
import About3 from "./components/About3";

function App() {
  return (
    <div className="App">
      <img
        src={WhiteTexture}
        className="overlay-texture"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 50,
          height: "100lvh",
          width: "100lvw",
        }}
        alt=""
      />
      <NavBar />

      <div className="scroll-section">
        <Landing />
      </div>
      <div className="scroll-section">
        <About1 />
      </div>
      <div className="scroll-section">
        <About2 />
      </div>
      <div className="scroll-section">
        <About3 />
      </div>
    </div>
  );
}

export default App;
