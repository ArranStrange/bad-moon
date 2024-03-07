import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import WhiteTexture from "./assets/overlays/white-texture.jpg";
import NavBar from "./components/NavBar";
import Home from "./components/homepage/home";
import MerchMain from "./components/merch/merch-main";

function App() {
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merch" element={<MerchMain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
