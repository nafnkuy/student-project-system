import { useState } from "react";
import "./App.css";
import "./Login.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        if (data.user.role === "student") {
          window.location.href = "/student.html";
        } else {
          window.location.href = "/teacher.html";
        }
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

return (
  <div className="login-container">
    <div className="login-card">
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">
        Enter your username and password to login.
      </p>

      <input
        className="login-input"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
);
}

export default App;