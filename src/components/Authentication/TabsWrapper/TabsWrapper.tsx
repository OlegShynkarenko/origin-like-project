import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { paths } from "../../../router/paths";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.span`
  display: inline-block;
  border-bottom: 2px solid transparent;
  &:hover {
    border: none;
  }
`;

const Tabs = styled.div`
  font-size: 1rem;
  padding-top: 25px;
  padding-bottom: 25px;
  width: 400px;
  border-bottom: 1px solid gray;
  outline: none;
  ${LinkWrapper}:first-child {
    margin-right: 30px;
  }
`;

export const TabsWrapper: React.FC = () => {
  return (
    <Wrapper>
      <Tabs>
        <LinkWrapper>
          <NavLink
            to={paths.login}
            style={{ textDecoration: "none", color: "grey" }}
            activeStyle={{ color: "rgb(255, 171, 0)" }}
          >
            Log In
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink
            to={paths.register}
            style={{ textDecoration: "none", color: "grey" }}
            activeStyle={{ color: "rgb(255, 171, 0)" }}
          >
            Register
          </NavLink>
        </LinkWrapper>
      </Tabs>
    </Wrapper>
  );
};
