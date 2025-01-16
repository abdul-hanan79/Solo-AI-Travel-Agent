"use client";
import React from "react";
import IMAGES from "../../../../../public/images";
import Image from "next/image";
import LargeHeading from "@/components/template/Header/LargeHeading";
import MediumHeading from "@/components/template/Header/headingMedium";

export default function PlanPicSection() {
  return (
    <div className="w-full h-full rounded-3xl relative md:flex hidden flex-col items-center justify-center gap-72 py-10">
      <Image
        src={IMAGES.CHATCOVER}
        width={1200}
        height={1200}
        alt="CoverImage"
        className="bg-cover absolute inset-0 bg-center bg-no-repeat rounded-3xl brightness-50 w-full h-[99.5%] m-auto"
      />
      <div>
        <LargeHeading variant="large" color="white" className="relative">
          YOUR TRAVEL AI GENIUS
        </LargeHeading>
      </div>
      <div className="relative px-6 flex flex-col items-center gap-6">
        <MediumHeading color="white" weight="light" variant="extra-medium">
          Got a vacation coming up? Start here by Selecting.
        </MediumHeading>
        <Image
          src={IMAGES.ARROW}
          alt="Arrow"
          width={400}
          height={300}
          className="w-[250px] h-[25px]"
        />
      </div>
    </div>
  );
}
