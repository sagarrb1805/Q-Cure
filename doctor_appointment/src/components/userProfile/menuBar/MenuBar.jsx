import React from 'react'
import './MenuBar.css'

function MenuBar({selectOption}) {
    
  return (
    <div className='menubar'>
        <p onClick={()=>selectOption("home")}> <button>Home</button></p>
        <p onClick={()=>selectOption("book")}> <button> Book Appointment </button></p>
        <p onClick={()=>selectOption("upcoming")}><button>Upcoming Bookings</button></p>
        <p onClick={()=>selectOption("history")}><button>History</button></p> 
    </div>
  )
}

export default MenuBar