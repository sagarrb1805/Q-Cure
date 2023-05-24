import React, { useState } from 'react'
import './UserProfile.css'
import MenuBar from './menuBar/MenuBar'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserHome from './userHome/UserHome';


import { renderMatches, useSearchParams } from 'react-router-dom';
import BookAppointment from './bookAppointment/BookAppointment';
import History from './History/History';
import UpcomingBookings from './UpcomingBookings/UpcomingBookings';

function UserProfile() {
    const [selectedPage, setSelectedPage] = useState('None')
    const [searchparams] = useSearchParams();
    // const [page, setPage] = useState(<></>)

    var element;
    const user_id = searchparams.get("id")
    console.log(user_id)
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
        element = <BookAppointment use_id={user_id}/>
    }else if(selectedPage === 'history'){
        element = <History use_id={user_id}/>
    }else if (selectedPage === 'upcoming'){
        element = <UpcomingBookings use_id={user_id}/>
    }


    return (
        // <Container style={{border: '0px', margin:'0px'}}>
        //     <Row style={{border:'0px'}}>
            //    <div> <Col className='menubar-list' xs={12} md={4} >
            
            
           <div>
            <div>
                <MenuBar selectOption={optionSelect}/>
                </div>
                <div> <Col>{element}</Col>
            </div>
            </div>
        
    
        );
    }


export default UserProfile;