import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

function EventShow({match}) {
  const {eName} = useParams()
  const [event, setEvent] = useState({})
  const Navigate = useNavigate();
  useEffect(()=>{
    axios.get(`https://aayojanserver.onrender.com/api/event/${eName}`)
    .then(res => setEvent(res.data))
    .catch(err =>{
      console.log(err, 'Event not found react')
    })
  }, [eName])

  // console.log(event)

  if(!event) Navigate("*")
  return (
    <div>
        <Navbar/>
        {event ? (
          <>
            <p>{event.eTitle}</p>
            <h1>{event.eName}</h1>
            <div dangerouslySetInnerHTML={{__html: event.eBody}}></div>
            date: {event.eDate}<br></br>
            Venue: {event.eVenue}<br></br>
            {/* Address: {event.address}<br></br>
            pinCode: {event.pinCode}<br></br>
            city: {event.city}<br></br>
            country: {event.country}<br></br> */}
            Contact mobNo: {event.code}
            {event.mobNo}<br></br>
            Contact email: {event.email}<br></br>
        </>
        ): null}
        <Footer/>
    </div>
  )
}

export default EventShow