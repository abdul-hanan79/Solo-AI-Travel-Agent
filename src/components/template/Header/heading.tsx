import styled from "styled-components";

interface HeadingType {
  color?: string;
  align?: string;
  weight?: string;
}

const Heading = styled.h2<HeadingType>`
  color: ${(props) => (props.color === "gray" ? "#374151" : "black")};
  font-weight: ${(props) =>
    props.weight === "light"
      ? "500"
      : props.weight === "medium"
      ? "600"
      : props.weight === "large"
      ? "700"
      : ""};
  text-align: ${(props) => (props.align === "left" ? "left" : "center")};
  padding-bottom: 4px;
`;

export default Heading;
