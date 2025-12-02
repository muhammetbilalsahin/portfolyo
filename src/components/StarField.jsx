import React, { useEffect, useRef } from "react";

const StarField = ({ count = 150 }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    container.innerHTML = ""; // önce temizle

    const stars = [];
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 1;

      star.style.position = "absolute";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      star.style.transition = `${1 + Math.random() * 2}s opacity infinite alternate`;

      container.appendChild(star);
      stars.push(star);
    }

    // Twinkle animasyonu
    const twinkle = () => {
      stars.forEach(star => {
        star.style.opacity = Math.random();
      });
      requestAnimationFrame(twinkle);
    };
    twinkle();
  }, [count]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: "black",
        overflow: "hidden",
        pointerEvents: "none"
      }}
    ></div>
  );
};

export default StarField;
