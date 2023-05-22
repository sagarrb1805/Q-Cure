import React, { useState } from 'react'
import './UserProfile.css'
import MenuBar from './menuBar/MenuBar'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserHome from './userHome/UserHome';

import { renderMatches } from 'react-router-dom';
import BookAppointment from './bookAppointment/BookAppointment';
import History from './History/History';
import UpcomingBookings from './UpcomingBookings/UpcomingBookings';

function UserProfile() {
    const [selectedPage, setSelectedPage] = useState('None')
    // const [page, setPage] = useState(<></>)

    var element = <UserHome/>

    function optionSelect(menuSelected){
        // console.log(menuSelected)
        if (menuSelected === 'home'){
            setSelectedPage('home')
        }else if(menuSelected === 'book'){
            setSelectedPage('book')
        }else if(menuSelected === 'history'){
            setSelectedPage('history')
        }else if (menuSelected === 'upcoming'){
            setSelectedPage('upcoming')
        }
    }
    if (selectedPage === 'home'){
        element = <UserHome></UserHome>
    }else if(selectedPage === 'book'){
        element = <BookAppointment/>
    }else if(selectedPage === 'history'){
        element = <History/>
    }else if (selectedPage === 'upcoming'){
        element = <UpcomingBookings/>
    }

    return (
        <Container style={{border: '0px', margin:'0px'}}>
            <Row style={{border:'0px'}}>
                <Col className='menubar-list' xs={12} md={4} > <MenuBar selectOption={optionSelect}/></Col>
                <Col>{element}</Col>
            </Row>
        </Container>
        )
           
}

export default UserProfile;