'use client'
import React, { useEffect, useRef } from "react";

function Hoverlight() {
      const spotRef = useRef(null);

  useEffect(() => {
    const moveLight = (e) => {
      const x = e.clientX - 250;
      const y = e.clientY - 260;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', moveLight);
    return () => window.removeEventListener('mousemove', moveLight);
  }, []);
  return (
    <div
    ref={spotRef}
      style={{
        position: "fixed",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(215,255,255,1) 1%, transparent 70%)",
        pointerEvents: "none",
        mixBlendMode: "soft-light",
        transition: "transform 0.05s linear",
        zIndex: 1,
      }}></div>
  );
}

export default Hoverlight;
