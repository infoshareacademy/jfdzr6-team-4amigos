import React from 'react'
import { Container, ResetForm } from './ForgotPasswordFormStyle'

const ForgotPasswordForm = ({ formData, setFormData }) => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Container>
            <h2>Odzyskiwanie hasła</h2>
            <p>Za chwilę otrzymasz maila z linkiem do utworzenia nowego hasła</p>
            <ResetForm>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" placeholder='Wpisz swój email' name='email' value={formData.email} onChange={handleChange} />
                    <button>Przypomnij hasło</button>
                </div>
            </ResetForm>
        </Container>
    )
}

export default ForgotPasswordForm