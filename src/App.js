import React from 'react';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Api from './pages/api';
import Maps from './pages/maps';
import Register from './pages/register';
import { Routes, Route } from "react-router-dom";

function App() {
  return <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api" element={<Api />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer/>
  </>
}

export default App;
