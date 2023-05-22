import React, { useState } from 'react'
import './SelectionType.css'
import { useNavigate } from 'react-router-dom'

function SelectionType() {
    const [selectionType, setSelectionType] = useState('')
    const navigate = useNavigate()

    const onProceed = (e)=>{
        // console.log(selectionType);
        if(selectionType==='doctor'){
            navigate('/reg-doctor')
        }else if(selectionType === 'user'){
            navigate('/reg-user')
        }
        
    }

  return (
    <div className='popup-div'>
        <form onSubmit={onProceed} className='popup-form'>
            <input type="radio" id="doc_select" name="selection_type" value="doctor" onChange={(e) => {setSelectionType("doctor")}}/>
            <label htmlFor="doc_select">Register as Doctor</label><br />
            <input type="radio" id="user_select" name="selection_type" value="user" onChange={(e) => {setSelectionType("user")}}/>
            <label htmlFor="user_select">Register as Normal User</label><br />
            <input type="submit" value="Proceed" className='submit-btn'/>
        </form>
    </div>
  )
}

export default SelectionType