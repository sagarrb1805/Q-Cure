import React from 'react'
import './DoctorRegister.css'

function DoctorRegister() {
  return (
    <><div>DoctorRegister</div><form action="post">

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
      <div><label for = 'name'>Specialization:</label>
      <input type = "text" id='name'  placeholder="Specialization" /></div>
      <div><label for = 'n'>Hospital Name:</label>
      <input type = "text" id='n'  placeholder="Enter HospitalName" /></div>
      
      <div><label for = 'l'>Location:</label>
      <input type = "text" id='l'  placeholder="Enter Location" /></div>
      <div><label for = 'q'>Qualification:</label>
      <input type = "text" id='q'  placeholder="Enter Qualification" /></div>
      <div><label for = 'e'>Experience:</label>
      <input type = "text" id='name'  placeholder="Enter Experience" /></div>

      <input type="submit" value="SignUp" />
      
      {/* <input type="submit" value="SignUp">SignUp</input> */}
    </form></>
  )
}

export default DoctorRegister