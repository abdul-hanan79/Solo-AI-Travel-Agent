import React from "react";
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
  return (
    <div className="w-full pt-4">
      <div className="w-full flex items-center justify-center rounded-3xl mx-auto py-1">
        <MediumHeading weight="medium" variant="med-small">
          {heading}
        </MediumHeading>
      </div>
      {select ? (
        <select
          onChange={handlechange}
          className="border-green shadow-custom-2 border-[2.5px] py-3 bg-transparent font-semibold rounded-3xl text-[#000000de] w-full px-2 outline-none text-center"
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
      ) : (
        <Input name={name} type={type} value={value} onChange={handlechange} />
      )}
    </div>
  );
}
