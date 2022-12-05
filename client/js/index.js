// import Withdraw from "./withdraw";
// import Home from "./home";
// import CreateAccount from "./createaccount";
// import Login from "./login";
// import Deposit from "./deposit";
// import AllData from "./alldata";

function Spa(props, state) {
  return (
    <HashRouter>
      <UpdateContext>
        <NavBar />
        <User />
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
        </div>
      </UpdateContext>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));

// export default Spa;
