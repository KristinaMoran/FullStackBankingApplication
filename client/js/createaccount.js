function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    let isValid = true;
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label == "email") {
      isValid = String(field)
        .toLowerCase()
        .match(/\S+@\S+\.\S+/);
      setStatus(isValid ? "" : "Email is invalid");
    }
    if (label == "password") {
      isValid = field.length >= 6;
      setStatus(isValid ? "" : "Password is too short");
    }
    if (label == "name") {
      isValid = field.length >= 2;
      setStatus(isValid ? "" : "Name is too short");
    }
    if (!isValid) {
      console.log(status);
      return false;
    } else {
      return true;
    }
  }

  async function handleCreate() {
    console.log(name, email, password);
    // if (!validate(name, "name")) return;
    // if (!validate(email, "email")) return;
    // if (!validate(password, "password")) return;
    const response = await postData("/create", { email, password });
    console.log("response", response);
    if (response) {
      setShow(false);
      ctx.users.push(response);
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="dark blue"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              disabled={email && password ? false : true}
              className="btn btn-light"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

// export default CreateAccount;
