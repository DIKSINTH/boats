import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Aboutus";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contactus";
import LoadingIndicator from "./components/LoadingIndicater.jsx";

function App() {
  return (
    <>
      <Router>
        <LoadingIndicator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
