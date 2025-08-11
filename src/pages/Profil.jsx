import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import { motion } from 'framer-motion';
import "../index.css";
import GlareHover from '../components/GlareHover';
import { NavLink, useNavigate } from 'react-router-dom';
import jul from '../assets/profile/jul.jpg';
import jass from '../assets/profile/jass.jpg';
import enjel from '../assets/profile/enjel.jpg';
import delima from '../assets/profile/delima.jpg';
import pakMusi from '../assets/profile/pakMuis.jpg';
import wal from '../assets/profile/wal.jpg';
import viagio from '../assets/profile/viagio.jpg';

const perangkat = [
  {name:'Jul Fredy Purba', role:'Ketua UPM',photo:jul, insta:"https://www.instagram.com/julfredypurba?igsh=NWpvcnB0d3R3bHl4"},
  {name:'Walrian Sihombing', role:'Wakil Ketua UPM',photo:wal, insta:"https://www.instagram.com/walrian_shmbg?utm_source=qr&igsh=MXRmcDkydmRnNTNocg=="},
  {name:'Jasswant Anbumani', role:'Pendataan',photo:jass, insta:"https://www.instagram.com/jassnotsillynomore?igsh=MXh3aTA4M3dvbWpqbw=="},
  {name:'Viagio Hiskiel Meliala', role:'Dokumentasi',photo:viagio, insta:"https://www.instagram.com/gio_smbiring?igsh=MWhkdTkxd3l2MHM2bw=="},
  {name:'Enjelina Simangunsong', role:'Bendahara',photo:enjel, insta:"https://www.instagram.com/elin.smngsg?igsh=ZGpxdmRtd25iemt6"},
  {name:'Delima Tumanggor', role:'Sekretaris',photo:delima, insta:"https://www.instagram.com/ima_aa29?igsh=anJua3U1MzN3aGJq"},
  {name:'Abdul Muis', role:'Pembina UPM',photo:pakMusi, insta:"https://www.instagram.com/a6dulmuis?igsh=MWp0MXlmbmgzeHhtZg=="},
];

export default function Profil(){
  return (
    <motion.div className="card" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
      <div className="container">
        <div>
          <div className="card">
            <h2>Pengurus & Anggota Inti</h2>
            <p style={{color:'var(--muted)'}}>Tim inti yang mengelola klub.</p>
            <div className="profile-grid">
              {perangkat.map((o,i)=> <ProfileCard key={i} name={o.name} role={o.role} photo={o.photo} insta={o.insta}/>)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
