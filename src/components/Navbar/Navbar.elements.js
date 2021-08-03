import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
export const Nav = styled.nav`
  background-color: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2;
  position: sticky;
  top: 0;
  box-shadow: 10px 10px 15px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
export const NavbarConatiner = styled(Container)`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  color: white;
  ${Container}
`;
export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-self: flex-start;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;
export const MonbileMenu = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, -50%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 1000;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  list-style: none;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    background-color: #101522;
    transition: all 0.5s ease;
    opacity: 1;
    padding: 0rem 2rem;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 2px solid #4b59f7;
    transition: all 0.3s ease;
  }
  @media (max-width: 991px) {
    width: 100%;
    border: none;
    &:hover {
      border: none;
    }
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  height: 100%;
  padding: 0rem 1rem;
  font-size: 1.1rem;
  font-weight: 200;
  @media (max-width: 991px) {
    width: 100%;
    padding: 2rem;
    text-align: center;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
export const NavBtnItem = styled.li`
  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  text-decoration: none;
`;
