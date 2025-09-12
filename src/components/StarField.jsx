import React, { useEffect, useRef } from "react";

const StarField = ({ count = 150 }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    container.innerHTML = ""; // önce temizle

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.style.position = "absolute";
      star.style.background = "white";
      star.style.borderRadius = "50%";
      star.style.width = 1 + Math.random() * 2 + "px";
      star.style.height = star.style.width;
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      star.style.opacity = Math.random();
      star.style.animation = `twinkle ${1 + Math.random() * 2}s infinite alternate`;
      container.appendChild(star);
    }
  }, [count]);

  return <div ref={containerRef} style={starFieldStyle}></div>;
};

const starFieldStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  background: "black",
  overflow: "hidden",
};

export default StarField;
