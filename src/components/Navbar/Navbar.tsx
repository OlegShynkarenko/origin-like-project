import React from "react";
import { NavLink } from "react-router-dom";

import { StyledNavbarWrapper as NavbarWrapper } from "./NavbarWrapper";
import { LinkWrapper } from "./LinkWrapper";
import { paths } from "../../router/paths";
import { State } from "../Authentication/types/logIn";
import { connect } from "react-redux";

const navbar: React.FC = (props: any) => {
  return (
    <NavbarWrapper>
      <div>
        <LinkWrapper>
          <NavLink to={paths.access} activeStyle={{ color: "red" }}>
            Access
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink exact={true} to="/" activeStyle={{ color: "red" }}>
            Shop
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to={paths.help} activeStyle={{ color: "red" }}>
            Help
          </NavLink>
        </LinkWrapper>
      </div>
      <div>
        {props.login.auth.user ? (
          <>
            <LinkWrapper>
              <NavLink to="/profile" activeStyle={{ color: "red" }}>
                Profile
              </NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink to={paths.login} activeStyle={{ color: "red" }}>
                Log out
              </NavLink>
            </LinkWrapper>
          </>
        ) : (
          <>
            <LinkWrapper>
              <NavLink to={paths.login} activeStyle={{ color: "red" }}>
                Log In
              </NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink to={paths.register} activeStyle={{ color: "red" }}>
                Register
              </NavLink>
            </LinkWrapper>
          </>
        )}
      </div>
    </NavbarWrapper>
  );
};

function mapStateToProps(state: State) {
  return state;
}

export const Navbar = connect(
  mapStateToProps,
  null
)(navbar);
