function User() {
  const ctx = React.useContext(UserContext);
  const user = ctx.loggedIn;

  const handleLogout = () => {
    ctx.updateUser(null);
    location.reload();
  };

  return user ? (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "4px 8px",
        backgroundColor: "lightgrey",
      }}
    >
      {user.email}
      <button onClick={handleLogout}>logout</button>
    </div>
  ) : null;
}
