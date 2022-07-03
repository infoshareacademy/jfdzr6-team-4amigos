import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api";
import RegisterFirstStep from "./RegisterFirstStep";
import RegisterStepTwo from "./RegisterStepTwo";
import RegisterStepThree from "./RegisterStepThree";

const Register = () => {
  const defaultValue = {
    name: "",
    gender: "",
    age: "",
    description: "",
    email: "",
    password: "",
    city: "",
    province: "",
    confirmPassword: "",
    profilePicture: "",
    chatHistory: {},
    sports: [],
  };
  const [formData, setFormData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, ...data } = formData;
    const { name, gender, age, sports, description } = data;
    if (!sports.length) {
      setError("Wybierz przynajmniej jeden sport");
      return;
    }
    if (step === 2) {
      if (!name || !description || !gender || !age) {
        setError("Wszystkie pola muszą być uzupełnione");
        return;
      }
      if (+age < 18) {
        setError("Jesteś niepełnoletni");
        return;
      }
    }

    setStep(step + 1);
    setError("");
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        sports: formData.sports.includes(e.target.value)
          ? formData.sports.filter((el) => el !== e.target.value)
          : [...formData.sports, e.target.value],
      });
    } else if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, ...data } = formData;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(email)) {
      setError("Podany email jest niepoprawny");
      return;
    }
    if (!password.trim()) {
      setError("Pole hasło nie może być puste");
      return;
    } else if (password.length < 6) {
      setError("Hasło musi zawierać co najmniej 6 znaków");
    }
    if (password !== confirmPassword) {
      setError("Hasła nie są takie same");
      return;
    }
    registerUser(email, password, {
      ...data,
      createdAt: serverTimestamp(),
      isAdmin: false,
    });

    setFormData(defaultValue);
    navigate("/login");
  };

  const steppingByForm = () => {
    switch (step) {
      case 1:
        return (
          <RegisterFirstStep
            errorMessage={error}
            handleChange={handleChange}
            formData={formData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <RegisterStepTwo
            errorMessage={error}
            handleChange={handleChange}
            formData={formData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <RegisterStepThree
            errorMessage={error}
            handleChange={handleChange}
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
    }
  };
  return (
    <div>
      {/* <RegisterForm
        errorMessage={error}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      /> */}
      <form>{steppingByForm()}</form>
    </div>
  );
};

export default Register;
