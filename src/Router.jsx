import { BrowserRouter, Routes, Route } from "react-router-dom"; // gunakan react-router-dom, bukan react-router

import Home from "./components/pages/Home.jsx";
import Movie from "./components/pages/Movie.jsx";
import Details from "./components/pages/Details.jsx";
import Register from "./components/pages/Register.jsx";
import Login from "./components/pages/Login.jsx";
import Ticket from "./components/pages/Ticket.jsx";
import Payment from "./components/pages/Payment.jsx";
import Profile from "./components/pages/Profile.jsx";
import Admin from "./components/pages/Admin.jsx";
import Order from "./components/pages/Order.jsx";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/ticket" element={<Ticket />} />
        {/* <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
