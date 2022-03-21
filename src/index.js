import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StepContext from "./context/StepContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <StepContext>
      <App />
    </StepContext>
  </React.StrictMode>,
  document.getElementById("root")
);
