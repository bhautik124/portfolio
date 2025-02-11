import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const followCursor = () => {
      if (cursorRef.current) {
        const { x, y } = position;
        const currentX = parseFloat(cursorRef.current.style.left || 0);
        const currentY = parseFloat(cursorRef.current.style.top || 0);

        // Smooth transition calculation
        const nextX = currentX + (x - currentX) * 0.1;
        const nextY = currentY + (y - currentY) * 0.1;

        cursorRef.current.style.left = `${nextX}px`;
        cursorRef.current.style.top = `${nextY}px`;

        requestAnimationFrame(followCursor);
      }
    };

    requestAnimationFrame(followCursor);
  }, [position]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none w-10 h-10 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50"
      style={{ left: "0px", top: "0px" }}
    />
  );
};

export default CustomCursor;
