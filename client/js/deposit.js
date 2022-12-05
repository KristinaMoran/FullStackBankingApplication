function Deposit() {
  const ctx = React.useContext(UserContext);
  let inUser = ctx.loggedIn;

  const [update, setUpdate] = React.useState("false");
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(true);

  const handleTextChange = (event) => {
    setValue(event.target.value);
  };

  async function handleDeposit() {
    // let balance = document.getElementById("balance").value;
    // if (balance > 0 && !isNaN(balance)) {
    //   inUser.user.balance += Number(balance);
    //   setUpdate(true);
    //   setShow(false);
    // } else {
    //   alert("Must be a positive number");
    // }
    const response = await postData("/deposit", {
      amount: value,
      balance: inUser.balance,
      email: inUser.email,
    });
    console.log(response);
    if (response) {
      console.log("success");
      ctx.loggedIn.balance = response.balance;
      setShow(false);
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
                  ? "Balance: " + inUser.balance
                  : "Balance: " + inUser.balance}
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
          "Success! Balance: $" + inUser.balance
        )
      }
    />
  );
}

// export default Deposit;
