import React, { useState } from 'react'
import ForgotPasswordForm from '../../components/forgotPasswordForm/ForgotPasswordForm'

const ForgotPassword = () => {
  const [formData, setFormData] = useState({email:""})
  return (<ForgotPasswordForm formData={formData} setFormData={setFormData} />)
}

export default ForgotPassword