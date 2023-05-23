import Popup from 'reactjs-popup'
import SelectionType from './selectionType/SelectionType'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'


const Login = () => {
   
  const[password, setPassword] = useState('')
  const[email, setEmail] = useState('')

  const navigate = useNavigate()

  const userLogin = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:2000/loginAuth', {
      method: 'POST',
      headers: {"Content-Type":'application/json'}, 
      body: JSON.stringify({
        
        email:email,
        password:password,

      })
    })
    
    if(response.status === 200){
      // navigate('/user-profile')
      // const json_response = await response.json()
      const json_response = await response.json()
      const user = json_response.user_type
      const user_type = user.user_type_id
      if (user_type === 1){
        navigate('/admin-profile')
      }else if (user_type === 2){
        navigate('/user-profile')
      }else{
        navigate('/doctor-profile')
      }
      // const use_id = response.json().then((user) => {return user.user_id})
      // const use_id = response.json().then((user) => {return user.user_id})
      // console.log(use_id)
    }
    
  }

  return (
    <div className='parent-div'>
        <h2>Welcome</h2>

        <div className='form-div'>
            <form className='login-form' >
                <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/><br />
                <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/><br />
                <input type='submit' value='Signin' onClick={userLogin} />
            </form>
        </div>

       
        <Popup trigger={<p>Don't have an account <a href="#">Register</a> yourself</p>}>
            <SelectionType/>
        </Popup>

        
    </div>
  )
}
export default Login;
  