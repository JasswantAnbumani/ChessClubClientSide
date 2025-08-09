import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="container">
      <motion.div className="card" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        <h2>Tentang UPM Chess Club</h2>
        <p style={{color:'var(--muted)', marginTop:8}}>
          UPM Chess Club merupakan komunitas pecatur di lingkungan Universitas Satya Terra Bhinneka.
          Kami mengadakan latihan rutin, pembelajaran strategi, dan sparing internal serta mungkin antar kampus dimasa depan.
        </p>

        <div style={{marginTop:12, display:'grid', gap:8}}>
          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <div style={{width:10,height:10,background:'#fff',borderRadius:4}}></div>
            <div style={{color:'var(--muted)'}}>Misi <tr><ul>Mengembangkan kemampuan dan keterampilan catur mahasiswa melalui pelatihan rutin, pembinaan terarah, dan kegiatan kompetitif.
<ul> <ul>Menciptakan lingkungan yang kondusif untuk belajar, berlatih, dan bertukar pengetahuan antarpemain catur.<ul> <ul>Menumbuhkan sportivitas, disiplin, dan rasa kebersamaan dalam setiap aktivitas klub.
<ul> <ul>Mengikuti serta menyelenggarakan berbagai turnamen catur sebagai ajang peningkatan prestasi dan pengalaman.
<ul> <ul>Menjadi duta yang membawa nama baik Universitas Satya Terra Bhinneka melalui prestasi di bidang catur.<ul></tr></div>
          </div>
          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <div style={{width:10,height:10,background:'#fff',borderRadius:4}}></div>
            <div style={{color:'var(--muted)'}}>Visi: Menjadi klub catur kampus yang aktif dan berprestasi.</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

