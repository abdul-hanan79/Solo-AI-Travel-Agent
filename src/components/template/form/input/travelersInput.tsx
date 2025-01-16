"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

export default function TravelersInput() {
  const [travellers, setTravellers] = useState(1);
  return (
    <div className="space-y-1 w-full">
      <div>
        <h2 className="text-black font-semibold text-center">
          Number of travellers
        </h2>
      </div>
      <div className="flex items-center justify-between border-[3px] border-black rounded-full py-2 px-2">
        <div
          onClick={() => setTravellers(travellers - 1)}
          className="flex items-center justify-center cursor-pointer bg-black w-7 h-7 rounded-full"
        >
          <TiMinus className="text-white" />
        </div>
        <input
          type="number"
          value={travellers}
          onChange={(e) => setTravellers(Number(e.target.value))}
          className="text-black font-semibold w-[20%] bg-transparent text-center"
        />
        <div
          onClick={() => setTravellers(travellers + 1)}
          className="flex items-center justify-center cursor-pointer bg-black w-7 h-7 rounded-full"
        >
          <FaPlus className="text-white" />
        </div>
      </div>
    </div>
  );
}
