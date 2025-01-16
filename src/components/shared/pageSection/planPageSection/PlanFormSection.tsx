"use client";
import Button from "@/components/template/button/button";
import InputWithHeadingSection from "@/components/template/form/input/InputWithHeadingSection";
import TravelersInput from "@/components/template/form/input/travelersInput";
import InputsData from "@/lib/inputsData";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

export default function PlanFormSection() {
  const initialValues = {
    flyingfrom: "New York City",
    flyingto: "Paris",
    fromdate: "2023-11-24",
    todate: "2023-12-05",
    budget: "5000",
  };
  type name = keyof typeof initialValues;
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-[65%] w-[80%] mx-auto py-5 flex flex-col items-center justify-center"
    >
      <TravelersInput />
      <div className="w-full">
        {InputsData.map((properties) => (
          <div
            key={properties.id}
            className={`${
              properties.id === 0
                ? "pt-6"
                : properties.id === 2
                ? "pt-6"
                : properties.id === 4
                ? "pt-6"
                : ""
            }`}
          >
            <InputWithHeadingSection
              name={properties.name}
              heading={properties.heading}
              value={values[properties.name as name]}
              type={properties.type}
              handlechange={handleChange}
              select={properties.select}
              insideData={properties.insideData}
            />
          </div>
        ))}
        <div className="pt-3">
          <Link href={"/trip"} >
            <Button type="submit">Plan My Trip!</Button>
          </Link>
        </div>
      </div>
    </form>
  );
}
