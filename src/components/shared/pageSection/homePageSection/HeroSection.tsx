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
    <div className="w-[90%] mx-auto flex flex-col items-center justify-center h-full gap-y-4">
      <div className="mx-auto flex flex-col items-center justify-center pb-20">
        <motion.div initial={{ x: -300 }} animate={{ x: 0 }}>
          <LargeHeading variant="extralarge" weight="dark" color="gray">
            Your Next Journey, Optimized
          </LargeHeading>
        </motion.div>
        <motion.div className="md:w-[60%] w-[80%] py-6">
          <MediumHeading color="dark" variant="medium">
            Build, personalize, and optimize your itineraries with our free AI
            trip planner. Designed for vacations, workations, and everyday
            adventures.
          </MediumHeading>
        </motion.div>
        <div className="lg:w-[25%] md:w-[35%] w-[55%]">
          <Button onClick={() => Router.push("/plan")}>Let’s Begin</Button>
        </div>
      </div>
    </div>
  );
}
