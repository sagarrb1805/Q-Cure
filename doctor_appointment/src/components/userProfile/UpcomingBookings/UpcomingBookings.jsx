import React, { useEffect, useState } from 'react'

function UpcomingBookings({use_id}) {
  const[appointments, setAppointments] = useState([])

  const getAppointments = async()=>{
    const response = await fetch('http://localhost:2000/getAppointmentByPatientId/'+use_id, {
      method: 'GET',
      headers: {"Content-Type":'application/json'}
    }).then((response) => response.json()) 
    .then((d) => setAppointments(d))
    console.log(appointments)
  }

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div>UpcomingBookings</div>
  )
}

export default UpcomingBookings