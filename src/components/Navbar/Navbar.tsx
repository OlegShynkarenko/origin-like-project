import React from "react";
import { NavLink } from "react-router-dom";

import { StyledNavbarWrapper as NavbarWrapper } from "./NavbarWrapper";
import { LinkWrapper } from "./LinkWrapper";

export const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <div>
        <LinkWrapper>
          <NavLink to={`/access`} activeStyle={{ color: "red" }}>
            Access
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink exact={true} to="/" activeStyle={{ color: "red" }}>
            Shop
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to={`/help`} activeStyle={{ color: "red" }}>
            Help
          </NavLink>
        </LinkWrapper>
      </div>
      <div>
        <LinkWrapper>
          <NavLink to={`/auth/login`} activeStyle={{ color: "red" }}>
            Log In
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to={`/auth/register`} activeStyle={{ color: "red" }}>
            Register
          </NavLink>
        </LinkWrapper>
      </div>
    </NavbarWrapper>
  );
};
