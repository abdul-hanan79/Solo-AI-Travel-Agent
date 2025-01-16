"use client";
import Image from "next/image";
import React from "react";
import IMAGES from "../../../../public/images";
import MediumHeading from "../Header/headingMedium";

interface ToolCardTypes {
  src?: string;
  heading?: string;
  paragraph?: string;
}

export default function ToolCard({ src, heading, paragraph }: ToolCardTypes) {
  return (
    <div className="border px-4 py-4 rounded-md flex flex-col items-start gap-y-1 justify-center">
      <div className="flex items-start justify-start w-full gap-x-2">
        <div className="">
          <Image
            src={src || IMAGES.AIPOWERLEFT}
            width={200}
            height={200}
            alt="Tool Reference"
            className="w-[90px] h-[80px]"
          />
        </div>
        <div className="pt-2">
          <MediumHeading variant="medium" weight="medium" align="left">
            {heading}
          </MediumHeading>
        </div>
      </div>
      <div className="w-full">
        <MediumHeading color="gray" align="left">
          {paragraph}
        </MediumHeading>
      </div>
    </div>
  );
}
