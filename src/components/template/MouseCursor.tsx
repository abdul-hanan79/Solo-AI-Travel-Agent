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
      <motion.div
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: "black" }}
        style={{
          top: ` ${position.y - 5}px`,
          left: `${position.x - 10}px`,
        }}
        className={`fixed w-7 h-7 rounded-full transition-all duration-150 ease-linear border-black z-20 pointer-events-none`}
      ></motion.div>
      {/* <div
        style={{
          top: ` ${position.y -3}px`,
          left: `${position.x - 7}px`,
        }}
        className={`fixed w-[25px] h-[25px] rounded-full transition-all duration-[78ms] ease-in-out bg-black z-10 pointer-events-none `}
      ></div> */}
    </>
  );
}
