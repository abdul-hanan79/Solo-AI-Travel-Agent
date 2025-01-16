"use client";
import ToolCard from "@/components/template/card/ToolCard";
import MediumHeading from "@/components/template/Header/headingMedium";
import LargeHeading from "@/components/template/Header/LargeHeading";
import React from "react";
import ToolCardData from "@/lib/ToolCardData";

export default function ToolSection() {
  return (
    <div className="pt-24">
      <div>
        <MediumHeading variant="medium">
          <p className="text-green">AI Travel Agent</p>
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
      <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] mx-auto gap-6 pt-20">
        {ToolCardData.map((data) => (
          <div key={data.id}>
            <ToolCard
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
