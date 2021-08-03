import styled, { createGlobalStyle } from "styled-components";
const globalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 50px;
  @media (max-width: 991px) {
    padding: 0px 30px;
  }
`;
export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 0.125rem;
  cursor: pointer;
  white-space: nowrap;
  color: white;
  background-color: ${({ primary }) => (primary ? "#4b59f7" : "#0467fb")};
  font-size: ${({ big }) => (big ? "1.25rem" : "1rem")};
  padding: ${({ large }) => (large ? ".75rem 4rem" : ".5rem 1.25rem")};
  position: relative;
  overflow: hidden;
  z-index: 10;
  &:hover {
    transition: all 0.3s ease-out;
    color: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")};
  }
  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: -1;
    top: 0;
    left: -100%;
  }

  &:hover::before {
    transition: all 0.3s ease-out;
    left: 0;
    /* background-color: #fff;
    color: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")}; */
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;
export default globalStyles;
