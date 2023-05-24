import React, { useState } from 'react';
import './DoctorProfile.css'
 import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';



function DoctorProfile({selectOption}) {
  
  
  return (
    
     
      
      
      <><div>
      <Navbar bg="aries-blue" expand="dark">
        <Container>
          <Navbar.Brand href="#home">Doctor-profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  cancel-booking
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
Separated link
</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div><div>
        <Card className="bg-dark text-white">
          <Card.Img src="https://th.bing.com/th/id/OIP.RlrxX2aEseoNeZ_aMclR4wHaE8?pid=ImgDet&rs=1" alt="Card image" />
          <Card.ImgOverlay>
            {/* <Card.Title>Card title</Card.Title>
<Card.Text>

</Card.Text>
<Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
      </div></>
 );
// const [selectedPage,setSelectedPage] = useState('None')
//   var elements;
//   function optionSelect(optSelected){
//     if(optSelected === 'doctor_home'){
//       setSelectedPage('doctor_home')
//     }
//     else if(optSelected === 'cancel_booking'){
//       setSelectedPage('cancel_booking')
//     }

//     if(selectedPage === 'doctor_home'){
//       elements = <doctor_home></doctor_home>
//     }
//     else if(selectedPage === 'cancel_booking'){
//         elements = <cancel_booking></cancel_booking>
//       }

//       <div className = 'Navbar'>
//         <p onClick={()=>selectOption("doctor_home")}> <button>doctor_home</button></p>
//         <p onClick={()=>selectOption("cancel_book")}> <button> cancel_booking</button></p>
//       </div>
 
  }


export default DoctorProfile