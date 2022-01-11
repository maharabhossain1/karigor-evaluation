import "./App.css";
import StepContext from "./context/StepContext";
import StudentReg from "./Pages/StudentReg/index";

function App() {
  return (
    <div>
      <StepContext>
        <StudentReg />
      </StepContext>
    </div>
  );
}

export default App;
