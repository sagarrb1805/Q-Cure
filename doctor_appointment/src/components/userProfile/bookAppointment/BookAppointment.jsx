import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BookAppointment() {
  return (
    <div>
    <div>
      <h3>Book Your Slot</h3>
      </div>
    <div>
      <input type="datetime-local" id="meeting-time" name="meeting-time" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ente Your Blood Group" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Weight" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search for Doctor based on  specialization" />
      </Form.Group>

      <Button type="submit" >
      Search
      </Button><br />

      <label for="dog-names">Choose a doctor:</label> 
        <select name="dog-names" id="dog-names"> 
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