import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { motion } from 'framer-motion'

const officers = [
  {name:'Jul Fredy Purba', role:'Ketua UPM'},
  {name:'Walrian Sihombing', role:'Wakil Ketua UPM'},
  {name:'Jasswant Anbumani', role:'Pendataan'},
  {name:'Viagio Hiskiel Meliala', role:'Dokumentasi'},
  {name:'Enjelina Simangunsong', role:'Bendahara'},
  {name:'Delima Tumanggor', role:'Sekretaris'}
]



export default function Profil(){
  return (
    <motion.div className="card" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
    <div className="container">
      <div style={{display:'grid',gap:18}}>

        <div className="card">
          <h2>Pengurus & Anggota Inti</h2>
          <p style={{color:'var(--muted)'}}>Tim inti yang mengelola klub.</p>
          <div style={{marginTop:12}} className="profile-grid">
            {officers.map((o,i)=> <ProfileCard key={i} name={o.name} role={o.role} />)}
          </div>
        </div>
      </div>
    </div></motion.div>
  )
}
