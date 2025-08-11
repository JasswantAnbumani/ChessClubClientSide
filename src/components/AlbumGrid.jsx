import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

export default function AlbumGrid({ photos = [] }) {
  const [index, setIndex] = useState(-1);
  const slides = photos.map((src) => ({ src }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
          marginTop: "10px",
        }}
      >
        {slides.map((photo, i) => (
          <div
            key={i}
            className="wrapper"
            style={{
              position: "relative",
              borderRadius: "6px",
              overflow: "hidden",
              cursor: "zoom-in",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
            onClick={() => setIndex(i)}
          >
            <img
              src={photo.src}
              alt={`album-${i}`}
              className="album-photo"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <div className="album-overlay">🔍</div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />
    </motion.div>
  );
}
