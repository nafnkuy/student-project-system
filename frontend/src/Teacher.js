import "./Teacher.css";

function Teacher() {
const user = JSON.parse(localStorage.getItem("user"));

if (!user || user.role !== "teacher") {
  window.location.href = "/";
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
            localStorage.clear();
            window.location.href = "/";
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