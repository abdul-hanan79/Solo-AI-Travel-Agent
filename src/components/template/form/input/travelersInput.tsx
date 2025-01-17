"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import MediumHeading from "../../Header/headingMedium";

export default function TravelersInput() {
  const [travellers, setTravellers] = useState(1);
  return (
    <div className="space-y-1 w-full">
      <div>
        <MediumHeading weight="medium" variant="med-small">
          Number of travellers
        </MediumHeading>
      </div>
      <div className="flex items-center shadow-custom-f2  justify-between border-[2.5px] border-green rounded-full py-2 px-2">
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
