import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import SelectionType from '../selectionType/SelectionType'
const Login = () => {

    const [showSelectionType, setShowSelectionType] = useState(false)
   

  return (
    <div>
        <h2>Login Page</h2>


       
        <Popup trigger={<p>Don't have an accoutn <a href="#" onClick={()=>setShowSelectionType(true)}>Register</a> yourself</p>}>
            <SelectionType/>
        </Popup>

        
    </div>
  )
}
export default Login;
  