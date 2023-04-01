import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  
  async function loginUser(event) {
		event.preventDefault();

    
		const response = await fetch('http://localhost:8000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
    if (data.user) {
			window.location.href = '/auth';
		}
    else{
      alert("Email/Password is Incorrect! Please try again!");
    }
  }
  return (
    <div className="Login">
      <div className="FormSection">
        <h1>Account Login</h1>
        <form onSubmit={loginUser}>
          <input 
          type="email" 
          className='typeA'
          placeholder='Email Address'
          value={email}
					onChange={(e) => setEmail(e.target.value)}
          required />
          <br />
          <input 
          type="password" 
          className='typeA'
          placeholder='Password'
          value={password}
					onChange={(e) => setPassword(e.target.value)}
          required />
          <br />
          <input 
          type="submit"
          value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login