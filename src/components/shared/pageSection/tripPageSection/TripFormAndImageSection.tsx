import React from "react";
import ScheduleSection from "./ScheduleSection";
import Image from "next/image";
import IMAGES from "../../../../../public/images";

export default function TripFormAndImageSection() {
  return (
    <div className="w-full h-screen grid md:grid-cols-[45%_55%] grid-cols-1 m-auto items-center justify-center overflow-x-hidden">
      <ScheduleSection />
      <div className="w-full h-full relative">
        <div className="w-full h-full m-auto relative md:flex hidden flex-col items-center justify-end">
          <Image
            src={IMAGES.TRIPBG}
            width={800}
            height={800}
            alt="CoverImage"
            className={` w-[95%] 2xl:h-[85%] xl:h-[70%] m-auto`}
          />
        </div>
        {/* <div className="w-full h-full absolute top-0 -left-1">
          <Image
            src={IMAGES.TRIPWAVE}
            alt="trip"
            width={200}
            height={200}
            className="w-[27%] h-full"
          />
        </div> */}
      </div>
    </div>
  );
}
