import React, { useEffect, useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import FeedbackPanel from "../components/FeedbackPanel";
import AnimatedButton from "../components/AnimatedButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

export default function Home() {
  const nav = useNavigate();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/pengumuman") // ganti URL API sesuai backend-mu
      .then((res) => res.json())
      .then((data) => {
        // Ubah format data API agar cocok dengan AnnouncementCard
        const formatted = data.map((item) => ({
          title: item.judul,
          date: item.tanggal
            ? new Date(item.tanggal).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Tanggal tidak tersedia",
          content: item.isi,
        }));
        setAnnouncements(formatted);
      })
      .catch((err) => console.error("Gagal memuat pengumuman:", err));
  }, []);

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container">
        <div className="home-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <motion.section
              className="card welcome"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45 }}
            >
              <h1>Selamat Datang di UPM Chess Club</h1>
              <p>
                Komunitas pecatur kampus, latihan, turnamen, dan belajar
                bersama. Bergabunglah dan berkembang bersama kami!
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                <AnimatedButton onClick={() => nav("/daftar")}>
                  Daftar Sekarang
                </AnimatedButton>
                <AnimatedButton onClick={() => nav("/about")}>
                  Tentang Kami
                </AnimatedButton>
              </div>
            </motion.section>

            <div className="card">
              <h3 style={{ marginBottom: 8 }}>Pengumuman</h3>
              <div className="ann-list">
                {announcements.length > 0 ? (
                  announcements.map((a, i) => (
                    <AnnouncementCard key={i} item={a} />
                  ))
                ) : (
                  <p>Belum ada pengumuman</p>
                )}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="card">
              <h3 style={{ marginBottom: 8 }}>Feedback / Saran & Masukan</h3>
              <FeedbackPanel />
            </div>

            <div className="card">
              <h3>Info Singkat</h3>
              <p style={{ color: "var(--muted)" }}>
                Temukan dokumentasi turnamen, informasi perangkat UPM, dan cara
                bergabung di halaman Album & Daftar.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                <AnimatedButton small onClick={() => nav("/profil")}>
                  Lihat Profil
                </AnimatedButton>
                <AnimatedButton small onClick={() => nav("/album")}>
                  Lihat Album
                </AnimatedButton>
                <AnimatedButton small onClick={() => nav("/daftar")}>
                  Daftar Sekarang
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
