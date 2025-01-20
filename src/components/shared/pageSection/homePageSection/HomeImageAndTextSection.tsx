import Heading from "@/components/template/Header/heading";
import MediumHeading from "@/components/template/Header/headingMedium";
import Image from "next/image";
import React, { useRef } from "react";
import IMAGES from "../../../../../public/images";
import { motion, useInView } from "framer-motion";

interface HomeImageAndTextSectionType {
  heading?: string;
  paragraph?: string;
  src?: string;
  reverse?: boolean;
}

export default function HomeImageAndTextSection({
  heading,
  paragraph,
  src,
  reverse,
}: HomeImageAndTextSectionType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className={`w-[80%] flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col items-center justify-between py-8 overflow-hidden`}
    >
      <motion.div
        ref={ref}
        initial={!reverse ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 1, type: "tween" }}
        className="md:w-[45%] w-full space-y-4"
      >
        <div className="bg-extralightgreen xl:w-[50%] lg:w-[65%]">
          <MediumHeading variant="extra-medium" weight="large">
            {heading}
          </MediumHeading>
        </div>
        <Heading color="gray" align="left" weight="light">
          {paragraph}
        </Heading>
      </motion.div>
      <motion.div
        ref={ref}
        initial={!reverse ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 1, type: "tween" }}
        className={`md:w-[55%] w-full flex items-center justify-center ${
          !reverse && "pl-14"
        } `}
      >
        <Image
          src={src || IMAGES.AIPOWERRIGHT}
          width={400}
          height={400}
          alt="OutSoruced"
          className="w-[250px] h-[250px] hover:scale-105 transition-all duration-300"
        />
      </motion.div>
    </div>
  );
}
