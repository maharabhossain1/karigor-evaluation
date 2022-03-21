import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StepContext from "./context/StepContext";

ReactDOM.render(
  <>
    <StepContext>
      <App />
    </StepContext>
  </>,
  document.getElementById("root")
);
