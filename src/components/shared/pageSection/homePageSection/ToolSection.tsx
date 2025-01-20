"use client";
import ToolCard from "@/components/template/card/ToolCard";
import MediumHeading from "@/components/template/Header/headingMedium";
import LargeHeading from "@/components/template/Header/LargeHeading";
import React, { useRef } from "react";
import ToolCardData from "@/lib/ToolCardData";
import { motion, useInView } from "framer-motion";

export default function ToolSection() {
  const ref = useRef(null);
  const IsViewTrue = useInView(ref);
  return (
    <div className="pt-24 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={IsViewTrue ? { opacity: 1, y: 0 } : {}}
      >
        <div>
          <MediumHeading variant="medium">
            <span className="text-green">AI Travel Agent</span>
          </MediumHeading>
        </div>
        <div>
          <LargeHeading variant="" weight="dark">
            The only tool youll ever need!
          </LargeHeading>
        </div>
        <div className="md:w-[45%] w-[90%] mx-auto">
          <MediumHeading variant="med-small" color="gray">
            Say goodbye to the stress of planning and hello to personalized
            recommendations, efficient itineraries, and seamless dining
            experiences.
          </MediumHeading>
        </div>
      </motion.div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] mx-auto gap-6 pt-20">
        {ToolCardData.map((data) => (
          <div
            key={data.id}
            className="hover:scale-105 transition-all duration-200 ease-linear"
          >
            <ToolCard
              id={data.id}
              src={data.src}
              heading={data.heading}
              paragraph={data.paragraph}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
