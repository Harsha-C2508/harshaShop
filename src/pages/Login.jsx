import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import Styles from '../style/login.module.css'
import {useNavigate} from "react-router-dom"
const Login = () => {

  const [creds,setCreds]=useState({});
  const navigate = useNavigate();

  const handleChange=(e)=>{
    const{name,value} = e.target

    setCreds({
      ...creds,
      [name]:value
    })
  }
  const {Login} = useContext(AuthContext)
  const submit=(e)=>{
    e.preventDefault();
    Login()
    navigate("/")
    alert("LogIn successful")
  }
  return (
    <div>Login
      <p>Please create your account and enjoy</p>
        <form className={Styles.box}
         onSubmit={submit}
        >
          <input
             name="email"
             type="email"
             placeholder='Enter email.....'
             onChange={handleChange}
              />
          <input 
              name="email"
              type="password" 
              placeholder='Enter password.....'
              onChange={handleChange}
             />
          <button type='submit' onClick={submit}>Login</button>
        </form>
    </div>
  )
}

export default Login