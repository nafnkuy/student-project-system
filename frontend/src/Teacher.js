function Teacher() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Teacher Page</h1>
      <p>Welcome {user.name}</p>
    </div>
  );
}

export default Teacher;