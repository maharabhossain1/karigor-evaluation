import { useContext } from "react";
import { multiStepContext } from "../context/StepContext";

const useStepStates = () => {
  const stepStates = useContext(multiStepContext);
  return stepStates;
};

export default useStepStates;
