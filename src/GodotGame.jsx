// src/GodotGame.jsx
import { useEffect } from "react";

export default function GodotGame() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/catch-key/index.html";
    script.async = true;
    document.getElementById("game-container").appendChild(script);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "1em" }}>
      <h1>🎯 Catch Key Game</h1>
      <p>Click when the bouncing ball is at the key to catch it!</p>
      <div id="game-container">
        <iframe
          src="/catch-key/index.html"
          width="800"
          height="600"
          style={{ border: "none" }}
          title="Catch Key Game"
        ></iframe>
      </div>
    </div>
  );
}

