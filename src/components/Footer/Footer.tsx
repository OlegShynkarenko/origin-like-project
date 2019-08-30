import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  min-height: 100px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-image: linear-gradient(
    to right top,
    #ff009b,
    #c01667,
    #821b3f,
    #471721,
    #120606
  );
`;

export const Footer: React.FC = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};
