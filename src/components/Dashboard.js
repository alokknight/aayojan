import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
import './dashboard.css';
function Dashboard() {
    const token = localStorage.getItem("userTokenTime")
    const decode = decodeToken(token)
    console.log("Decoded-",decode);

    const [profile, setProfile] =useState({});
    const [events, setEvent] = useState([]);
    const [edel, setEDel] = useState({
        edit: ''
    });
    useEffect(()=>{
        axios.get(`https://aayojanserver.onrender.com/api/signin/${decode.email}`)
        .then(res => setProfile(res.data))
        .catch(err => console.log(err.message))
    },[])

    console.log("Profile-",profile)
    useEffect(() => {
        axios.get('https://aayojanserver.onrender.com/api/event', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        })
            .then(res => setEvent(res.data))
            .catch(err => console.log(err.message))
    }, [edel, token])
    console.log(events.sort())

    const eventDelete = event => {
        var r = window.confirm('Press Ok to delete')
        if (r === true) {
            axios.delete(`/event/${event}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res.data)
                    setEDel({
                        edit: ''
                    });
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <Navbar />
            <h2 className="mx-1 my-1 text-center p-2" style={{ color: "white" }}>Hi <strong style={{ color: "red" }}>{profile.firstName}</strong>, Welcome to your profile...!</h2>

            <div className="container">
                <div className="main-body">

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="profilecard">
                                <div className="profilecard-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width={"150"} />
                                        <div className="mt-3">
                                            <h4 className='text-info' style={{ textDecoration: 'none', "text-transform": "uppercase" }}>{profile.firstName}</h4>
                                            <p className="mb-1 text-light">{profile.bio}</p>
                                            {/* <button className="btn transonclick btn-primary mx-1">Follow</button>
                                            <a href={`mailto:${decode.email}`} style={{ textDecoration: 'none'}} target= '_blank' rel="noreferrer" >
                                            <button className="btn transonclick btn-outline-primary mx-1">Message</button>
                                            </a> */}
                                            <NavLink className="btn transonclick btn-info" to="/password/forgot"><i className='bi bi-pencil-square'></i> Change Password</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profilecard mt-3">
                                <div className="profilecard-body">
                                    <ul className="list-group list-group-flush text-center">
                                        <li className="list-group-item bg-transparent">
                                            <a href={`${profile.website}`} style={{ textDecoration: 'none'}} target= '_blank' rel="noreferrer" >
                                            <h6 className="mb-0" style={{ color: "orange" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                            <a href={`${profile.linkedin}`} style={{ textDecoration: 'none'}} target= '_blank' rel="noreferrer" >
                                            <h6 className="mb-0" style={{ color: "blue" }}><i className="fa fa-linkedin rotate360 mx-2"></i>Linkedin</h6>
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                            <a href={`${profile.github}`} style={{ textDecoration: 'none'}} target= '_blank' rel="noreferrer" >
                                            <h6 className="mb-0" style={{ color: "black" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                            <a href={`${profile.twitter}`} style={{ textDecoration: 'none'}} target= '_blank' rel="noreferrer" >
                                            <h6 className="mb-0" style={{ color: "skyblue" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                            </svg>Twitter</h6>
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                            <a href={`${profile.instagram}`} style={{ textDecoration: 'none'}} target= '_blank' rel="noreferrer" >
                                            <h6 className="mb-0" style={{ color: "red" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>Instagram</h6>
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                            <a href={`${profile.facebook}`} style={{ textDecoration: 'none'}} target= '_blank' rel="noreferrer" >
                                            <h6 className="mb-0" style={{ color: "blue" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                            </svg>Facebook</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-8">
                            <div className="profilecard mb-3">
                                <div className="profilecard-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ textDecoration: 'none', color: "black" }}>Full Name</h6>
                                        </div>
                                        <div className="col-sm-9" style={{ textDecoration: 'none', color: "white", "text-transform": "uppercase" }}>
                                            {profile.firstName}  {profile.lastName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ textDecoration: 'none', color: "black" }}>Email</h6>
                                        </div>
                                        <div className="col-sm-9" style={{ textDecoration: 'none', color: "white" }}>
                                            {profile.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ textDecoration: 'none', color: "black" }}>Mobile</h6>
                                        </div>
                                        <div className="col-sm-9" style={{ textDecoration: 'none', color: "white" }}>
                                            {profile.mobNo}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ textDecoration: 'none', color: "black" }}>Address</h6>
                                        </div>
                                        <div className="col-sm-9" style={{ textDecoration: 'none', color: "white", "text-transform": "uppercase" }}>
                                            {profile.address}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <NavLink className="btn transonclick btn-info" to="/updateprofile"><i className='bi bi-pencil-square'></i> Edit</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profilecard mb-3">
                                <div className="profilecard-body">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h4 className="mb-0" style={{ textDecoration: 'none', color: "black" }}><strong>MY LATEST EVENTS</strong></h4>
                                        </div>
                                    </div>
                                    <hr />

                                    {
                                        events.map(event => {
                                            return (
                                                <div key={event._id} className="p-3 mb-2 text-black">
                                                    <Link style={{ textDecoration: 'none', color: "black", "text-transform": "uppercase" }} to={`/event/${event.eName}`}><h4 className='form-check-inline'>{event.eName}</h4></Link>

                                                    <p style={{ color: "blue" }}>{event.snippet}</p>
                                                    <div className="d-flex flex-mb-row">
                                                        <Link to={`/event/${event.eName}`}>
                                                            <button type="button" className="btn transonclick btn-primary form-check-inline"><i className="bi bi-binoculars"></i> View</button>
                                                        </Link>
                                                        <Link to={`/event/edit/${event.eName}`}>
                                                            <button type="button" className="btn transonclick btn-info form-check-inline"><i className='bi bi-pencil-square'></i> Edit</button>
                                                        </Link>
                                                        <button type="button"
                                                            className="btn transonclick btn-danger form-check-inline"
                                                            onClick={() => eventDelete(event.eName)}>
                                                            <i className="bi bi-trash"></i> Delete
                                                        </button>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Dashboard
