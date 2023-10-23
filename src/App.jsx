import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/solution" element={<Solutions />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
