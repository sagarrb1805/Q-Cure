import React from 'react';
import './DoctorRegister.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function DoctorRegister() {
  const[name,setName] = useState('')
  const[age,setAge] = useState(0)
  const [sex, setGender] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[phone_num, setPhNum] = useState('')
  const [Qualification, setQualification] = useState('')
  const[experience, setExperience] = useState('')
  const[location, setLocation] = useState('')
  const[specialization, setSpecialization] = useState('')
  const[HospitalName,setHospitalName] = useState('')
  const[userRes, setUserRes] = useState(0)

  const navigate = useNavigate()


    useEffect(() => {
      setUserRes(0); // <-- intentional side-effect
    }, [userRes]);

  

  const onSubmit = async() => {
    const response = await fetch('http://localhost:2000/addUser', {
      method: 'POST',
      headers: {"Content-Type":'application/json'}, 
      body: JSON.stringify({
        name:name,
        age:age,
        sex:sex,
        email:email,
        password:password,
        phone_num:phone_num, 
        user_type:{
          user_type_id:3
      }
      })
    })
    
    if(response.status === 200){
      // console.log(response.status)
      // const use_id = response.json().then((user) => {return user.user_id})
      // response.json().then((user) => {setUserRes(user.user_id)})

      const json_response = await response.json()
      // console.log(response)
      // console.log(json_response)
      const use_id = json_response.user_id
      // console.log(use_id)

      // const use_id = response.json().then((user) => {return setUserRes(user)})
      // var use_id = 0;
      // console.log(use_id)
      // console.log(userRes)
      const res = await fetch('http://localhost:2000/addDoctor', {
        method: 'POST',
        headers: {"Content-Type":'application/json'}, 
        body: JSON.stringify({
          is_verified:0,
          specialization:specialization,
          hospital_name:HospitalName,
          location:location,
          experience:experience,
          qualification:Qualification,
          doctor:{
            user_id:use_id
        }
      })
      })

      if(res.status == 200){
        navigate('/login')
      }
    }
    
  }
  

    
  return (
    

    // <div className='parent-div'>
    //   <h2>DOCTOR REGISTRATION</h2>
    // <div className='box'>

    //   <form action="post">


    // <div>
    //   <label for = 'name'>Name:</label>
    //   <input type = "text" id='name'  placeholder="Enter Name" />

    //   <label for = 'age'>Age:</label>
    //   <input type = "text" id='age'  placeholder="Enter Age" />
    //   </div>
    //   <div><label for = 's'>SEX:</label>
    //   <label for = "Male">Male</label>
    //  <input type = "radio" name ="r" id = "Male" value = "M"/>
    //  <label for = "Female">Female</label>
    //     <input type = "radio"  name = "r" id = "Female" value = "F"/>
    //     <label for = "Male">Others</label>
    //     <input type = "radio"  name = "r" id = "Others" value = "Others"/></div>
    //     <div><label for = 'email'>Email:</label>
    //   <input type = "text" id='email'  placeholder="Enter Email" />
    //   <label for = 'p'>Password:</label>
    //   <input type = "password" id='p'  placeholder="Enter Password" /></div>
    //   <div><label for = 'ph'>Phone No:</label>
    //   <input type = "text" id='ph'  placeholder="Enter PhoneNumber" />
    //   <label for = 'name'>Specialization:</label>
    //   <input type = "text" id='name'  placeholder="Specialization" /></div>
    //   <div><label for = 'n'>Hospital Name:</label>
    //   <input type = "text" id='n'  placeholder="Enter HospitalName" />
      
    //   <label for = 'l'>Location:</label>
    //   <input type = "text" id='l'  placeholder="Enter Location" /></div>
    //   <div><label for = 'q'>Qualification:</label>
    //   <input type = "text" id='q'  placeholder="Enter Qualification" />
    //   <label for = 'e'>Experience:</label>
    //   <input type = "text" id='name'  placeholder="Enter Experience" /></div>
    //   <div >
    //   <input className = "sub-button" type="submit" value="SignUp"  />
    //   </div>
      
    //   {/* <input type="submit" value="SignUp">SignUp</input> */}
    // </form>
    // </div>
    // </div>
   <> <div className = "box">
    <h2>Doctor Register</h2>
    <><Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Ente Full Name" />
        </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setAge(e.target.value)} type="int" placeholder="Enter Your Age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setPhNum(e.target.value)}  type="text" placeholder="Enter phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setSpecialization(e.target.value)} type="text" placeholder="Specialization" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setHospitalName(e.target.value)} type="text" placeholder="Enter Hospital Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setExperience(e.target.value)} type="text" placeholder="Experience" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setLocation(e.target.value)}  type="text" placeholder="Enter Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setQualification(e.target.value)} type="text" placeholder="Enter Qualification" />
      </Form.Group>
      <Form.Check onChange={(e) => setGender(e.target.value)} inline label="Male" name="group1" type="radio" value="M"/>
      <Form.Check onChange={(e) => setGender(e.target.value)} inline label="Female" name="group1" type="radio" value="F"/>
      <Form.Check onChange={(e) => setGender(e.target.value)} inline label="Others" name="group1" type="radio" value="O"/>
      <Button type="submit"  onClick={onSubmit}>
      SignUp
      </Button>
          
          </>
  
  </div>
  </>
  )
}
  

export default DoctorRegister