import React from "react";
import Input from "../UI/Input";

const Login = () => {
  return (
    <div>
      <form>
        <div>Login Form</div>
        <Input label={"Username(PAN No.)"} important />
      </form>
    </div>
  );
};

export default Login;
