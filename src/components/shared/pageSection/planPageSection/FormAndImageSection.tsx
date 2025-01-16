import React from "react";
import PlanFormSection from "./PlanFormSection";
import ScheduleSection from "../tripPageSection/ScheduleSection";
import Image from "next/image";
import IMAGES from "../../../../../public/images";

interface FormAndImageSectionType {
  forPage?: string;
}

export default function FormAndImageSection({
  forPage,
}: FormAndImageSectionType) {
  return (
    <div className="w-full h-full grid md:grid-cols-[45%_55%] grid-cols-1">
      {forPage === "plan" ? (
        <PlanFormSection />
      ) : forPage === "trip" ? (
        <ScheduleSection />
      ) : (
        ""
      )}
      <div className="w-full h-full rounded-3xl relative md:flex hidden flex-col items-center justify-center gap-72 py-10">
        <Image
          src={IMAGES.MAP}
          width={800}
          height={800}
          alt="CoverImage"
          className={` absolute inset-0 rounded-3xl w-[100%] ${ forPage === "trip" ? "h-[70%]" :"h-[100%]" } m-auto`}
        />
      </div>
    </div>
  );
}
