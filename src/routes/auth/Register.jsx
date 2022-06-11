import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api";
import RegisterForm from "../../components/registerForm/RegisterForm";

const Register = () => {

    const defaultValue = {
        name:"",
        gender: "",
        age: "",
        description: "",
        email:"",
        password:"",
        city:"",
        confirmPassword:"",
        profilePicture: "",
        sports:[]
    }
  const [formData, setFormData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        sports: formData.sports.includes(e.target.value)
          ? formData.sports.filter((el) => el !== e.target.value)
          : [...formData.sports, e.target.value],
      });
    } else if (e.target.type === "file") {
      console.log(e.target.files[0]);
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
    const { name, gender, age, sports, description } = data;
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
    if (+age < 18) {
      setError("Jesteś niepełnoletni");
      return;
    }
    if (!name || !description || !gender || !age || !sports.length) {
      setError("Wszystkie mola muszą być uzupełnione");
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
  return (
    <div>
      <RegisterForm
        errorMessage={error}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
