import React from "react";

export const authentication: React.FC = ({ match }: any) => {
  return (
    <div>{match.path === "/login" ? "Please Log In" : "Please register"}</div>
  );
};
