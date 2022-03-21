import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentReg from "./Pages/StudentReg/index";
import CommentApp from "./Components/CommentApp/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommentApp />} />
          {/* <Route path="/stepper" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
