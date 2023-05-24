import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Appointment from './book/Appointment';

function BookAppointment({use_id}) {

  const [query, setQuery] = useState('')
  const [docList, setDocList] = useState([])

  const onSearch = async ()=>{
    const response = await fetch('http://localhost:2000/findDoctor/'+query, {
      method: 'GET',
      headers: {"Content-Type":'application/json'}
    }).then((response) => response.json()) 
    .then((d) => setDocList(d))
    console.log(docList)
  }

  return (
    <div>
    <div>
      <h3>Book Your Slot</h3>
      {docList.map((doc)=>{
        return (<h1>{doc.specialization}</h1>)
      })}
      </div>
    <div>
      <Appointment docList={docList}/>
      <input type="datetime-local" id="meeting-time" name="meeting-time" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ente Your Blood Group" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Weight" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search for Doctor based on  specialization" onChange={(e)=>setQuery(e.target.value)} />
      </Form.Group>

      <Button type="submit" onClick={onSearch}>
      Search
      </Button><br />

      <label for="dog-names">Choose a doctor:</label> 
        <select name="dog-names" id="dog-names"> 
        {docList.map((doctor)=>{
          return (<option value="rigatoni">{doctor.specialization}</option>)
        })}
            <option value="rigatoni">Rigatoni</option> 
            <option value="dave">Dave</option> 
            <option value="pumpernickel">Pumpernickel</option> 
            <option value="reeses">Reeses</option> 
        </select>
        <br />
        <Button type="submit" >
      Submit
      </Button>


    </div>
    </div>
  )
}

export default BookAppointment