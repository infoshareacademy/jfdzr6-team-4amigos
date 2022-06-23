import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import { loginUser } from "../../api/index";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form;

    loginUser(email.value, password.value);
    if (!context) {
      throw Error("useAuthContext must be used within a AuthProvider");
    }

    form.reset();
    navigate("/");
    return context;
  };
  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
