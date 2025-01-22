import React from "react";
import PlanFormSection from "./PlanFormSection";
import Image from "next/image";
import IMAGES from "../../../../../public/images";

export default function PlanFormAndImageSection() {
  return (
    <div className="w-full h-screen grid md:grid-cols-[45%_55%] grid-cols-1 m-auto items-center justify-center overflow-x-hidden">
      <PlanFormSection />
      <div className="w-full h-full rounded-3xl relative md:flex hidden flex-col items-center justify-center gap-72 py-10">
        <Image
          src={IMAGES.MAP}
          width={800}
          height={800}
          alt="CoverImage"
          className={` absolute inset-0 rounded-3xl w-[100%] h-[100%] m-auto`}
        />
      </div>
    </div>
  );
}
