import { Routes, Route } from "react-router-dom"; 
// import component สำหรับจัดการ routing (เปลี่ยนหน้า)
import Login from "./Login"; // import หน้า Login
import Teacher from "./Teacher"; // import หน้า Teacher
import Student from "./Student"; // import หน้า Student
 
function App() {
  // สร้าง component หลักของแอป
  return (
    <Routes> {/* กำหนดเส้นทางของแต่ละหน้า */}
      <Route path="/" element={<Login />} /> {/* ถ้า URL = / ให้แสดงหน้า Login */}
      <Route path="/teacher" element={<Teacher />} /> {/* ถ้า URL = /teacher ให้แสดงหน้า Teacher */}
      <Route path="/student" element={<Student />} /> {/* ถ้า URL = /student ให้แสดงหน้า Student */}
    </Routes>
  );
}

export default App; // export component ไปใช้ในไฟล์อื่น