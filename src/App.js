import "./App.css";
import Users from "./components/users";
import Products from "./components/products";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import User from "./components/user";
import Product from "./components/product";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
