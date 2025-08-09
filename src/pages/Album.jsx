import React from 'react'
import AlbumGrid from '../components/AlbumGrid'
import { motion } from 'framer-motion'

export default function Album(){
  return (
    <div className="container">
      <motion.div className="card" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        <h2>Album Turnamen & Latihan</h2>
        <p style={{color:'var(--muted)',marginTop:6}}>Koleksi foto dari kegiatan klub.</p>
        <div style={{marginTop:16}}>
          <AlbumGrid />
        </div>
      </motion.div>
    </div>
  )
}
