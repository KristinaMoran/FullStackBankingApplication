function Deposit() {
  const ctx = React.useContext(UserContext);
  let inUser = ctx.loggedIn[0];
  const [update, setUpdate] = React.useState("false");
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(true);

  const handleTextChange = (event) => {
    setValue(event.target.value);
  };

  function handleDeposit() {
    let balance = document.getElementById("balance").value;
    if (balance > 0 && !isNaN(balance)) {
      inUser.user.balance += Number(balance);
      setUpdate(true);
      setShow(false);
    } else {
      alert("Must be a positive number");
    }
  }

  return (
    <Card
      txtcolor="black"
      header="Deposit"
      body={
        show ? (
          inUser ? (
            <>
              <h5>
                {update
                  ? "Balance: " + inUser.user.balance
                  : "Balance: " + inUser.user.balance}
              </h5>
              <h6>Deposit Amount</h6>
              <input
                type="number"
                width="200"
                id="balance"
                onChange={handleTextChange}
                value={value}
              ></input>
              <button
                type="submit"
                disabled={value ? false : true}
                className="btn btn-light"
                onClick={handleDeposit}
              >
                Deposit
              </button>
            </>
          ) : (
            "Please Log In"
          )
        ) : (
          "Success! Balance: $" + inUser.user.balance
        )
      }
    />
  );
}
