import React from "react";

import { LogIn } from "../../components/Authentication/LogIn/LogIn";
import styled from "styled-components";

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const authentication: React.FC = ({ match }: any) => {
  return (
    <AuthWrapper>
      {match.path === "/login" ? <LogIn /> : "Please register"}
    </AuthWrapper>
  );
};
