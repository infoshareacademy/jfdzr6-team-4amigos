import React from "react";
import { useForm } from "react-hook-form";
import { ErrorField } from "../error/ErrorStyle";
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
  const minDate = new Date()
    .toLocaleDateString()
    .replaceAll(".", "-")
    .split("-")
    .reverse()
    .join("-");

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h3>Dodaj swoje wydarzenie</h3>
        <StyledInputDiv>
          <label>Nazwa wydarzenia</label>
          <input name="title" {...register("title", { required: true })} />
          {errors.title?.type === "required" && (
            <ErrorField>Nazwa jest wymagana</ErrorField>
          )}
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
          {errors.city?.type === "required" && (
            <ErrorField>Miejsce jest wymagane</ErrorField>
          )}
          {errors.city?.type === "minLength" && (
            <ErrorField>Nazwa miejsca wydarzenia jest zbyt krótka</ErrorField>
          )}
          {errors.city?.type === "maxLength" && (
            <ErrorField>Nazwa miejsca wydarzenia jest zbyt długa</ErrorField>
          )}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Data</label>
          <input
            type="date"
            defaultValue={minDate}
            min={minDate}
            {...register("startDate", { required: true })}
          />
          {errors.startDate?.type === "required" && (
            <ErrorField>Data wydarzenia jest wymagana</ErrorField>
          )}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Godzina</label>
          <input
            type="time"
            defaultValue="12:00"
            {...register("startTime", { required: true })}
          />
          {errors.startTime?.type === "required" && (
            <ErrorField>Godzina wydarzenia jest wymagana</ErrorField>
          )}
        </StyledInputDiv>
        <StyledInputDiv>
          <label>Opis wydarzenia</label>
          <textarea
            name="description"
            {...register("description", {
              required: true,
              minLength: 4,
              maxLength: 200,
            })}
          />
          {errors.description?.type === "required" && (
            <ErrorField>Opis jest wymagany</ErrorField>
          )}
          {errors.description?.type === "minLength" && (
            <ErrorField>Opis jest zbyt krótki</ErrorField>
          )}
          {errors.description?.type === "maxLength" && (
            <ErrorField>Opis jest zbyt długi</ErrorField>
          )}
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
