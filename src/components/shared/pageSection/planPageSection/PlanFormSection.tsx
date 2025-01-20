"use client";
import Button from "@/components/template/button/button";
import InputWithHeadingSection from "@/components/template/form/input/InputWithHeadingSection";
import TravelersInput from "@/components/template/form/input/travelersInput";
import InputsData from "@/lib/inputsData";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
export default function PlanFormSection() {
  const Router = useRouter();
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
      Router.push("/trip");
    },
  });

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
      onSubmit={handleSubmit}
      className="xl:w-[75%] w-[90%] mx-auto py-10 flex flex-col items-center justify-center"
    >
      <TravelersInput />
      <div className="w-full">
        <div
          className={`grid md:grid-cols-2 grid-cols-1 md:gap-y-6 md:gap-x-4 md:py-6 items-center justify-center w-full`}
        >
          {InputsData.map((properties) => (
            <motion.div
              initial={
                properties.id === 0
                  ? { x: -300 }
                  : properties.id === 1
                  ? { x: 200 }
                  : properties.id === 2
                  ? { x: -300 }
                  : properties.id === 3
                  ? { x: 200 }
                  : {}
              }
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 35 }}
              key={properties.id}
              className={` 
                ${properties.colSpan && "md:col-span-2"}
                ${
                  properties.id === 0
                    ? "md:pt-0 pt-5"
                    : properties.id === 2
                    ? "md:pt-0 pt-7"
                    : properties.id === 4
                    ? "md:pt-0 pt-7"
                    : ""
                }
                  `}
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
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-5"
        >
          <Button type="submit">Plan My Trip!</Button>
        </motion.div>
      </div>
    </motion.form>
  );
}
