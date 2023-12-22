import Calculator from "./components/Calculator";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div style={{ marginTop: "60px" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
