import React from 'react'
import { motion } from 'framer-motion'
import "../index.css"

export default function About(){
  return (
    <div className="container">
      <motion.div className="card about-card" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        <h2 className="about-title">Tentang UPM Chess Club</h2>
        <p className="about-desc">
          Menjadi wadah pembinaan, pengembangan, dan prestasi catur yang unggul, berintegritas, serta berkontribusi positif bagi kemajuan mahasiswa Universitas Satya Terra Bhinneka di tingkat lokal, nasional, dan internasional.
        </p>

        <div className="about-list">
          <div className="about-list-item">
            <div className="about-dot"></div>
            <div>
              <span className="about-section-title">Misi</span>
              <ul className="about-ul">
                <li>
                  Mengembangkan kemampuan dan keterampilan catur mahasiswa melalui pelatihan rutin,
                  pembinaan terarah, dan kegiatan kompetitif.
                </li>
                <li>
                  Menciptakan lingkungan yang kondusif untuk belajar, berlatih, dan bertukar pengetahuan
                  antarpemain catur.
                </li>
                <li>
                  Menumbuhkan sportivitas, disiplin, dan rasa kebersamaan dalam setiap aktivitas klub.
                </li>
                <li>
                  Mengikuti serta menyelenggarakan berbagai turnamen catur sebagai ajang peningkatan prestasi
                  dan pengalaman.
                </li>
                <li>
                  Menjadi duta yang membawa nama baik Universitas Satya Terra Bhinneka melalui prestasi di bidang
                  catur.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-list-item">
            <div className="about-dot"></div>
            <div>
              <span className="about-section-title">Visi:</span> Menjadi klub catur kampus yang aktif dan berprestasi.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}