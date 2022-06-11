import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import {loginUser} from "../../api/index"

const Login = () => {
  const navigate = useNavigate()
  // signInWithEmailAndPassword(auth, email, password)
  //    
  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target
    const {email, password} = form

    loginUser(email.value, password.value)
    // signInWithEmailAndPassword()
    //reset formularza
    //przeniesienie na "/"
    form.reset()
    navigate("/")

  }
  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
