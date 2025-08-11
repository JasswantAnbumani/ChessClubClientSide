import React, { useState } from "react";
import AlbumGrid from "../components/AlbumGrid";
import { motion } from "framer-motion";
import "../index.css";
import logo from "../assets/logo.jpg";
import { HiArrowCircleLeft } from "react-icons/hi";
import coverSumut from "../assets/album/cover/coverSumut.jpg";
import foto1 from "../assets/album/photos/kejuaraanSumut/foto1.jpg";
import foto2 from "../assets/album/photos/kejuaraanSumut/foto2.jpg";
import foto3 from "../assets/album/photos/kejuaraanSumut/foto3.jpg";
import foto4 from "../assets/album/photos/kejuaraanSumut/foto4.jpg";
import foto5 from "../assets/album/photos/kejuaraanSumut/foto5.jpg";
import foto6 from "../assets/album/photos/kejuaraanSumut/foto6.jpg";
import foto7 from "../assets/album/photos/kejuaraanSumut/foto7.jpg";
import foto8 from "../assets/album/photos/kejuaraanSumut/foto8.jpg";
import foto9 from "../assets/album/photos/kejuaraanSumut/foto9.jpg";
import foto10 from "../assets/album/photos/kejuaraanSumut/foto10.jpg";
import foto11 from "../assets/album/photos/kejuaraanSumut/foto11.jpg";
import coverAlphaChessClub from "../assets/album/cover/coverAlhpaChessClub.jpg";
import fotoA1 from "../assets/album/photos/alphaChessClub/foto1.jpg";
import fotoA2 from "../assets/album/photos/alphaChessClub/foto2.jpg";
import fotoA3 from "../assets/album/photos/alphaChessClub/foto3.jpg";
import fotoA4 from "../assets/album/photos/alphaChessClub/foto4.jpg";
import fotoA5 from "../assets/album/photos/alphaChessClub/foto5.jpg";
import fotoA6 from "../assets/album/photos/alphaChessClub/foto6.jpg";
import fotoA7 from "../assets/album/photos/alphaChessClub/foto7.jpg";
import fotoA8 from "../assets/album/photos/alphaChessClub/foto8.jpg";

export default function Album() {
  const [openedAlbumId, setOpenedAlbumId] = useState(null);

  const albums = [
    {
      id: "1",
      name: "Kejuaraan Catur Pelajar Se-Sumatera Utara 2025",
      coverPhoto: coverSumut,
      photos: [
        foto1,
        foto2,
        foto3,
        foto4,
        foto5,
        foto6,
        foto7,
        foto8,
        foto9,
        foto10,
        foto11,
      ],
    },
    {
      id: "2",
      name: "The 2nd Anniversary Alhpa Chess Club",
      coverPhoto: coverAlphaChessClub,
      photos: [
        fotoA1,
        fotoA2,
        fotoA3,
        fotoA4,
        fotoA5,
        fotoA6,
        fotoA7,
        fotoA8,
      ],
    },
    {
      id: "3",
      name: "Event Eksebisi",
      coverPhoto: "https://picsum.photos/id/1040/600/400",
      photos: [
        "https://picsum.photos/id/1041/600/400",
        "https://picsum.photos/id/1042/600/400",
        "https://picsum.photos/id/1043/600/400",
      ],
    },
  ];

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

        {!openedAlbumId && (
          <div
            style={{
              marginTop: "16px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {albums.map((album) => (
              <div
                key={album.id}
                style={{
                  padding: "10px",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "8px",
                  background: "var(--glass-bg)",
                  textAlign: "center",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onClick={() => setOpenedAlbumId(album.id)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={album.coverPhoto}
                  alt={album.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    borderRadius: "6px",
                    objectFit: "cover",
                  }}
                />
                <h3 style={{ marginTop: "10px" }}>{album.name}</h3>
              </div>
            ))}
          </div>
        )}

        {openedAlbumId && (
          <div style={{ marginTop: 16 }}>
            <button className="back-album"
              onClick={() => setOpenedAlbumId(null)}
            ><HiArrowCircleLeft style={{paddingTop:4, paddingRight:1, fontSize:"25px"}}/>
            </button>
            <div className="album-img">
            {albums
              .filter((a) => a.id === openedAlbumId)
              .map((album) => (
                <div key={album.id}>
                  <h3>{album.name}</h3>
                  <AlbumGrid photos={album.photos} />
                </div>
              ))}
              </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
