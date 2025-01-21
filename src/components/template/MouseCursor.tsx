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
  }, [position]);
  return (
    <>
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: position.y - 5, x: position.x - 10 }}
        className={`hidden lg:block fixed top-0 left-0 w-7 h-7 rounded-full bg-black transition-all duration-[35ms] ease-linear border-black z-40 pointer-events-none`}
      ></motion.div>
      {/* <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: position.y - 3, x: position.x - 8 }}
        className={`hidden lg:block fixed top-0 left-0 w-6 h-6 rounded-full bg-black transition-all duration-[35ms] ease-linear border-black z-30 pointer-events-none `}
      ></motion.div> */}
    </>
  );
}
