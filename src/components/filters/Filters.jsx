import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DoubleSliderInput from "./doubleSlider/DoubleSliderInput";
import { FiltersSection, RadioLabel } from "./FiltersStyle";

import { db, auth, storage } from "../../api/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { firebaseErrors } from "../../utils/firebaseErrors";

const Filters = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FiltersSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Wiek osób, których szukasz</h5>
        <DoubleSliderInput register={register} />
        <div>
          <h5>Tylko ze zdjęciem</h5>
          <RadioLabel>
            <input type="radio" value={true} {...register("onlyPicture")} />
            <span>Tak</span>
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              value={false}
              checked
              {...register("onlyPicture")}
            />
            <span>Nie</span>
          </RadioLabel>
        </div>
        <div>
          <h5>Z kim chcesz trenować?</h5>
          <select {...register("gender")}>
            <option value="all">Wszyscy</option>
            <option value="man">Mężczyzn</option>
            <option value="woman">Kobiet</option>
          </select>
        </div>
        <button>Filtruj</button>
      </form>
    </FiltersSection>
  );
};

export default Filters;
