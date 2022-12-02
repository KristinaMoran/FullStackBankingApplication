function AllData() {
  const ctx = React.useContext(UserContext);
  const rows = [];
  let i = 0;
  for (const row of ctx.users) {
    rows.push(
      <tr key={i}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.password}</td>
        <td>{row.balance}</td>
      </tr>
    );

    i++;
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

// function AllData(){
//   const ctx = React.useContext(UserContext);
//   return (
//     <>
//     <h5>All Data in Store</h5>
//     {JSON.stringify(ctx)}<br/>
//     </>
//   );
// }

// export default AllData;
