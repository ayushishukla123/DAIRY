import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  // simple auth check
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Header ko login status bhej rahe */}
      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Routes */}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
