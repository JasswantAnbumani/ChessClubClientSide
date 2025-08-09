import React from 'react'
import AnnouncementCard from '../components/AnnouncementCard'
import FeedbackPanel from '../components/FeedbackPanel'
import AnimatedButton from '../components/AnimatedButton'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const announcements = [
  { title: "Latihan Mingguan", date: "Pada Tanggal 12 Agustus 2025", content: "Latihan Di Perpustakaan Pada Jam 13.00" }
]

export default function Home(){
  const nav = useNavigate()

  return (
    <div className="container">
      <div className="home-grid">
        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          <motion.section className="card welcome" initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.45}}>
            <h1>Selamat Datang di UPM Chess Club</h1>
            <p>Komunitas pecatur kampus, latihan, turnamen, dan belajar bersama. Bergabunglah dan berkembang bersama kami!</p>
            <div style={{display:'flex',gap:10, marginTop:8}}>
              <AnimatedButton onClick={()=>nav('/daftar')}>Daftar Sekarang</AnimatedButton>
              <AnimatedButton onClick={()=>nav('/about')}>Tentang Kami</AnimatedButton>
            </div>
          </motion.section>

          <div className="card">
            <h3 style={{marginBottom:8}}>Pengumuman</h3>
            <div className="ann-list">
              {announcements.map((a,i)=> <AnnouncementCard key={i} item={a} />)}
            </div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          <div className="card">
            <h3 style={{marginBottom:8}}>Feedback (anonim)</h3>
            <FeedbackPanel />
          </div>

          <div className="card">
            <h3>Info Singkat</h3>
            <p style={{color:'var(--muted)'}}>Temukan jadwal latihan, dokumentasi turnamen, dan cara bergabung di halaman Profil & Daftar.</p>
            <div style={{display:'flex',gap:8, marginTop:6}}>
              <AnimatedButton small onClick={()=>nav('/profil')}>Lihat Profil</AnimatedButton>
              <AnimatedButton small onClick={()=>nav('/album')}>Lihat Album</AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
