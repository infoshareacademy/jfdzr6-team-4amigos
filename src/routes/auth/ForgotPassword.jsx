import React from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api";
import ForgotPasswordForm from "../../components/forgotPasswordForm/ForgotPasswordForm";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const { email } = form;

    resetPassword(email.value);

    form.reset();
    navigate("/login");
  };

  return <ForgotPasswordForm handleResetPassword={handleResetPassword} />;
};

export default ForgotPassword;
