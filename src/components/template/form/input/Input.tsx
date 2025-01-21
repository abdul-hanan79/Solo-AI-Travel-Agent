import styled from "styled-components";

interface InputTypes {
  color?: string;
}

const Input = styled.input<InputTypes>`
  border: 2.5px solid var(--green);
  border-radius: 25px;
  color: #000000de;
  background-color: ${(props) =>
    props.color === "lightgreen" ? "var(--extraalightgreen)" : "transparent"};
  font-weight: 600;
  padding: 8px;
  text-align: center;
  font-size: 18px;
  width: 100%;
  outline: none;
  caret-color: green;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 15px 3px,
    rgba(0, 0, 0, 0.05) 0px 14px 6px -2px;
`;
export default Input;
