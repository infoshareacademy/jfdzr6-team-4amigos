import React from "react";
import { Container, ResetForm } from "./ForgotPasswordFormStyle";

const ForgotPasswordForm = ({ handleResetPassword }) => {
  /* const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  }; */
  return (
    <Container>
      <h2>Odzyskiwanie hasła</h2>
      <p>Za chwilę otrzymasz maila z linkiem do utworzenia nowego hasła</p>
      <ResetForm onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Wpisz swój email" name="email" />
          <button type="submit">Przypomnij hasło</button>
        </div>
      </ResetForm>
    </Container>
  );
};

export default ForgotPasswordForm;
