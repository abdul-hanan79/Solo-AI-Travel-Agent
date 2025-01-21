"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import MediumHeading from "../../Header/headingMedium";

export default function TravelersInput() {
  const Ref = useRef<HTMLDivElement>(null);
  const [travellers, setTravellers] = useState(1);
  const [customization, setCustomization] = useState(false);
  const handleCustomization = (e: MouseEvent) => {
    if (Ref.current && !Ref.current.contains(e.target as Node)) {
      setCustomization(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleCustomization);

    return () => {
      document.removeEventListener("mousedown", handleCustomization);
    };
  }, [Ref]);
  return (
    <div className="space-y-1 w-full">
      <div>
        <MediumHeading weight="medium" variant="med-small">
          Number of travellers
        </MediumHeading>
      </div>
      <div
        ref={Ref}
        onClick={() => setCustomization(true)}
        className={`flex ${
          customization ? "bg-extraalightgreen scale-105" : "bg-transparent"
        }  items-center shadow-custom-2  justify-between transition-all duration-300 ease-linear border-[2.5px] border-green rounded-full py-2 px-2`}
      >
        <div
          onClick={() => setTravellers(travellers - 1)}
          className="flex items-center justify-center cursor-pointer bg-lightgreen w-7 h-7 rounded-full"
        >
          <TiMinus className="text-white" />
        </div>
        <input
          type="number"
          value={travellers}
          onChange={(e) => setTravellers(Number(e.target.value))}
          className="text-[#000000de] outline-none font-semibold w-[20%] bg-transparent text-center"
        />
        <div
          onClick={() => setTravellers(travellers + 1)}
          className="flex items-center justify-center cursor-pointer bg-lightgreen w-7 h-7 rounded-full"
        >
          <FaPlus className="text-white" />
        </div>
      </div>
    </div>
  );
}
