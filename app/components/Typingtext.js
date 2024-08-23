"use client";
import React, { useState, useEffect } from "react";

const texts = [
  "Welcome to Student's Gymkhana",
  "Empowering Students",
  "Leadership and Excellence",
  "National Institute of Technology Durgapur",
];

export default function TypingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100); // Typing speed (in milliseconds)

    if (charIndex === texts[currentTextIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setDisplayedText(""); // Clear the text after some delay
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to the next text
      }, 2000); // Time to show the full text before clearing
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, currentTextIndex]);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold inline-block relative text-secondary">
        {displayedText}
        {/* Cursor Effect */}
        <span className="border-r-2 border-secondary animate-blink absolute right-0"></span>
      </h1>
    </div>
  );
}
