import React from 'react'
import './UserRegister.css'

function UserRegister() {
  return (
    <><div>UserRegister</div>
    <form action="post">
      <div><label for = 'name'>Name:</label>
      <input type = "text" id='name'  placeholder="Enter Name" /></div>
      <div><label for = 'age'>Age:</label>
      <input type = "text" id='age'  placeholder="Enter Age" /></div>
      <div><label for = 's'>SEX:</label></div>
      <div><label for = "Male">Male</label>
     <input type = "radio" name ="r" id = "Male" value = "M"/></div>
    <div> <label for = "Male">Female</label>
        <input type = "radio"  name = "r" id = "Female" value = "F"/></div>
        <div><label for = "Male">Others</label>
        <input type = "radio"  name = "r" id = "Others" value = "Others"/></div>
        <div><label for = 'email'>Email:</label>
      <input type = "text" id='email'  placeholder="Enter Email" /></div>
      <div><label for = 'p'>Password:</label>
      <input type = "password" id='p'  placeholder="Enter Password" /></div>
      <div><label for = 'ph'>Phone No:</label>
      <input type = "text" id='ph'  placeholder="Enter PhoneNumber" /></div>
      

      
      <input type="submit" value="SignUp"/>
      {/* <input type="submit" value="SignUp">SignUp</input> */}
    </form></>
    
  )
}

export default UserRegister