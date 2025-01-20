"use client";
import React from "react";
import Button from "@/components/template/button/button";
import { useRouter } from "next/navigation";
import LargeHeading from "@/components/template/Header/LargeHeading";
import MediumHeading from "@/components/template/Header/headingMedium";
import { motion } from "framer-motion";

export default function HeroSection() {
  const Router = useRouter();
  return (
    <div className="md:w-[90%] w-[95%] mx-auto flex flex-col items-center justify-center h-full gap-y-4">
      <div className="mx-auto flex flex-col items-center justify-center pb-20 overflow-hidden">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 90 }}
        >
          <LargeHeading variant="extralarge" weight="dark" color="gray">
            Your Next Journey, Optimized
          </LargeHeading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="md:w-[60%] w-[80%] py-6"
        >
          <MediumHeading color="dark" variant="medium">
            Build, personalize, and optimize your itineraries with our free AI
            trip planner. Designed for vacations, workations, and everyday
            adventures.
          </MediumHeading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="lg:w-[25%] md:w-[35%] w-[55%]"
        >
          <Button onClick={() => Router.push("/plan")}>Let’s Begin</Button>
        </motion.div>
      </div>
    </div>
  );
}
