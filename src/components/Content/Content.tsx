import React from "react";

export const Content: React.FC = props => {
  return (
    <div style={{ color: "#000", background: "#e5e8f0" }}>{props.children}</div>
  );
};
