"use client";
import React, { useEffect, useState } from "react";

export default function MouseCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const Px = e.clientX;
      const Py = e.clientY;
      setPosition({ x: Px, y: Py });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [position]);
  return (
    <div
      style={{
        translate: `${position.x - 8}px ${position.y - 3}px`,
      }}
      className={`hidden lg:block fixed left-0 top-0 w-7 h-7 rounded-full bg-black transition-all duration-100 ease-linear border-black z-40 pointer-events-none`}
    ></div>
  );
}
