import styled from "styled-components";

interface MediumHeadingTypes {
  variant?: string;
  color?: string;
  weight?: string;
  align?: string;
}

const MediumHeading = styled.h2<MediumHeadingTypes>`
  color: ${(props) =>
    props.color === "white"
      ? "white"
      : props.color === "gray"
      ? "#374151"
      : "black"};
  font-size: ${(props) =>
    props?.variant === "medium"
      ? "20px"
      : props.variant === "extra-medium"
      ? "25px"
      : props.variant === "large"
      ? "30px"
      : props.variant === "small"
      ? "16px"
      : props.variant === "extra-large"
      ? "40px"
      : props.variant === "med-small"
      ? "18px"
      : ""};
  font-weight: ${(props) =>
    props.weight === "light"
      ? "500"
      : props.weight === "medium"
      ? "600"
      : props.weight === "large"
      ? "700"
      : ""};
  text-align: ${(props) => (props.align === "left" ? "left" : "center")};
`;
export default MediumHeading;
