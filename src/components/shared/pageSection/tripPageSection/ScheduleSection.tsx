"use client";
import Card from "@/components/template/card/Card";
import TimeCard from "@/components/template/card/TimeCard";
import LargeHeading from "@/components/template/Header/LargeHeading";
import TripCard from "@/lib/TripCard";
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function ScheduleSection() {
  return (
    <div className="lg:w-[85%] md:w-[95%] w-[90%] mx-auto space-y-4 py-6">
      <LargeHeading>Your Trip</LargeHeading>
      <div className="flex items-center justify-center lg:gap-12 gap-6 pb-3 pt-6">
        <TimeCard Icon={FaArrowRightLong} text={"25th Nov 23"} />
        <TimeCard Icon={FaArrowLeftLong} text={"5th Dec 23"} reverse />
      </div>
      {TripCard.map((data) => (
        <div key={data.id} className={`pt-7`}>
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
    </div>
  );
}
