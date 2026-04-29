import "./Student.css"; // import CSS

function Student() { // สร้าง component Student
const user = JSON.parse(localStorage.getItem("user"));
// ดึงข้อมูล user จาก localStorage แล้วแปลง JSON → object
if (!user || user.role !== "student") { // ถ้าไม่มี user หรือ role ไม่ใช่ student
  window.location.href = "/"; // redirect กลับหน้า login
  return null; // ไม่ render อะไรเลย
}

  return (
    <div className="student-layout">
      
      <div className="student-sidebar">
        <div>
          <h3>🎓 Student</h3>
          <p>{user?.name}</p>
        </div>

        <button
          className="student-logout"
          onClick={() => {
            localStorage.clear(); // ลบข้อมูลทั้งหมดใน localStorage
            window.location.href = "/"; // กลับหน้า login
          }}
        >
          Log out
        </button>
      </div>

      <div className="student-main">
        <div className="student-topbar">
          <h2>SPTC System</h2>
          <input placeholder="Search..." />
        </div>

        <div className="student-content"></div>
      </div>

    </div>
  );
}

export default Student;