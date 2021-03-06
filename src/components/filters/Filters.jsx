import React from "react";
import { useForm } from "react-hook-form";
import { getProfiles, registerFilterProfiles } from "../../api";
import DoubleSliderInput from "./doubleSlider/DoubleSliderInput";
import { FiltersSection, StyledCheckbox } from "./FiltersStyle";

const Filters = ({ setProfiles, sports, uid, userProvince }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    registerFilterProfiles(
      (querySnapshot) => {
        let retriveFilteredProfiles = getProfiles(querySnapshot).filter(
          (profile) => profile.id !== uid
        );
        if (data.onlyPicture) {
          retriveFilteredProfiles = retriveFilteredProfiles.filter(
            (profile) => profile.profilePicture !== null
          );
        }
        setProfiles(retriveFilteredProfiles);
      },
      sports,
      data.lower,
      data.upper,
      data.gender,
      userProvince
    );
  };
  return (
    <FiltersSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Wiek osób, których szukasz</h5>
        <DoubleSliderInput register={register} />
        <StyledCheckbox>
          <input id="option1" type="checkbox" {...register("onlyPicture")} />
          <label htmlFor="option1">Tylko ze zdjęciami</label>
        </StyledCheckbox>
        <div>
          <h5>Z kim chcesz trenować?</h5>
          <select {...register("gender")}>
            <option value="all">Wszyscy</option>
            <option value="man">Mężczyźni</option>
            <option value="woman">Kobiety</option>
          </select>
        </div>
        <button>Filtruj</button>
      </form>
    </FiltersSection>
  );
};

export default Filters;
