import "./App.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PostList from "../Components/PostList";
import TagList from "../Components/TagList";

import About from "../Components/About";
import Contact from "../Components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <PostList />
              <TagList />
            </main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
