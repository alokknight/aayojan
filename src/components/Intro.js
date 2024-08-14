import React from 'react'
import { decodeToken } from 'react-jwt'
import { Link } from 'react-router-dom'
import './intro.css';
export default function Intro() {
  const token = localStorage.getItem('userTokenTime')
  if (token)
    var decode = decodeToken(token)
  return (
    <div>
      <section id="intro">
        <div className="intro-container mt-5">
          <h3 className="text-light">Welcome! {(token) ? decode.firstName : ''} </h3>
          {/* <h1 className="mb-4 pb-0">Find<br/><span>and Add</span> Upcoming Events</h1> */}
          <h1 className="mb-4 pb-0"> <span>Witness, Experience and</span> <br />
            <p style={{ "font-size": "2.1rem" }} className="bounce">
                Expl
                <span className="char">
                  {/* o */}
                  <div className="col-lg-3">
                    <Link to='/event/add' className='play-btn scrollto  rotate360' ></Link>
                  </div>
                </span>
                re
            </p>
          </h1>
          <h1><span> Carnival of Events</span></h1>
          <p className="mb-4 pb-0">One stop solution for all the Nearby Events</p>
          <Link to='/event/add' className='btn btn-primary' >Add Event</Link>
          <Link to="/about" className="about-btn scrollto">About Us</Link>
        </div>
      </section>
    </div>
  )
}
