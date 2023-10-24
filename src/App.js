import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";
import Product from "./components/Product";
import SingleInstrument from "./components/SingleInstrument";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/newproduct" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instruments/:id" element={<SingleInstrument />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
