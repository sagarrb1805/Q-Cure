import React from 'react'
import './SelectionType.css'

function SelectionType() {
  return (
    <div className='popup-div'>
        <form action="">
            <input type="radio" id="doc_select" name="selection_type" value="doctor"/>
            <label htmlFor="doc_select">Register as Doctor</label><br /><br />
            <input type="radio" id="user_select" name="selection_type" value="user"/>
            <label htmlFor="user_select">Register as Normal User</label><br /><br />
            <input type="submit" value="Proceed"/>
        </form>
    </div>
  )
}

export default SelectionType