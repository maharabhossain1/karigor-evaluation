import React, { useState } from "react";
import StudentReg from "../Pages/StudentReg/index";

export const multiStepContext = React.createContext();

const StepContext = ({ children }) => {
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
        {children}
      </multiStepContext.Provider>
    </div>
  );
};
export default StepContext;
