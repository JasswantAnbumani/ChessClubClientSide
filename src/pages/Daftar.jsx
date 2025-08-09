import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Daftar() {
  const [form, setForm] = useState({
    nama: "",
    nim: "",
    angkatan: "",
    kelas: "",
    nohp: "",
  });
  const [list, setList] = useState([]);
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRegistrants();
  }, []);

  async function fetchRegistrants() {
    try {
      setLoading(true);
      const res = await fetch(
        "https://chessclubserverside.onrender.com/api/registrants"
      );
      const data = await res.json();
      setList(data);
      setLoading(false);
    } catch (error) {
      setMsg("Gagal mengambil data pendaftar");
      setLoading(false);
    }
  }

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMsg(null);
  }

  async function submit(e) {
    e.preventDefault();
    if (!form.nama || !form.nim) {
      setMsg("Nama dan NIM wajib");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        "https://chessclubserverside.onrender.com/api/registrants",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const result = await res.json();

      if (res.ok) {
        setMsg(result.message);
        setForm({ nama: "", nim: "", angkatan: "", kelas: "", nohp: "" });
        fetchRegistrants();
      } else {
        setMsg(result.message || "Gagal submit data");
      }
      setLoading(false);
    } catch (error) {
      setMsg("Gagal submit data");
      setLoading(false);
    }
  }

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container">
        <motion.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Form Pendaftaran UPM Chess Club</h2>
          <p style={{ color: "var(--muted)" }}>
            Isi data berikut untuk bergabung. Data disimpan di server.
          </p>

          <form
            onSubmit={submit}
            className="form-grid"
            style={{ marginTop: 12 }}
          >
            <div className="form-row">
              <div>
                <label>Nama Lengkap</label>
                <br />
                <input
                  className="input"
                  name="nama"
                  value={form.nama}
                  onChange={onChange}
                  placeholder="Nama lengkap"
                  disabled={loading}
                />
              </div>
              <div>
                <label>NIM</label>
                <br />
                <input
                  className="input"
                  name="nim"
                  value={form.nim}
                  onChange={onChange}
                  placeholder="NIM"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Angkatan</label>
                <br />
                <input
                  className="input"
                  name="angkatan"
                  value={form.angkatan}
                  onChange={onChange}
                  placeholder="Contoh: 24"
                  disabled={loading}
                />
              </div>
              <div>
                <label>Kelas</label>
                <br />
                <input
                  className="input"
                  name="kelas"
                  value={form.kelas}
                  onChange={onChange}
                  placeholder="IF D Siang"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row" style={{ marginTop: 12 }}>
              <div>
                <label>No. Handphone</label>
                <br />
                <input
                  className="input"
                  name="nohp"
                  value={form.nohp}
                  onChange={onChange}
                  placeholder="08xxxxxxxxxx"
                  disabled={loading}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="card"
                style={{ padding: "8px 12px", color: "white" }}
                disabled={loading}
              >
                {loading ? "Loading..." : "Daftar"}
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                className="card"
                style={{ padding: "8px 12px", color: "white" }}
                onClick={() => {
                  setForm({
                    nama: "",
                    nim: "",
                    angkatan: "",
                    kelas: "",
                    nohp: "",
                  });
                  setMsg(null);
                }}
                disabled={loading}
              >
                Reset
              </motion.button>
            </div>

            {msg && <div style={{ marginTop: 10, color: "#fff" }}>{msg}</div>}
          </form>

          <div style={{ marginTop: 18 }}>
            <h3>Daftar Pendaftar</h3>
            <div style={{ marginTop: 8, color: "var(--muted)" }}>
              {loading && list.length === 0 ? (
                "Memuat daftar pendaftar..."
              ) : list.length === 0 ? (
                "Belum ada pendaftar."
              ) : (
                <div style={{ display: "grid", gap: 8 }}>
                  {list.map((l) => (
                    <div
                      key={l._id}
                      style={{
                        padding: 10,
                        borderRadius: 8,
                        background: "var(--glass-2)",
                        border: "1px solid var(--glass-border)",
                      }}
                    >
                      <div style={{ fontWeight: 700 }}>{l.nama}</div>
                      <div style={{ fontSize: 13, color: "var(--muted)" }}>
                        {l.nim} • {l.kelas} • {l.angkatan} • {l.nohp}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
