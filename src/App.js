import "./App.css";
import "./css/bootstrap.min.css";
import "./css/home.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Help from "./pages/Help";

function addLayout(element) {
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={addLayout(<Home />)} />
          <Route path="/restaurant" element={addLayout(<Restaurant />)} />
          <Route path="/help" element={addLayout(<Help />)} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
