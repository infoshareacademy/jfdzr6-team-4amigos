import React from "react";
import { useForm } from "react-hook-form";

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
      <form style={{ marginTop: "100px" }} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nazwa wydarzenia</label>
          <input name="title" {...register("title", { required: true })} />
          <p>{errors.title?.type === "required" && "Nazwa jest wymagana"}</p>
        </div>
        <div>
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
        </div>
        <div>
          <label>Data</label>
          <input
            type="date"
            defaultValue={minDate}
            min={minDate}
            {...register("startDate", { required: true })}
          />
          {errors.startDate?.type === "required" && "Miejsce jest wymagana"}
        </div>
        <div>
          <label>Godzina</label>
          <input
            type="time"
            defaultValue="12:00"
            {...register("startTime", { required: true })}
          />
          {errors.startTime?.type === "required" && "Godzina jest wymagana"}
        </div>
        <div>
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
        </div>
        <div>
          <label>Kategoria</label>
          <select name="category" {...register("category")}>
            <option value="bike">Rower</option>
            <option value="running">Bieganie</option>
            <option value="trekking">Wędrówka</option>
          </select>
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default AddEventForm;
