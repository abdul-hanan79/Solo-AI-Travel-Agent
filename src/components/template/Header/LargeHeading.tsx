import styled from "styled-components";

interface largeHeadingTypes {
  variant?: string;
  color?: string;
  weight?: string;
}

const LargeHeading = styled.h2<largeHeadingTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${(props) =>
    props.color === "white"
      ? "white"
      : props.color === "green"
      ? "green"
      : props.color === "gray"
      ? "#111827"
      : "black"};
  font-size: ${(props) =>
    props.variant === "large"
      ? "50px"
      : props.variant === "extralarge"
      ? "60px"
      : "40px"};
  font-weight: ${(props) => (props.weight === "dark" ? "800" : "600")};
  text-align: center;
  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.variant === "large"
        ? "40px"
        : props.variant === "extralarge"
        ? "45px"
        : "40px"};
  }
  @media (max-width: 425px) {
    font-size: ${(props) =>
      props.variant === "large"
        ? "35px"
        : props.variant === "extralarge"
        ? "40px"
        : "24px"};
  }
`;

export default LargeHeading;
