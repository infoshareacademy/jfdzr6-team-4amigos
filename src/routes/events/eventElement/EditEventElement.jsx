import React from 'react'
import { useForm } from 'react-hook-form';
import { updateEvent } from '../../../api/events';

const EditEventElement = ({ event, cancelEditMode }) => {
    const { id, title, city, startDate, startTime, description, category, idAdmin, members } = event
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        updateEvent(id, { ...data, members, idAdmin })
        cancelEditMode()
    }
    return (
        <div>
            <form style={{ marginTop: "100px", }} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nazwa wydarzenia</label>
                    <input defaultValue={title} {...register("title", { required: true })} />
                    {errors.title?.type === 'required' && "Nazwa jest wymagana"}
                </div>
                <div>
                    <label>Miejsce wydarzenia</label>
                    <input defaultValue={city} {...register("city", { required: true, minLength: 4, maxLength: 20 })} />
                    {errors.city?.type === 'required' && "Miejsce jest wymagane"}
                    {errors.city?.type === 'minLength' && "Nazwa miejsca wydarzenia jest zbyt krótka"}
                    {errors.city?.type === 'maxLength' && "Nazwa miejsca wydarzenia jest zbyt długa"}
                </div>
                <div>
                    <label>Data</label>
                    <input type="date" defaultValue={startDate} {...register("startDate", { required: true })} />
                    {errors.startDate?.type === 'required' && "Miejsce jest wymagana"}
                </div>
                <div>
                    <label>Godzina</label>
                    <input type="time" defaultValue={startTime} {...register("startTime", { required: true })} />
                    {errors.startTime?.type === 'required' && "Godzina jest wymagana"}
                </div>
                <div>
                    <label>Opis wydarzenia</label>
                    <textarea defaultValue={description} {...register("description", { required: true, minLength: 4, maxLength: 100 })} />
                    {errors.description?.type === 'required' && "Opis jest wymagany"}
                    {errors.description?.type === 'minLength' && "Opis jest zbyt krótki"}
                    {errors.description?.type === 'maxLength' && "Opis jest zbyt długi"}
                </div>
                <div>
                    <label>Kategoria</label>
                    <select defaultValue={category} {...register("category")} >
                        <option value="bike">Rower</option>
                        <option value="running">Bieganie</option>
                        <option value="trekking">Wędrówka</option>
                    </select>
                </div>
                <button type='submit'>Zaktualizuj</button>
                <button type='submit' onClick={cancelEditMode}>Anuluj</button>
            </form>
        </div>
    )
}

export default EditEventElement