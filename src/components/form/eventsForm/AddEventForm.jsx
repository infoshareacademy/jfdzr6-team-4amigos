import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const AddEventForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);

    useEffect(() => {
        console.log(errors);
    }, [errors])

    return (
        <div>
            <form style={{ marginTop: "100px", }} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nazwa wydarzenia</label>
                    <input name="title" {...register("title", { required: true })} />
                    {errors.title?.type === 'required' && "First name is required"}
                </div>
                <div>
                    <label>Miejsce wydarzenia</label>
                    <input name="city" {...register("city", { required: true, minLength: 4 })} />
                    {errors.city?.type === 'minLength' && "First name is required"}
                </div>
                <div>
                    <label>Miejsce wydarzenia</label>
                    <input type="date" name="date" {...register("startDate")} />
                </div>
                <div>
                    <label>Opis wydarzenia</label>
                    <textarea name="description" {...register("description")} />
                </div>
                <div>
                    <label>Kategoria</label>
                    <select name="category" {...register("category")} >
                        <option value="bike">Rower</option>
                        <option value="running">Bieganie</option>
                        <option value="trekking">Wędrówka</option>
                    </select>
                </div>
                <button type='submit'>Dodaj</button>
            </form>
        </div>
    )
}

export default AddEventForm