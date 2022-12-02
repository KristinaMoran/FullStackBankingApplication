function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          Bank of Scrooge
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/CreateAccount/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Create a new account"
              >
                Create Account
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Log into your account"
            >
              <a className="nav-link" href="#/login/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/deposit/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Deposit to your account"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/withdraw/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Withdraw from your account"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/alldata/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="View users"
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

// export default NavBar;
