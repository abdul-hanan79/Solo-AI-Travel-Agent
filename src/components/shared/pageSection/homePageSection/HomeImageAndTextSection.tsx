import Heading from "@/components/template/Header/heading";
import MediumHeading from "@/components/template/Header/headingMedium";
import Image from "next/image";
import React from "react";
import IMAGES from "../../../../../public/images";

interface HomeImageAndTextSectionType {
  heading?: string;
  paragraph?: string;
  src?: string;
  reverse?: boolean;
}

export default function HomeImageAndTextSection({
  heading,
  paragraph,
  src,
  reverse,
}: HomeImageAndTextSectionType) {
  return (
    <div
      className={`w-[80%] flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col  items-center justify-between py-8`}
    >
      <div className="md:w-[45%] w-full space-y-4">
        <div className="bg-extralightgreen xl:w-[50%] lg:w-[65%]">
          <MediumHeading variant="extra-medium" weight="large">
            {heading}
          </MediumHeading>
        </div>
        <Heading color="gray" align="left" weight="light">
          {paragraph}
        </Heading>
      </div>
      <div
        className={`md:w-[55%] w-full flex items-center justify-center ${
          !reverse && "pl-14"
        } `}
      >
        <Image
          src={src || IMAGES.AIPOWERRIGHT}
          width={400}
          height={400}
          alt="OutSoruced"
          className="w-[250px] h-[250px]"
        />
      </div>
    </div>
  );
}
