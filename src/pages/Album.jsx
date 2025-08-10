import React, { useState, useEffect, useRef } from "react";
import AlbumGrid from "../components/AlbumGrid";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";
import "../index.css";

export default function Album() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [albums, setAlbums] = useState([]);
  const fileInputs = useRef({});

  useEffect(() => {
    const user = localStorage.getItem("perangkatUPMUser");
    if (user) setIsLoggedIn(true);

    fetch("http://localhost:5000/api/albums")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setAlbums(data);
        } else {
          setAlbums([{ _id: "1", albumName: "Album Contoh", photos: [], uploadedBy: "", date: "" }]);
        }
      })
      .catch(() => {
        setAlbums([{ _id: "1", albumName: "Album Contoh", photos: [], uploadedBy: "", date: "" }]);
      });
  }, []);

  const handleButtonClick = (albumId) => {
    if (!isLoggedIn) {
      alert("Silakan login perangkat UPM terlebih dahulu!");
      window.location.href = "/login";
      return;
    }
    fileInputs.current[albumId].click();
  };

  const handleUpload = async (albumId, e) => {
    const token = localStorage.getItem("perangkatUPMToken");
    const files = e.target.files;
    if (!files.length) return;

    const formData = new FormData();

    // Cari albumName berdasarkan albumId
    const album = albums.find(a => a._id === albumId);
    const albumName = album ? album.albumName || album.name || "Tanpa Nama" : "Tanpa Nama";
    formData.append("albumName", albumName);

    for (let file of files) {
      formData.append("photos", file);
    }

    try {
      const res = await fetch(`http://localhost:5000/api/albums/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const updatedAlbum = await res.json();

      setAlbums((prev) =>
        prev.map((a) => (a.albumName === albumName ? updatedAlbum : a))
      );
    } catch (err) {
      console.error("Gagal upload", err);
    }
  };

  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Album Turnamen & Latihan</h2>
        <p style={{ color: "var(--muted)", marginTop: 6 }}>
          Koleksi foto dari kegiatan klub.
        </p>

        <div style={{ marginTop: 16 }}>
          {albums.map((album) => (
            <div key={album._id} style={{ marginBottom: 20 }}>
              <h3>{album.albumName || album.name}</h3>

              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--glass-border)",
                  background: "var(--accent)",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
                onClick={() => handleButtonClick(album._id)}
              >
                <FaUpload /> Upload Foto
              </button>

              <input
                type="file"
                multiple
                ref={(el) => (fileInputs.current[album._id] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleUpload(album._id, e)}
              />

              <AlbumGrid photos={album.photos} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
