import React from "react";
import Login from "./Login";

var isLoggedIn = false;
var userName = "Abdullah";

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1> {`Hello ${userName}`}</h1> : <Login />}
    </div>
  );
}

export default App;
