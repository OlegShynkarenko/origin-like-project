import React from "react";
import styled from "styled-components";

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
  }
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <div>
        <a href="/">Access</a>
        <a href="/">Shop</a>
        <a href="/">Help</a>
      </div>
      <div>
        <a href="/">Log in</a>
        <a href="/">Register</a>
      </div>
    </NavbarWrapper>
  );
};
