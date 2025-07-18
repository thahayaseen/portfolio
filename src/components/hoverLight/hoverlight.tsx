'use client'
import React, { useEffect, useRef, useState } from "react";

function Hoverlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveLight = (e:MouseEvent) => {
      const x = e.clientX - 250;
      const y = e.clientY - 250;

      
      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
  
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', moveLight);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', moveLight);
    };
  }, []);

  return (
    <>
      {/* Main hover light */}
      <div
        ref={spotRef}
        style={{
          position: "fixed",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `
            radial-gradient(circle at center, 
              rgba(147, 197, 253, 0.4) 0%,
              rgba(59, 130, 246, 0.3) 20%,
              rgba(147, 51, 234, 0.2) 40%,
              rgba(236, 72, 153, 0.1) 60%,
              transparent 90%
            )
          `,
          pointerEvents: "none",
          mixBlendMode: "screen",
          filter: "blur(200px)",
          zIndex: 10,
          opacity: isVisible ? 1 : 0,
          // transform: `scale(${isVisible ? 1 : 0.8})`,
          transition: "opacity 0.3s ease-out, transform 0.1s ease-out",
          animation: isVisible ? 'hoverlight-pulse 3s ease-in-out infinite' : 'none',
        }}
      />

      
  

      <style jsx>{`
    
      `}</style>
    </>
  );
}

export default Hoverlight;