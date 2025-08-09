import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const sample = [logo, logo, logo, logo, logo];

export default function AlbumGrid({ images = sample }) {
  return (
    <div className="album-grid">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`album-${i}`}
          className="album-img"
          style={{
            border: "2px solid white",
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        />
      ))}
    </div>
  );
}
