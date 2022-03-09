import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

/* export const Nav = styled.nav`
  background: #fff;
  height: 60px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 2;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`; */

export const BaseButton = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  white-space: nowrap;
  background: #fff;
  margin-left: 12px;
  color: #ff414d;
  border: none;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff414d;
    color: #fff;
    outline: none;
  }
`;
