import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Twirl as Hamburger } from 'hamburger-react'
import logo from "../assets/logo.jpg"



export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
   <motion.header 
  className="nav" 
  initial={{ y: -20, opacity: 0 }} 
  animate={{ y: 0, opacity: 1 }} 
  transition={{ duration: 0.5 }}
>
  {/* Container kiri: burger + brand */}
  <div className="left-group" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div className="burger">
      <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="var(--accent)" />
    </div>
    <div className="brand">
      <div className="logo">
        <img src={logo} width={46} height={46} style={{ borderRadius: "100%" }} alt="logo" />
      </div>
      <div>
        <div style={{ fontSize: 16 }}>UPM Chess Club</div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>Universitas Satya Terra Bhinneka</div>
      </div>
    </div>
  </div>

  {/* Spacer */}
  <div style={{ flexGrow: 1 }}></div>

  {/* Nav links kanan */}
  <nav className={`nav-links ${isOpen ? "active" : ""}`}>
    <NavLink to="/" end onClick={handleLinkClick}>Beranda</NavLink>
    <NavLink to="/album" onClick={handleLinkClick}>Album</NavLink>
    <NavLink to="/profil" onClick={handleLinkClick}>Profil</NavLink>
    <NavLink to="/about" onClick={handleLinkClick}>Tentang Kami</NavLink>
    <NavLink to="/daftar" onClick={handleLinkClick}>Daftar</NavLink>
  </nav>
</motion.header>
  )
}