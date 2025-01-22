"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IMAGES from "../../../public/images";
import { motion } from "framer-motion";

export default function AirPlane() {
  const [handlePosition, setHandlePosition] = useState({
    y: -30,
    x: 0,
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        if (window.screen.width <= 884) {
          // console.log(window.screen.width, "Screen width");
          setHandlePosition({
            y: window.scrollY / 6,
            x: window.scrollY + 100,
          });
        } else if (window.screen.width <= 430) {
          setHandlePosition({
            y: window.scrollY / 1,
            x: window.scrollY + 200,
          });
        } else if (window.screen.width > 1400) {
          // console.log("greater than 1350px");
          setHandlePosition({
            y: window.scrollY / 5,
            x: window.scrollY + 2000,
          });
        } else {
          setHandlePosition({
            y: window.scrollY / 2.3,
            x: window.scrollY + 550,
          });
        }

        // console.log(window.scrollY);
      } else if (window.scrollY < 100) {
        if (window.screen.width > 884) {
          setHandlePosition({ y: 0, x: 0 });
        }
        setHandlePosition({ y: -30, x: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      initial={{ y: 0, x: 0 }}
      animate={{ y: handlePosition.y, x: handlePosition.x }}
      transition={{ type: "tween", ease: "linear" }}
      className="fixed lg:pt-0 pt-[475px] z-30 pointer-events-none w-[130px] h-[30px]"
    >
      <motion.div
        animate={{ x: [0, -8, 0], y: [0, 4, -4, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="w-[135px] h-[40px] pointer-events-none"
      >
        <Image
          src={IMAGES.PLANE}
          width={100}
          height={100}
          className="w-full h-full"
          alt="Plane"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}
