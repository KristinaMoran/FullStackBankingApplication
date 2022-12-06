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
        padding: "4px 10px 4px 8px",
        backgroundColor: "lightgrey",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "10px 10px 4px 8px",
          fontWeight: "bold",
        }}
      >
        user: {user.email}
      </span>
      <button type="button" class="btn btn-light" onClick={handleLogout}>
        Logout
      </button>
    </div>
  ) : null;
}
