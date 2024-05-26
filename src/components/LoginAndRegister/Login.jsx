import React from "react";
import Input from "../UI/Input";
import FormLayout from "../UI/FormLayout";

const Login = () => {
  return (
    <div>
      <form>
        <FormLayout title={"SignUp Form"}>
          <Input
            label={"Username(PAN No.)"}
            placeholder={"username"}
            important
          />
        </FormLayout>
      </form>
    </div>
  );
};

export default Login;
