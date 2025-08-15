import React from "react";

export default function ChatbotCC() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
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
