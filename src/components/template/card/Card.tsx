import React from "react";
import MediumHeading from "../Header/headingMedium";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../button/button";
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
  return (
    <div>
      {isHeading && <MediumHeading variant="large">{heading}</MediumHeading>}
      <div
        className={`flex ${
          isButton ? "flex-col gap-y-2" : "flex-row"
        } gap-x-2 items-center justify-center rounded-2xl px-2 py-3 w-full text-black font-semibold bg-[#bbf7f7]`}
      >
        {!isParagraph ? (
          <>
            <MediumHeading variant={"medium"}>{to}</MediumHeading>
            <FaArrowRightLong />
            <MediumHeading variant="medium">{from}</MediumHeading>
          </>
        ) : (
          <MediumHeading variant="small">{paragraph}</MediumHeading>
        )}
        {isButton && <Button>Book</Button>}
      </div>
    </div>
  );
}
