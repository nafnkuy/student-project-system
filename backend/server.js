const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// API LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "student" && password === "1234") {
    return res.json({
      token: "student-token",
      user: { name: "Student A", role: "student" }
    });
  }

  if (username === "teacher" && password === "1234") {
    return res.json({
      token: "teacher-token",
      user: { name: "Teacher A", role: "teacher" }
    });
  }

  res.status(401).json({ message: "Invalid login" });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});