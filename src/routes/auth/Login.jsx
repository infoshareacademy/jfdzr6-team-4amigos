import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import { loginUser } from "../../api/index";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form;

    await loginUser(email.value, password.value);

    form.reset();
    navigate("/");
  };
  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
