import React from "react";
import colors from "../../utils/colors";

export const Content: React.FC = props => {
  return (
    <div style={{ color: colors.N800, background: colors.N20 }}>
      {props.children}
    </div>
  );
};
