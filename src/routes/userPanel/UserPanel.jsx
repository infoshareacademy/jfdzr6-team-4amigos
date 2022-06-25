import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../api";
import UserPanelForm from "../../components/userPanel/UserPanelForm";

const UserPanel = ({ uid }) => {
  const defaultValue = {
    name: "",
    gender: "",
    age: "",
    description: "",
    city: "",
    sports: [],
  };
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

    if (!name || !description || !gender || !age || !sports.length) {
      setError("Wszystkie pola muszą być uzupełnione");
      return;
    }

    updateUser(formData, uid);

    setFormData(defaultValue);
    navigate("/");
  };

  return (
    <UserPanelForm
      handleChange={handleChange}
      formData={formData}
      errorMessage={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default UserPanel;
