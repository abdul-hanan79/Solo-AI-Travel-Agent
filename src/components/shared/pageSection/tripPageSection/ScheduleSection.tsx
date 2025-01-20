"use client";
import Card from "@/components/template/card/Card";
import TimeCard from "@/components/template/card/TimeCard";
import LargeHeading from "@/components/template/Header/LargeHeading";
import TripCard from "@/lib/TripCard";
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ScheduleSection() {
  return (
    <motion.div className="lg:w-full md:w-[95%] w-[100%] mx-auto space-y-4 py-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <LargeHeading variant="large">Your Trip</LargeHeading>
      </motion.div>
      <div className="w-[90%] mx-auto flex items-center justify-center lg:gap-12 gap-6 pb-3 pt-3">
        <TimeCard Icon={FaArrowRightLong} text={"25th Nov 23"} />
        <TimeCard Icon={FaArrowLeftLong} text={"5th Dec 23"} reverse />
      </div>
      {TripCard.map((data) => (
        <div key={data.id} className={`pt-7 w-[90%] mx-auto`}>
          <Card
            to={data.to}
            from={data.from}
            isHeading={data.isHeading}
            heading={data.heading}
            isButton={data.isButton}
            isParagraph={data.isParagraph}
            paragraph={data.paragraph}
          />
        </div>
      ))}
    </motion.div>
  );
}
