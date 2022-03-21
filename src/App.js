import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentReg from "./Pages/StudentReg/index";
import CommentApp from "./Components/CommentApp/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<CommentApp />} /> */}
          {/* <Route path="stepper" element={<StudentReg />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
