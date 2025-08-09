import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from "../assets/logo.jpg"

export default function Navbar(){
  return (
    <motion.header className="nav" initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}}>
      <div className="brand">
        <div className="logo"><img src={logo} width={50} style={{ borderRadius: "100%" }} /></div>
        <div>
          <div style={{fontSize:16}}>UPM Chess Club</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Universitas Satya Terra Bhinneka</div>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>Beranda</NavLink>
        <NavLink to="/album">Album</NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="/about">Tentang Kami</NavLink>
        <NavLink to="/daftar">Daftar</NavLink>
      </nav>
    </motion.header>
  )
}
