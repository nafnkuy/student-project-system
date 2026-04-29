import { useState } from "react"; // import hook สำหรับเก็บ state
import { useNavigate } from "react-router-dom"; // import สำหรับ redirect หน้า
import "./Login.css"; // import CSS

function Login() { // สร้าง component Login
  const [username, setUsername] = useState(""); // สร้าง state เก็บ username (ค่าเริ่มต้นเป็นค่าว่าง)
  const [password, setPassword] = useState(""); // สร้าง state เก็บ password
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้าแบบไม่ reload

  const handleLogin = async () => { // ฟังก์ชันสำหรับกดปุ่ม login
    try {
      const res = await fetch("http://localhost:3001/login", { // ส่ง request ไป backend ที่ /login
        method: "POST", // ใช้ method POST
        headers: {
          "Content-Type": "application/json"
        }, // บอกว่า body เป็น JSON
        body: JSON.stringify({ username, password })
      }); // แปลง username/password เป็น JSON แล้วส่งไป

      const data = await res.json(); // รับ response จาก backend แล้วแปลงเป็น JSON

      if (res.ok) { // ถ้า status = 200 (login สำเร็จ)
        localStorage.setItem("user", JSON.stringify(data.user)); // เก็บข้อมูล user ลง localStorage
        
        if (data.user.role === "student") { // ถ้า role เป็น student ไปหน้า student
          navigate("/student");
        } else { // ถ้าไม่ใช่ student (เช่น teacher) ไปหน้า teacher
          navigate("/teacher");
        }
      } else { // ถ้า login ไม่สำเร็จ แสดง error
        alert(data.message); 
      }
    } catch (err) {
      console.error(err); // แสดง error ใน console
      alert("Server error"); // แจ้งว่า server มีปัญหา
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Enter your username and password to login.</p>

        <input
          className="login-input"
          placeholder="Username"
          value={username} // bind ค่า username
          onChange={(e) => setUsername(e.target.value)} // อัปเดตค่า username เมื่อพิมพ์
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password} // bind ค่า password
          onChange={(e) => setPassword(e.target.value)} // อัปเดต password
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;