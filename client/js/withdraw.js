function Withdraw() {
  const ctx = React.useContext(UserContext);
  let inUser = ctx.loggedIn[0];
  const [update, setUpdate] = React.useState("false");
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(true);

  const handleTextChange = (event) => {
    setValue(event.target.value);
  };

  function handleWithdraw() {
    let balance = document.getElementById("balance").value;
    if (balance > 0 && inUser.user.balance >= balance && !isNaN(balance)) {
      inUser.user.balance -= Number(balance);
      setUpdate(true);
      setShow(false);
    } else {
      alert("Transaction Failed");
    }
  }

  return (
    <Card
      txtcolor="black"
      header="Withdraw"
      body={
        show ? (
          inUser ? (
            <>
              <h5>
                {update
                  ? "Balance: " + inUser.user.balance
                  : "Balance: " + inUser.user.balance}
              </h5>
              <h6>Withdraw Amount</h6>
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
                onClick={handleWithdraw}
              >
                Withdraw
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

// export default Withdraw;
