import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotCC() {
  const [activated, setActivated] = useState(false);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* Animated Overlay */}
      <AnimatePresence>
        {!activated && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActivated(true)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.8rem",
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: 2,
              textAlign: "center",
              padding: "20px",
            }}
          >
            Click anywhere to activate the Chess Club chat
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cross-origin iframe */}
      <iframe
        src="https://app.smojo.org/2303311489/Chess-Club"
        title="Chess Club Preview"
        width="100%"
        height="100%"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </div>
  );
}
