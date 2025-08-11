import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import GlareHover from "./GlareHover";
export default function ProfileCard({ name, role, extra, photo, insta }) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  return (
    <motion.div
      className="profile-card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <div
          className="profile-avatar"
          style={{ overflow: "hidden", borderRadius: "50%" }}
        >
          {photo ? (
            <img
              src={photo}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            initials
          )}
        </div>

        <div style={{ fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>{role}</div>
        {extra && (
          <div style={{ marginTop: 6, fontSize: 13, color: "var(--muted)" }}>
            {extra}
          </div>
        )}

        <div>
          <a
            className="icon"
            href={insta}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--primary)", textDecoration: "none" }}
          >
            <FaInstagram style={{ marginRight: 4 }} />
          </a>
        </div>
      </GlareHover>
    </motion.div>
  );
}
