function Student() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Student Page</h1>
      <p>Welcome {user.name}</p>
    </div>
  );
}

export default Student;