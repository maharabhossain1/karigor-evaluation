import "./App.css";
import StepContext from "./context/StepContext";
import RegForm from "./RegForm/RegForm";

function App() {
  return (
    <div>
      <StepContext>
        <RegForm />
      </StepContext>
    </div>
  );
}

export default App;
