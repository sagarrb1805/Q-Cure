import React from 'react'
import './DoctorRegister.css'

function DoctorRegister() {
  return (
    <div className='parent-div'>
      <h2>DOCTOR REGISTRATION</h2>
    <div className='box'>

      <form action="post">


    <div>
      <label for = 'name'>Name:</label>
      <input type = "text" id='name'  placeholder="Enter Name" />

      <label for = 'age'>Age:</label>
      <input type = "text" id='age'  placeholder="Enter Age" />
      </div>
      <div><label for = 's'>SEX:</label>
      <label for = "Male">Male</label>
     <input type = "radio" name ="r" id = "Male" value = "M"/>
     <label for = "Female">Female</label>
        <input type = "radio"  name = "r" id = "Female" value = "F"/>
        <label for = "Male">Others</label>
        <input type = "radio"  name = "r" id = "Others" value = "Others"/></div>
        <div><label for = 'email'>Email:</label>
      <input type = "text" id='email'  placeholder="Enter Email" />
      <label for = 'p'>Password:</label>
      <input type = "password" id='p'  placeholder="Enter Password" /></div>
      <div><label for = 'ph'>Phone No:</label>
      <input type = "text" id='ph'  placeholder="Enter PhoneNumber" />
      <label for = 'name'>Specialization:</label>
      <input type = "text" id='name'  placeholder="Specialization" /></div>
      <div><label for = 'n'>Hospital Name:</label>
      <input type = "text" id='n'  placeholder="Enter HospitalName" />
      
      <label for = 'l'>Location:</label>
      <input type = "text" id='l'  placeholder="Enter Location" /></div>
      <div><label for = 'q'>Qualification:</label>
      <input type = "text" id='q'  placeholder="Enter Qualification" />
      <label for = 'e'>Experience:</label>
      <input type = "text" id='name'  placeholder="Enter Experience" /></div>
      <div >
      <input className = "sub-button" type="submit" value="SignUp"  />
      </div>
      
      {/* <input type="submit" value="SignUp">SignUp</input> */}
    </form>
    </div>
    </div>
  )
}

export default DoctorRegister