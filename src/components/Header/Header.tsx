import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-image: linear-gradient(
    to right top,
    #0f1927,
    #2a2145,
    #5d1950,
    #8e003e,
    #aa1212
  );
  min-height: 60px;
  padding: 10px 20px;
  color: #fff;
`;

export const Header: React.FC = () => {
  return <HeaderWrapper>Header</HeaderWrapper>;
};
