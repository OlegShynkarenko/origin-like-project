import React from "react";

import styled from "styled-components";
import AuthComponent from "../../components/Authentication/Authentication";

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const authentication: React.FC = ({ match, history }: any) => {
  return (
    <AuthWrapper>
      <AuthComponent history={history} path={match.path} />
    </AuthWrapper>
  );
};
