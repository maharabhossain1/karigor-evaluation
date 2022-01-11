import React, { useState } from "react";
import StudentReg from "../Pages/StudentReg/index";

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
        <StudentReg />
      </multiStepContext.Provider>
    </div>
  );
};
export default StepContext;
