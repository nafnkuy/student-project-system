import "./Teacher.css";

function Teacher() { // สร้าง component Teacher
const user = JSON.parse(localStorage.getItem("user")); // ดึง user จาก localStorage

if (!user || user.role !== "teacher") { // ถ้าไม่มี user หรือ role ไม่ใช่ teacher
  window.location.href = "/"; // redirect กลับ login
  return null;
}

  return (
    <div className="teacher-layout">
      <div className="sidebar">
        <div>
          <h3>👨‍🏫 Teacher</h3>
          <p>{user?.name || "No user"}</p>
        </div>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear(); // ลบข้อมูล user
            window.location.href = "/"; // กลับหน้า login
          }}
        >
          Log out
        </button>
      </div>

      <div className="main">
        <div className="topbar">
          <h2>SPTC System</h2>
          <input className="search" placeholder="Search..." />
        </div>

        <div className="content-box"></div>
      </div>
    </div>
  );
}

export default Teacher;