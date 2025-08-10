import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

export default function NotFound() {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container">
        <div className="card" style={{ textAlign: "center" }}>
          <h2>404</h2>
          <div style={{ color: "var(--muted)" }}>Halaman tidak ditemukan</div>
          <div style={{ marginTop: 12 }}>
            <Link
              to="/"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
