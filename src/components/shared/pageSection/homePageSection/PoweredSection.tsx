"use client";
import LargeHeading from "@/components/template/Header/LargeHeading";
import React from "react";
import HomeImageAndTextSection from "./HomeImageAndTextSection";
import IMAGES from "../../../../../public/images";

export default function PoweredSection() {
  return (
    <div className="w-[90%] mx-auto flex flex-col items-center justify-center gap-y-4">
      <LargeHeading weight="dark">
        Your
        <p className="text-green">AI-Powered</p>
        Trip
      </LargeHeading>
      <HomeImageAndTextSection
        heading="The most optimal"
        paragraph="Craft your perfect itinerary with Trip Planner AI. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you."
        src={IMAGES.AIPOWERRIGHT}
      />
      <HomeImageAndTextSection
        heading="Get Inspired"
        reverse
        paragraph="Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned explore-sights, and effortlessly include them in your own adventure with Trip Planner AI."
        src={IMAGES.AIPOWERLEFT}
      />
    </div>
  );
}
