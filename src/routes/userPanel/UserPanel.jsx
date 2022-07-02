import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../api";
import UserPanelForm from "../../components/userPanel/UserPanelForm";
import { AuthContext } from "../../context/Auth";

const UserPanel = () => {
  const { userData } = useContext(AuthContext);
  const { name, age, gender, description, city } = userData;
  const defaultValue = {
    name: name,
    gender: gender,
    age: age,
    description: description,
    city: city,
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
      console.log(error);
      return;
    }

    updateUser(formData, userData.id);

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
