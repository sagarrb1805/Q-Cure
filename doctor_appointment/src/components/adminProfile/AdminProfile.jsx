import React, { useEffect, useState } from 'react'
import './AdminProfile.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AdminProfile() {
  const user_type_id = 1

  const [unverifiedDoctors, setUnverifiedDoctors] = useState([])

  const getUnverifiedDoctors = async ()=>{
    const response = await fetch('http://localhost:2000/findUnVerified', {
      method: 'GET',
      headers: {"Content-Type":'application/json'}
    }).then((response) => response.json()) 
    .then((d) => setUnverifiedDoctors(d))
    console.log(unverifiedDoctors)
  }

  useEffect(() => {
    getUnverifiedDoctors();
  }, []);

  const verifyDoctor = async (doctor_details_id)=>{
    const response = await fetch('http://localhost:2000/verifyDoctor/'+doctor_details_id, {
      method: 'PUT',
      headers: {"Content-Type":'application/json'}
    })
    
    const filterdVal = unverifiedDoctors.filter((doc)=>{
      return doc.doctor_details_id != doctor_details_id
    })
    setUnverifiedDoctors(filterdVal)
  }


  if(user_type_id === 1){
    return (
      <div> 
        <h4>admin profile</h4>
        {
          unverifiedDoctors.map((doc) => {
            return (
            <div key={doc.doctor_details_id}>
              <Card>
                <Card.Body>Name: {doc.doctor.name} <br /> Email: {doc.doctor.email} <br />Contact: {doc.doctor.phone_num
                    } <br />Age:{doc.doctor.age} <br /> Gender:{doc.doctor.sex} <br /> Experience: {doc.experience} <br />
                  Location: {doc.location}<br />  qualificatoin: {doc.qualification} <br /> specialization: {doc.specialization} <br />

                  <Button style={{background: 'rebeccapurple'}} onClick={()=>verifyDoctor(doc.doctor_details_id)}>
                    Verify
                  </Button>


                </Card.Body>
              </Card>
              
            </div>
              )
          })
        }


      </div>
    )
  }else{
    return(<div><h2>Don't have permission</h2></div>)
    
  }
  
}

export default AdminProfile