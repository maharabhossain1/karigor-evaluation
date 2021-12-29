import React, { useState } from "react";
import RegForm from "../RegForm/RegForm";

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [courrentStep, setCourrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  return (
    <div>
      <multiStepContext.Provider
        value={{
          courrentStep,
          setCourrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <RegForm />
      </multiStepContext.Provider>
    </div>
  );
};
export default StepContext;
