import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/onboarding/Login";
import Register from "./pages/onboarding/Register";
import Home from "./pages/home/Home";
import ViewProduct from "./pages/products/ViewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
