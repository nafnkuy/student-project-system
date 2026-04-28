import "./Student.css";

function Student() {
const user = JSON.parse(localStorage.getItem("user"));

if (!user || user.role !== "student") {
  window.location.href = "/";
  return null;
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
            localStorage.clear();
            window.location.href = "/";
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