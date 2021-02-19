import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  background: #0d0d0d;
  align-items: center;
  left: 0;
  top: 0;
  /* this shows the animation from top to bottom dropdown */
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  transition: all 0.3s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  /* font-size: 1.2rem; */
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.2rem;
`;

export const SidebarWrpper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  /* column each has 1 flex box width */
  grid-template-columns: 1fr;
  /* 6 rows, each 80px */
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: (6, 60px);
  }
`;

export const SidebarLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
