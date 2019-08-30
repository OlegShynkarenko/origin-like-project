import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const NavbarWrapper = styled.div`
  min-width: 280px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  background: #000;
  box-sizing: border-box;

  a {
    display: block;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 10px;
    text-decoration: none;
    outline: none;
  }
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <div>
        <NavLink to={`/access`} activeStyle={{ color: "red" }}>
          Access
        </NavLink>
        <NavLink exact={true} to="/" activeStyle={{ color: "red" }}>
          Shop
        </NavLink>
        <NavLink to={`/help`} activeStyle={{ color: "red" }}>
          Help
        </NavLink>
      </div>
      <div>
        <NavLink to={`/login`} activeStyle={{ color: "red" }}>
          Log in
        </NavLink>
        <NavLink to={`/register`} activeStyle={{ color: "red" }}>
          Register
        </NavLink>
      </div>
    </NavbarWrapper>
  );
};
