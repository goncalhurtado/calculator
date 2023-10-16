import Calculator from "./components/Calculator";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
