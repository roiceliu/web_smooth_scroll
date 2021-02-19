import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLinks,
  SidebarMenu,
  SidebarRoute,
  SidebarWrpper,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrpper>
        <SidebarMenu>
          <SidebarLinks to="about" onClick={toggle}>
            About
          </SidebarLinks>
          <SidebarLinks to="discover" onClick={toggle}>
            Discover
          </SidebarLinks>
          <SidebarLinks to="services" onClick={toggle}>
            Services
          </SidebarLinks>
          <SidebarLinks to="signup" onClick={toggle}>
            Sign Up
          </SidebarLinks>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrpper>
    </SidebarContainer>
  );
};

export default Sidebar;
