"use client";
import Image from "next/image";
import React, { useRef } from "react";
import IMAGES from "../../../../public/images";
import MediumHeading from "../Header/headingMedium";
import { motion, useInView } from "framer-motion";

interface ToolCardTypes {
  id?: number;
  src?: string;
  heading?: string;
  paragraph?: string;
}

export default function ToolCard({
  id,
  src,
  heading,
  paragraph,
}: ToolCardTypes) {
  const ref = useRef(null);
  const IsViewTrue = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={
        id === 0
          ? { x: -200, opacity: 0 }
          : id === 1
          ? { y: 150, opacity: 0 }
          : { x: 200, opacity: 0 }
      }
      animate={IsViewTrue ? { x: 0, opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", delay: 0.5, stiffness: 60 }}
      className="border px-4 py-4 rounded-md flex flex-col items-start gap-y-1 justify-center"
    >
      <div className="flex items-start justify-start w-full gap-x-2">
        <div className="">
          <Image
            src={src || IMAGES.AIPOWERLEFT}
            width={200}
            height={200}
            alt="Tool Reference"
            className="w-[90px] h-[80px]"
          />
        </div>
        <div className="pt-2">
          <MediumHeading variant="medium" weight="medium" align="left">
            {heading}
          </MediumHeading>
        </div>
      </div>
      <div className="w-full">
        <MediumHeading color="gray" align="left">
          {paragraph}
        </MediumHeading>
      </div>
    </motion.div>
  );
}
