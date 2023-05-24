import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Appointment from './book/Appointment';

function BookAppointment({use_id}) {

  const [query, setQuery] = useState('')
  const [docList, setDocList] = useState([])

  const[blood_group, setBloodGroup] = useState('')
  const[weight, setWeight] = useState('')
  const[docselected, setDocSelected] = useState(0)
  const[appoinmentDate, setAppointmentDate] = useState('')

  const onSearch = async ()=>{
    const response = await fetch('http://localhost:2000/findDoctor/'+query, {
      method: 'GET',
      headers: {"Content-Type":'application/json'}
    }).then((response) => response.json()) 
    .then((d) => setDocList(d))
    console.log(docList)
  }

  function toEpoch(dateTime){
    return Date.parse(dateTime)
  }


  const onSubmit =async (e)=>{

    e.preventDefault()
    const response = await fetch('http://localhost:2000/addPatient', {
      method: 'POST',
      headers: {"Content-Type":'application/json'}, 
      body: JSON.stringify({
        blood_group:blood_group,
        weight:weight,
        patient:{
          user_id:use_id
        }
      })
    })
    
    if(response.status === 200){
      

      console.log("patient details added")
    }

    // console.log(bloodGroup + weight + docselected+toEpoch(appoinmentDate))
  }

  return (
    <div>
    <div>
      <h3>Book Your Slot</h3>
      
      </div>
    <div>
      <input onChange={(e)=>setAppointmentDate(e.target.value)} type="datetime-local" id="meeting-time" name="meeting-time" />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setBloodGroup(e.target.value)} type="text" placeholder="Ente Your Blood Group" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setWeight(e.target.value)} type="text" placeholder="Enter Your Weight" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search for Doctor based on  specialization" onChange={(e)=>setQuery(e.target.value)} />
      </Form.Group>

      <Button type="submit" onClick={onSearch}>
      Search
      </Button><br />

      <label for="dog-names">Choose a doctor:</label> 
        <select name="dog-names" id="dog-names" onChange={(e)=>setDocSelected(e.target.value)}> 
        {docList.map((doctor)=>{
          return <option  value={doctor.doctor.user_id}>{doctor.doctor.name} | {doctor.doctor.sex} | {doctor.experience} | {doctor.hospital_name} | {doctor.qualification}</option>
        })}
            
        </select>
        <br />
        <Button type="submit" onClick={onSubmit}>
      Submit
      </Button>


    </div>
    </div>
  )
}

export default BookAppointment