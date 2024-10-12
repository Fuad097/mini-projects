import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Nopage from "./pages/Nopage";
import CursorLight from "./components/cursorlight";

function App() {
  return (
    <>
      <div className="main-border">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
        <CursorLight/>
      </div>
    </>
  );
}

export default App;
