import React from "react";
import Input from "./Input";
import Heading from "../../Header/heading";

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
    <div className="w-full pt-3">
      <Heading weight="medium">{heading}</Heading>
      {select ? (
        <select
          onChange={handlechange}
          className="border-black  border-[3px] py-3 bg-transparent font-semibold rounded-3xl text-black w-full"
        >
          {insideData?.map((data) => (
            <option
              key={data.id}
              value={data.name}
              className="border-black border-[3px] py-3 bg-transparent text-center font-semibold rounded-3xl text-black w-full"
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
