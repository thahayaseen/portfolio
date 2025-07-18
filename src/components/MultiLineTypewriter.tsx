"use client";
import React, { useState, useEffect } from "react";
// import "./hero/hero.css";
const MultiLineTypewriter = ({
  lines,
  speed = 30,
  lineDelay = 500,
}: {
  lines: string;
  speed?: number;
  lineDelay?: number;
}) => {
  //   const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTypingComplete(false);
    let charIndex = 0;

    const currentLine = lines;

    const typingInterval = setInterval(() => {
      if (charIndex < currentLine.length) {
        // console.log(displayedText, "line is", charIndex);

        setDisplayedText((prev) => {
          return prev + currentLine.charAt(charIndex);
        });
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [lines, speed, lineDelay]);
  // console.log(displayedText);

  return (
    <div className="typewriter-container min-h-[100px] font-mono">
      {displayedText}
      {!isTypingComplete && (
        <span className="blinking-cursor">|</span>
      )}
    </div>
  );
};

export default MultiLineTypewriter;
