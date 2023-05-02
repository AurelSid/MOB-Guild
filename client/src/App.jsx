import { Home } from "./components";
import { Navbar } from "./components";
import { Footer } from "./components";

import { Login } from "./components";
import { Games } from "./components";
import { About } from "./components";
import { Stacking } from "./components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <div className="z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Stacking" element={<Stacking />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Games" element={<Games />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
