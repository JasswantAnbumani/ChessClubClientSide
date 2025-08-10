import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import { motion } from 'framer-motion';
import "../index.css";
import { NavLink, useNavigate } from 'react-router-dom';

const officers = [
  {name:'Jul Fredy Purba', role:'Ketua UPM'},
  {name:'Walrian Sihombing', role:'Wakil Ketua UPM'},
  {name:'Jasswant Anbumani', role:'Pendataan'},
  {name:'Viagio Hiskiel Meliala', role:'Dokumentasi'},
  {name:'Enjelina Simangunsong', role:'Bendahara'},
  {name:'Delima Tumanggor', role:'Sekretaris'}
];

export default function Profil(){
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek login pas pertama render
    setIsLoggedIn(!!localStorage.getItem("perangkatUPMUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("perangkatUPMUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <motion.div className="card" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
      <div className="container">
        <div>
          <div className="card">
            <h2>Pengurus & Anggota Inti</h2>
            <p style={{color:'var(--muted)'}}>Tim inti yang mengelola klub.</p>
            <div className="profile-grid">
              {officers.map((o,i)=> <ProfileCard key={i} name={o.name} role={o.role} />)}
            </div>
          </div>

          {!isLoggedIn ? (
            <NavLink
              to="/login"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid var(--glass-border)",
                background: "var(--accent)",
                color: "#000",
                fontWeight: "bold",
                textDecoration: "none",
                marginTop: "20px",
              }}
            >
              Login Perangkat UPM
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid var(--glass-border)",
                background: "var(--accent)",
                color: "#000",
                fontWeight: "bold",
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
