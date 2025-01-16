"use client";
import ToolCard from "@/components/template/card/ToolCard";
import MediumHeading from "@/components/template/Header/headingMedium";
import LargeHeading from "@/components/template/Header/LargeHeading";
import React from "react";
import IMAGES from "../../../../../public/images";

export default function ToolSection() {
  const data = [
    {
      id: 0,
      src: IMAGES.AIPOWERLEFT,
      heading: "Optimal Route Planning",
      paragraph:
        "Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort.",
    },
    {
      id: 1,
      src: IMAGES.TOOL2,
      heading: "Personalize Your Adventure",
      paragraph:
        "Shape your journey by freely adding, editing, or deleting activities from your itinerary.",
    },
    {
      id: 2,
      src: IMAGES.TOOL3,
      heading: "Local Cuisine Recommendations",
      paragraph:
        "Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds.",
    },
  ];
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
      <div className="w-[45%] mx-auto">
        <MediumHeading variant="med-small" color="gray">
          Say goodbye to the stress of planning and hello to personalized
          recommendations, efficient itineraries, and seamless dining
          experiences.
        </MediumHeading>
      </div>
      <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] mx-auto gap-x-6 pt-20">
        {data.map((data) => (
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
