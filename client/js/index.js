// import Withdraw from "./withdraw";
// import Home from "./home";
// import CreateAccount from "./createaccount";
// import Login from "./login";
// import Deposit from "./deposit";
// import AllData from "./alldata";

function Spa(props, state) {
  return (
    <HashRouter>
      <UserContext.Provider
        value={{
          users: [
            {
              name: "kristina",
              email: "kristina@mit.edu",
              password: "password123",
              balance: 100,
            },
          ],
          loggedIn: null,
        }}
      >
        <NavBar />
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));

// export default Spa;
