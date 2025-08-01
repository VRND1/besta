// src/components/Loading.jsx
import React from "react";
import "../components/Loading.css";
import loadingVideo from "../assets/loading page.mp4"; // adjust path if needed

export default function Loading() {
  return (
    <div className="loading-video-wrapper">
      <video
        src={loadingVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="loading-video"
      />
    </div>
  );
}
