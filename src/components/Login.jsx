import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="login">
      <Input type="email" placeHolder="Email" />
      <Input type="password" placeHolder="password" />
      <button type="submit"> Login</button>
    </form>
  );
}

export default Login;
