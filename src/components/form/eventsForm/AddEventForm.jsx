import React from "react";
import { useForm } from "react-hook-form";
import {
  StyledAddButton,
  StyledForm,
  StyledInputDiv,
} from "./AddEventFormStyle";

const AddEventForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <StyledForm
        style={{ marginTop: "100px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Dodaj swoje wydarzenie</h3>
        <StyledInputDiv>
          <label>Nazwa wydarzenia</label>
          <input name="title" {...register("title", { required: true })} />
          {errors.title?.type === "required" && "Nazwa jest wymagana"}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Miejsce wydarzenia</label>
          <input
            name="city"
            {...register("city", {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
          />
          {errors.city?.type === "required" && "Miejsce jest wymagane"}
          {errors.city?.type === "minLength" &&
            "Nazwa miejsca wydarzenia jest zbyt krótka"}
          {errors.city?.type === "maxLength" &&
            "Nazwa miejsca wydarzenia jest zbyt długa"}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Data</label>
          <input
            type="date"
            name="date"
            {...register("startDate", { required: true })}
          />
          {errors.startDate?.type === "required" && "Miejsce jest wymagana"}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Godzina</label>
          <input
            type="time"
            name="time"
            {...register("startTime", { required: true })}
          />
          {errors.startTime?.type === "required" && "Godzina jest wymagana"}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Opis wydarzenia</label>
          <textarea
            name="description"
            {...register("description", {
              required: true,
              minLength: 4,
              maxLength: 100,
            })}
          />
          {errors.description?.type === "required" && "Opis jest wymagany"}
          {errors.description?.type === "minLength" && "Opis jest zbyt krótki"}
          {errors.description?.type === "maxLength" && "Opis jest zbyt długi"}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Sport</label>
          <select name="category" {...register("category")}>
            <option value="bike">Rower</option>
            <option value="running">Bieganie</option>
            <option value="trekking">Wędrówka</option>
          </select>
        </StyledInputDiv>
        <StyledAddButton type="submit">Dodaj</StyledAddButton>
      </StyledForm>
    </div>
  );
};

export default AddEventForm;
