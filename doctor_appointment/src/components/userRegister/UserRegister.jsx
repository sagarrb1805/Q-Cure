import React, { useState } from 'react'
import './UserRegister.css'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      body: JSON.stringify({
        name:name,
        age:age,
        sex:sex,
        email:email,
        password:password,
        phone_num:phone_num, 
        user_type:{
          user_type_id:2
      }
      })
    })
    
    if(response.status === 200){
      navigate('/login')
      console.log(response.status)
      // const use_id = response.json().then((user) => {return user.user_id})
      const use_id = response.json().then((user) => {return user.user_id})
      console.log(use_id)
    }
    
  }

  return (
    <>
    <div className = "box">
    <h2>UserRegister</h2>
   
    {/* <form action="post" onSubmit={onSubmit}>
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
      <input onChange={(e)=>setPhNum(e.target.value)} type = "text" id='ph'  placeholder="Enter PhoneNumber" /></div> */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Ente Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setAge(e.target.value)} type="int" placeholder="Enter Your Age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setPhNum(e.target.value)} type="text" placeholder="Enter phone number" />
      </Form.Group>
      

      <Form.Check onChange={(e)=>setGender(e.target.value)} inline label="Male" name="group1" type="radio" value="M"/>
      <Form.Check onChange={(e)=>setGender(e.target.value)} inline label="Female" name="group1" type="radio" value="F"/>
      <Form.Check onChange={(e)=>setGender(e.target.value)} inline label="Others" name="group1" type="radio" value="O"/>
      <Button type="submit" onClick={onSubmit}>
      SignUp
      </Button>
      {/* <input type="submit" value="SignUp"/> */}
    {/* </form> */}
    </div>
    </>
    
    
  )
}

export default UserRegister