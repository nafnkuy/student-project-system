import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Teacher from "./Teacher";
import Student from "./Student";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/student" element={<Student />} />
    </Routes>
  );
}

export default App;