import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FeedbackPanel() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  async function fetchFeedbacks() {
    setLoading(true);
    try {
      const res = await fetch("https://chessclubserverside.onrender.com/api/feedbacks");
      if (!res.ok) throw new Error("Gagal mengambil data feedback");
      const data = await res.json();
      setList(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  async function submitFeedback(e) {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await fetch("https://chessclubserverside.onrender.com/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg: text.trim() }),
      });
      if (!res.ok) throw new Error("Gagal mengirim feedback");
      const newItem = await res.json();
      setList(prev => [newItem, ...prev]);
      setText("");
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <form className="feedback-form" onSubmit={submitFeedback}>
        <label>Feedback (akan tampil anonim)</label>
        <textarea
          rows={3}
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tinggalkan pesan singkat..."
          disabled={loading}
        />
        <div style={{ display: "flex", gap: 8 }}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="card"
            style={{ padding: "8px 12px", color: "white" }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Kirim"}
          </motion.button>
        </div>
      </form>

      <div className="feedback-list" style={{ marginTop: 12 }}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading && list.length === 0 ? (
          "Memuat feedback..."
        ) : list.length === 0 ? (
          <div style={{ color: "var(--muted)" }}>Belum ada feedback.</div>
        ) : (
          list.map((f) => (
            <motion.div
              className="feedback-item"
              key={f._id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                {new Date(f.date).toLocaleString()}
              </div>  
              <div style={{ marginTop: 6 }}>{f.msg}</div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}


