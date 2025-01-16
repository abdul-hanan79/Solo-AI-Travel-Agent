"use client";
import Card from "@/components/template/card/Card";
import TimeCard from "@/components/template/card/TimeCard";
import LargeHeading from "@/components/template/Header/LargeHeading";
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function ScheduleSection() {
  return (
    <div className="lg:w-[80%] md:w-[37%] w-[90%] mx-auto space-y-4 py-6">
      <LargeHeading>Your Trip</LargeHeading>
      <div className="flex items-center justify-center gap-4">
        <TimeCard Icon={FaArrowRightLong} text={"25th Nov 23"} />
        <TimeCard Icon={FaArrowLeftLong} text={"5th Dec 23"} reverse />
      </div>
      <div>
        <Card to="New York City" from="Paris" />
      </div>
      <div>
        <Card
          isHeading
          heading="Weather"
          isParagraph
          paragraph="You can expect the weather to be quite mild. Low will be 19° and high will be 25°"
        />
      </div>
      <div>
        <Card
          isHeading
          heading="Flights"
          isParagraph
          paragraph="The best option for you is with Delta Airlines with a layover in Oslo"
          isButton
        />
      </div>
      <div>
        <Card
          isHeading
          heading="Hotel"
          isParagraph
          paragraph="We recommend you stay at the Premiere Inn hotel in central Paris"
          isButton
        />
      </div>
    </div>
  );
}
