import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCar from "./views/ShoppingCar";
import Details from "./views/Details";
import Home from "./views/Home";
import Menu from "./components/Menu.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Details />} />
        <Route path="/shopingCar" element={<ShoppingCar />} />
      </Routes>
    </>
  );
}

export default App;
