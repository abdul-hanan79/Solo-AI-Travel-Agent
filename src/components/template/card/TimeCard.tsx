import React from "react";
import { IconType } from "react-icons";

interface timecardtype {
  text: string;
  Icon: IconType;
  reverse?: boolean;
}

export default function TimeCard({
  text,
  Icon,
  reverse = false,
}: timecardtype) {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } gap-x-2 items-center hover:scale-105 transition-all duration-300 justify-center shadow-2xl rounded-2xl px-2 py-2.5 w-full text-black font-semibold bg-[#bbf7f7]`}
    >
      <div>
        <Icon />
      </div>
      <div>{text}</div>
    </div>
  );
}
