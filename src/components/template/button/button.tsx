import styled from "styled-components";

const Button = styled.button`
  position: relative;
  background-color: var(--lightgreen);
  border: 3px solid black;
  border-radius: 25px;
  width: 100%;
  padding: 8px 10px;
  font-size: larger;
  color: black;
  font-weight: 700;
  z-index: 1;
  overflow: hidden;
  &:after {
    content: "";
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 100%;
    right: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(
      to left,
      var(--extralightgreen),
      var(--lightgreen)
    );
    transition: all 0.3s ease;
    border-radius: 25px;
  }
  &:hover {
    color: black;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;
export default Button;
