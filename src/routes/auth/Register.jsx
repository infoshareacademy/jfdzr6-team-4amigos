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
        email:"",
        password:"",
        confirmPassword:"",
        sports:[]
    }
  const [formData, setFormData] = useState(defaultValue);
  const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        sports: formData.sports.includes(e.target.value)
          ? formData.sports.filter((el) => el !== e.target.value)
          : [...formData.sports, e.target.value],
      });
    } else if(e.target.type === "file") {
      setFormData({...formData, [e.target.name]: e.target.files[0]})
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password, confirmPassword,...data} = formData
    registerUser(email,password,{...data, createdAt: serverTimestamp(), isAdmin: false})
    setFormData(defaultValue)
    navigate("/login")
  };
  return (
    <div>
      <h2>Register</h2>
      <RegisterForm
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
