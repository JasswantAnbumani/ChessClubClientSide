import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Profil from "./pages/Profil";
import About from "./pages/About";
import Daftar from "./pages/Daftar";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main
        style={{
          paddingTop: 60,
          paddingBottom: window.innerWidth <= 768 ? 48 : 24,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/about" element={<About />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
