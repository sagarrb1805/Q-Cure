import React from 'react'
import './UserRegister.css'

function UserRegister() {
  return (
    <><div>UserRegister</div>
    <form action="post">
      <label for = 'name'>Name:</label>
      <input type = "text" id='name'  placeholder="Enter Name" />
      <label for = 'age'>Age:</label>
      <input type = "text" id='age'  placeholder="Enter Age" />
      <label for = 's'>SEX</label>
      <input type = "text" id='s'  placeholder="Gender" />
      
      <input type="submit" value="SignUp"/>
      {/* <input type="submit" value="SignUp">SignUp</input> */}
    </form></>
    
  )
}

export default UserRegister