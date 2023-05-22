import React, { useState } from 'react'
import './UserRegister.css'
import { useNavigate } from 'react-router-dom'

function UserRegister() {
  const[name, setName] = useState('')
  const[age, setAge] = useState(0)
  const [sex, setGender] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[phone_num, setPhNum] = useState('')
  const navigate = useNavigate()

  const onSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:2000/addUser', {
      method: 'POST',
      headers: {"Content-Type":'application/json'}, 
      body: JSON.stringify({age:age,
        sex:sex,
        email:email,
        password:password,
        phone_num:phone_num})
    })

    console.log(response.status)
  }

  return (
    <>
    <div className = "box">
    <h2>UserRegister</h2>
   
    <form action="post" onSubmit={onSubmit}>
      <div><label htmlFor = 'name'>Name:</label>
      <input onChange={(e)=>setName(e.target.value)} type = "text" id='name'  placeholder="Enter Name" /></div>
      <div><label htmlFor = 'age'>Age:</label>
      <input onChange={(e)=>setAge(e.target.value)} type = "int" id='age'  placeholder="Enter Age" /></div>
      <div><label htmlFor = 's'>SEX:</label></div>
      <div><label htmlFor = "Male">Male</label>
     <input onChange={(e)=>setGender(e.target.value)} type = "radio" name ="r" id = "Male" value = "M"/></div>
    <div> <label htmlFor = "Male">Female</label>
        <input onChange={(e)=>setGender(e.target.value)} type = "radio"  name = "r" id = "Female" value = "F"/></div>
        <div><label htmlFor = "Male">Others</label>
        <input onChange={(e)=>setGender(e.target.value)} type = "radio"  name = "r" id = "Others" value = "Others"/></div>
        <div><label htmlFor = 'email'>Email:</label>
      <input onChange={(e)=>setEmail(e.target.value)} type = "email" id='email'  placeholder="Enter Email" /></div>
      <div><label htmlFor = 'p'>Password:</label>
      <input onChange={(e)=>setPassword(e.target.value)} type = "password" id='p'  placeholder="Enter Password" /></div>
      <div><label htmlFor = 'ph'>Phone No:</label>
      <input onChange={(e)=>setPhNum(e.target.value)} type = "text" id='ph'  placeholder="Enter PhoneNumber" /></div>
      <input type="submit" value="SignUp"/>
    </form>
    </div>
    </>
    
    
  )
}

export default UserRegister