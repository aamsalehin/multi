import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarConatiner,
  NavLogo,
  NavIcon,
  MonbileMenu,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnItem,
  NavBtnLink,
} from "./Navbar.elements";
import { Button } from "../../globalStyles";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const clickHandler = () => setClick(!click);
  const showBtn = () => {
    if (window.innerWidth <= 991) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showBtn();
  }, []);
  window.addEventListener("resize", showBtn);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarConatiner>
            <NavLogo to="/">
              <NavIcon></NavIcon>
              <p>salehin</p>
            </NavLogo>
            <MonbileMenu onClick={clickHandler}>
              {click ? <FaTimes /> : <FaBars />}
            </MonbileMenu>
            <NavMenu onClick={clickHandler} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services">services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">contact</NavLink>
              </NavItem>
              <NavBtnItem>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>sign up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button primary large big>
                      sign up
                    </Button>
                  </NavBtnLink>
                )}
              </NavBtnItem>
            </NavMenu>
          </NavbarConatiner>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
