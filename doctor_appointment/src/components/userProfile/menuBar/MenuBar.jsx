import React from 'react'
import './MenuBar.css'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Navigate } from 'react-router';

function MenuBar({selectOption}) {
    
  return ( 
    <><div>UserHome</div><CardGroup>
      <div>
        <Card className='home-card'>
        <p onClick={()=>selectOption("home")}> <button>Home</button></p>
          <Card.Img src="https://thumbayhospital.com/wp-content/uploads/2017/12/book-1.jpg" alt="Card image" />
          <Card.ImgOverlay>
            {/* <Card.Title>Card title</Card.Title> */}
            {/* <Card.Text>
This is a wider card with supporting text below as a natural lead-in
to additional content. This content is a little bit longer.
</Card.Text> */}
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="appoinment-card">
        <Card>
        <p onClick={()=>selectOption("book")}> <button> Book Appointment </button></p>
          <Card.Img variant="top" src="https://i.imgur.com/WlZTfnT.jpg" />
          <Card.Body>
            <Card.Title>Book Appoinment</Card.Title>
            {/* <Card.Text>
This is a wider card with supporting text below as a natural lead-in
to additional content. This content is a little bit longer.
</Card.Text> */}
          </Card.Body>
          {/* <Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer> */}
        </Card>
      </div>



      <div className="booking-card">
        <Card>
        <p onClick={()=>selectOption("upcoming")}><button>Upcoming Bookings</button></p>
          <Card.Img variant="top" src="https://image.freepik.com/free-vector/appointment-booking-landing-page_23-2148560145.jpg" />
          <Card.Body>
            <Card.Title>Upcoming Booking</Card.Title>
            {/* <Card.Text>
This card has supporting text below as a natural lead-in to
additional content.{' '}
</Card.Text> */}
          </Card.Body>
          {/* <Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer> */}
        </Card>
      </div>
      <div className="history-card">
        <Card>
        <p onClick={()=>selectOption("history")}><button>History</button></p> 
          <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/early-booking-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-82617530.jpg" />
          <Card.Body>
            <Card.Title onClick={Navigate}>Booking History</Card.Title>
            {/* <Card.Text>
This is a wider card with supporting text below as a natural lead-in
to additional content. This card has even longer content than the
first to show that equal height action.
</Card.Text> */}
          </Card.Body>
          {/* <Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer> */}
        </Card>
      </div>

    </CardGroup></>
    // <div className='menubar'>
    //     <p onClick={()=>selectOption("home")}> <button>Home</button></p>
    //     <p onClick={()=>selectOption("book")}> <button> Book Appointment </button></p>
    //     <p onClick={()=>selectOption("upcoming")}><button>Upcoming Bookings</button></p>
    //     <p onClick={()=>selectOption("history")}><button>History</button></p> 
    // </div>
  )
}

export default MenuBar