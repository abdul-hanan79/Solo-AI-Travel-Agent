import React, { useRef } from "react";
import MediumHeading from "../Header/headingMedium";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../button/button";
import { motion, useInView } from "framer-motion";
interface cardType {
  to?: string;
  from?: string;
  isHeading?: boolean;
  heading?: string;
  isParagraph?: boolean;
  isButton?: boolean;
  paragraph?: string;
}

export default function Card({
  to,
  from,
  isHeading = false,
  heading,
  isParagraph = false,
  paragraph,
  isButton = false,
}: cardType) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: 0.2, type: "tween" }}
      ref={ref}
      className="space-y-2 "
    >
      {isHeading && (
        <MediumHeading variant="large" weight="large">
          {heading}
        </MediumHeading>
      )}
      <div
        className={`flex ${
          isButton ? "flex-col gap-y-2" : "flex-row"
        } gap-x-2 hover:scale-105 transition-all duration-300 ease-in-out items-center justify-center rounded-2xl px-5 py-5 w-full text-black font-semibold shadow-custom bg-[#bbf7f7]`}
      >
        {!isParagraph ? (
          <>
            <MediumHeading variant={"medium"}>{to}</MediumHeading>
            <FaArrowRightLong />
            <MediumHeading variant="medium">{from}</MediumHeading>
          </>
        ) : (
          <MediumHeading
            className={`${isButton && "py-4 px-2"} py-3 px-2`}
            variant="small"
          >
            {paragraph}
          </MediumHeading>
        )}
        {isButton && <Button>Book</Button>}
      </div>
    </motion.div>
  );
}
