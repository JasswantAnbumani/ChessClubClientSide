import React, { useState } from "react";

export default function LoginPerangkatUPM() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/perangkatupm/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // Simpan token + data user
      localStorage.setItem("perangkatUPMUser", JSON.stringify(data.user));
      localStorage.setItem("perangkatUPMToken", data.token);

      alert(`Login berhasil! Selamat datang, ${data.user.nama}`);
      window.location.href = "/album"; // langsung ke halaman album
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: "80px", maxWidth: "400px" }}>
      <div className="card">
        <h2 style={{ marginBottom: "14px", textAlign: "center" }}>
          Login Perangkat UPM
        </h2>
        {error && <p style={{ color: "red", marginBottom: "8px" }}>{error}</p>}
        <form onSubmit={handleSubmit} className="form-grid">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid var(--glass-border)",
              background: "var(--accent)",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
