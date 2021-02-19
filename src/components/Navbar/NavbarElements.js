import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// this file uses styled components instead of css to add styles

//here .nav means this is a nav component in html: <nav>; `css regular styles`
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* this is for smooth scroll's bouncing offset, give next section to go top to the screen */
  margin-top: -80px;
  display: flex;
  justify-content: center; //horizontal alignment
  align-items: center;
  font-size: 1rem;
  /* stay on the top the webpage */
  position: sticky;
  top: 0px;
  z-index: 10;

  /* smaller screen size like tablet/mobile size, the nav bar with stick out from side with transition animation  */
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px; //top/bottom , left/right
  //refrain the width if at very large screen
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  /* Make NavLogo at start in its parent content --> NavbarContainer */
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    /* block starts a new line and takes up entire linear space */
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    /* centralize the icon: right, down */
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  /* flex put the list into horizontal line */
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  /* justify-content:center; */
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  /* when the current link is clicked, and the page is at the link's component, action is made */
  &.active {
    border-bottom: 3px, solid, #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap; //on same line
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  color: #010606;
  outline: none; //like border
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
