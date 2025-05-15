import "./App.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
