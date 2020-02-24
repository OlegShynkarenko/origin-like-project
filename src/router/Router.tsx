import React from "react";
import { BrowserRouter } from "react-router-dom";

export const Router: React.FC = props => {
  return <BrowserRouter>{props.children}</BrowserRouter>;
};
