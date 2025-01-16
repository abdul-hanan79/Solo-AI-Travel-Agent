import React from "react";
import PlanFormSection from "./PlanFormSection";
import PlanPicSection from "./PlanPicSection";
import ScheduleSection from "../tripPageSection/ScheduleSection";

interface FormAndImageSectionType {
  forPage?: string;
}

export default function FormAndImageSection({
  forPage,
}: FormAndImageSectionType) {
  return (
    <div className="w-full h-full grid md:grid-cols-[45%_55%] grid-cols-1">
      {forPage === "plan" ? (
        <PlanFormSection />
      ) : forPage === "trip" ? (
        <ScheduleSection />
      ) : (
        ""
      )}
      <PlanPicSection />
    </div>
  );
}
