import React from "react";
import RegForm from "../../Components/RegForm/RegForm";
import StepContext from "../../context/StepContext";

export default function index() {
  return (
    <div>
      <StepContext>
        <RegForm />
      </StepContext>
    </div>
  );
}
