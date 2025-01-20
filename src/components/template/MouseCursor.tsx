"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  }, []);
  return (
    <>
      <div
        style={{
          top: ` ${position.y - 5}px`,
          left: `${position.x - 10}px`,
        }}
        className={`hidden lg:block fixed w-7 h-7 rounded-full bg-black transition-all duration-100 ease-linear border-black z-40 pointer-events-none `}
      ></div>
      <motion.div
        style={{
          top: ` ${position.y - 3}px`,
          left: `${position.x - 8}px`,
        }}
        className={`hidden lg:block fixed w-6 h-6 rounded-full bg-black transition-all duration-[105ms] ease-linear border-black z-30 pointer-events-none`}
      ></motion.div>
    </>
  );
}
