import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import MediumHeading from "../../Header/headingMedium";

interface InputWithHeading {
  name?: string;
  heading?: string;
  handlechange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value?: string;
  type?: string;
  select?: boolean;
  insideData?: {
    id: number;
    name: string;
    population: number;
    land_area: number;
    density: number;
    capital: string;
    currency: string;
    flag: string;
  }[];
}

export default function InputWithHeadingSection({
  name,
  heading,
  handlechange,
  value,
  type,
  select,
  insideData,
}: InputWithHeading) {
  const ref = useRef<HTMLDivElement>(null);
  const [click, setClick] = useState(false);
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setClick(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div className="w-full pt-4">
      <div className="w-full flex items-center justify-center rounded-3xl mx-auto py-1">
        <MediumHeading weight="medium" variant="med-small">
          {heading}
        </MediumHeading>
      </div>
      {select ? (
        <div
          ref={ref}
          onClick={() => setClick(true)}
          className={`${
            click ? "bg-extraalightgreen scale-105" : "bg-transparent"
          } border-green shadow-custom-2 border-[2.5px] transition-all duration-300 ease-linear font-semibold rounded-3xl text-[#000000de] w-full px-3 outline-none text-center`}
        >
          <select
            onChange={handlechange}
            className="w-full py-3 outline-none bg-transparent"
          >
            {insideData?.map((data) => (
              <option
                key={data.id}
                value={data.name}
                className="border-black border-[3px] py-3 bg-transparent text-center font-semibold rounded-3xl text-[#000000de] w-full px-2"
              >
                {data.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div
          ref={ref}
          className={`${
            click && "scale-105"
          } transition-all duration-300 ease-linear`}
          onClick={() => setClick(true)}
        >
          <Input
            color={click ? "lightgreen" : ""}
            name={name}
            type={type}
            value={value}
            onChange={handlechange}
          />
        </div>
      )}
    </div>
  );
}
