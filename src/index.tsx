import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "@atlaskit/css-reset";

import Application from "./App/App";
import { store } from "store";

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
