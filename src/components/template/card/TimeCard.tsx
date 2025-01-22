import React, { useRef } from "react";
import { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";

interface timecardtype {
  text: string;
  Icon: IconType;
  reverse?: boolean;
}

export default function TimeCard({
  text,
  Icon,
  reverse = false,
}: timecardtype) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={
        !reverse
          ? { x: -80, opacity: 0, scale: 0 }
          : { x: 80, opacity: 0, scale: 0 }
      }
      whileHover={{ scale: 1.1 }}
      animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.1 }}
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } gap-x-2 items-center justify-center shadow-2xl rounded-2xl px-2 py-2.5 w-full text-black font-semibold bg-[#bbf7f7]`}
    >
      <div>
        <Icon />
      </div>
      <div>{text}</div>
    </motion.div>
  );
}
