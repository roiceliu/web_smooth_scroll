import React from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
// import from icon's first 2 letter name, here is 'fa'
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        {/* NavLogo is a router component, so it needs 'to' */}
        <NavLogo to="/">Dollar</NavLogo>
        {/* this is the mobile version menu expansion icon */}
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            {/* link to section with "id" name --- smooth scroll */}
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="singup">Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
