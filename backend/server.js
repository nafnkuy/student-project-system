const express = require("express");
// import express framework สำหรับสร้าง server และ API
const cors = require("cors");
// import cors เพื่ออนุญาตให้ frontend (port อื่น) เรียก API ได้

const app = express();
// สร้าง instance ของ express (ตัว server)

app.use(cors()); // เปิดใช้งาน CORS (ให้ React ที่รันคนละ port เรียก API ได้)
app.use(express.json());
// middleware สำหรับแปลง request body (JSON → object) ทำให้ใช้ req.body ได้

// สร้าง API สำหรับ login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  //ดึง username และ password จาก request body

  //กรณี student
  if (username === "student" && password === "1234") { //เช็คว่าตรงกับ student ไหม
    return res.json({ //ส่ง response กลับเป็น JSON
      token: "student-token", //mock token (ยังไม่ใช่ JWT จริง)
      user: { name: "Student A", role: "student" }
    });
  }

  //กรณี teacher
  if (username === "teacher" && password === "1234") {
    return res.json({
      token: "teacher-token",
      user: { name: "Teacher A", role: "teacher" }
    });
  }

  //กรณี login ไม่ผ่าน
  res.status(401).json({ message: "Invalid login" });
});

app.listen(3001, () => { //สั่งให้ server รันที่ port 3001
  console.log("Server running on http://localhost:3001"); //แสดง log ใน console
});