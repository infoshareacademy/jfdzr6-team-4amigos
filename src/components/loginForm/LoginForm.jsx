import React from 'react'

const LoginForm = ({handleLogin}) => {
  return (
    <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button type='submit' >Zaloguj</button>
      </form>
  )
}

export default LoginForm