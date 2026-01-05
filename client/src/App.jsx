import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import AddProduct from "./pages/AddProduct";
import Payment from "./pages/payment";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
