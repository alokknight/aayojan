import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
// import {Link} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Listhover from './Listhover'
import './event.css';
// import { NavLink ,Link} from 'react-router-dom'

export default function Event({ match }) {
    const { eName } = useParams()
    const [event, setEvent] = useState({})
    const [notifyEmail, setNotifyEmail] = useState();


    // console.log(notifyEmail)
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://aayojanserver.onrender.com/api/event/${eName}`)
            .then(res => setEvent(res.data))
            .catch(err => {
                console.log(err, 'Event not found react')
            })
    }, [eName])

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post(`https://aayojanserver.onrender.com/api/notify/${eName}/${notifyEmail}`)
        .then(()=> alert('Event Scheduled'))
        .catch(()=> alert('Some Error Occured'))
    }

    // console.log(event)

    if (!event) Navigate("*")
    var video = 'https://www.youtube.com/embed/';
    video += event.evideoid ? event.evideoid.split('=')[1] : 'SpMVPPIl8x0';
    return (
        <div>
            <Navbar />
            {/* <Listhover/> */}
            {event ? (
                <>
                    <div className="container my-5" >
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className="list-container mb-3">

                                <div id="list">
                                    <h3>{event.eTitle}</h3>
                                    <div id="list-item">
                                        <div id="rank"><span>1</span></div>
                                        <div id="name">
                                            <h4> Event Name</h4>
                                            <p>{event.eName}</p>
                                        </div>
                                    </div>
                                    <div id="list-item">
                                        <div id="rank"><span>2</span></div>
                                        <div id="name">
                                            <h4>Date</h4>
                                            <p>{event.eDate}</p>
                                        </div>
                                    </div>
                                    <div id="list-item">
                                        <div id="rank"><span>3</span></div>
                                        <div id="name">
                                            <h4>Event Timing</h4>
                                            <p>{event.eTime}</p>
                                        </div>
                                    </div>
                                    {/* <div id="list-item">
                                        <div id="rank"><span>3</span></div>
                                        <div id="name">
                                            <h4>Event video ID</h4>
                                            <p>{event.evideoid}</p>
                                        </div>
                                    </div> */}
                                    <div id="list-item">
                                        <div id="rank"><span>4</span></div>
                                        <div id="name">
                                            <h4>Venue</h4>
                                            <p>{event.eVenue} {event.eCountry}</p>
                                        </div>
                                    </div>
                                    <div id="list-item">
                                        <div id="rank"><span>5</span></div>
                                        <div id="name">
                                            <h4>Contact Email:</h4>
                                            <p>{event.email}</p>
                                        </div>
                                    </div>
                                    <div id="list-item">
                                        <div id="rank"><span>6</span></div>
                                        <div id="name">
                                            <h4>Contact Number</h4>
                                            <p>{event.code}{event.mobNo}</p>
                                        </div>
                                    </div>

                                    <form onSubmit={onSubmitHandler}>
                                        <input class="form-control form-control-sm" type="email" placeholder="email@domain.com" aria-label=".form-control-sm example" onChange={e => setNotifyEmail(e.target.value)} required></input>
                                        <hr />
                                        <button type='submit' className='btn btn-warning'>Notify</button>
                                    </form>
                                    {/* <div className="row">
                                        <div className="col-sm-12">
                                            <NavLink  className="btn transonclick btn-info rotate360" to="/">Notify Me</NavLink>
                                        </div>
                                    </div> */}
                                </div>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                            <div class="profilecard video-container">
                                <div className='profilecard-body'>
                                    <iframe
                                            src={`${video}`}
                                            frameborder="0"
                                            allow="autoplay; encrypted-media"
                                            allowfullscreen="true"
                                            title="video"></iframe>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* <div className="list-container col-lg-3 col-sm-6 mb-3">

                            <div id="list">
                                <h3>{event.eTitle}</h3>
                                <div id="list-item">
                                    <div id="rank"><span>1</span></div>
                                    <div id="name">
                                        <h4> Event Name</h4>
                                        <p>{event.eName}</p>
                                    </div>
                                </div>
                                <div id="list-item">
                                    <div id="rank"><span>2</span></div>
                                    <div id="name">
                                        <h4>Date</h4>
                                        <p>{event.eDate}</p>
                                    </div>
                                </div>
                                <div id="list-item">
                                    <div id="rank"><span>3</span></div>
                                    <div id="name">
                                        <h4>Event Timing</h4>
                                        <p>{event.eTime}</p>
                                    </div>
                                </div>
                                <div id="list-item">
                                    <div id="rank"><span>4</span></div>
                                    <div id="name">
                                        <h4>Venue</h4>
                                        <p>{event.eVenue} {event.eCountry}</p>
                                    </div>
                                </div>
                                <div id="list-item">
                                    <div id="rank"><span>5</span></div>
                                    <div id="name">
                                        <h4>Contact Email:</h4>
                                        <p>{event.email}</p>
                                    </div>
                                </div>
                                <div id="list-item">
                                    <div id="rank"><span>6</span></div>
                                    <div id="name">
                                        <h4>Contact Number</h4>
                                        <p>{event.code}{event.mobNo}</p>
                                    </div>
                                </div>

                                <form onSubmit={onSubmitHandler}>
                                    <input class="form-control form-control-sm" type="email" placeholder="email@domain.com" aria-label=".form-control-sm example" onChange={e => setNotifyEmail(e.target.value)} required></input>
                                    <hr />
                                    <button type='submit' className='btn btn-warning'>Notify</button>
                                </form>
                            </div>
                        </div>
                        <div className="yvideo col-lg-8 col-sm-6 my-2">
                            <div className="profilecard mb-3" style={{ width: "100%", height: "90%" }}>
                                <div className="profilecard-body">
                                    <iframe
                                        style={{ width: "100%", height: "90%" }}
                                        src={`${video}`}
                                        frameborder="0"
                                        allow="autoplay; encrypted-media"
                                        allowfullscreen="true"
                                        title="video"
                                    />
                                </div>
                            </div>

                        </div> */}
                    </div>


                </>
            ) : null}


            {event ? (
                <div className="mt-5 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="eventcard">
                                    <div className="eventcard-body">
                                        <h3 className="eventcard-title bg-info mb-5">Vertical Timeline</h3>

                                        <div className="row justify-content-center">
                                            <div className="col-lg-10">
                                                <ul className="verti-timeline list-unstyled" dir="ltr">

                                                    <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-warning"></i>
                                                        </div>
                                                        <div className="event-content">
                                                            <h2 className="mt-0 mb-3 font-18">{event.eName}</h2>
                                                            <p style={{float: "right"}}>{event.eTitle}</p>
                                                            <div className="text-muted">
                                                                <div style={{ color: "black", wordWrap: 'break-word', textAlign: 'justify' }} className="mb-0" dangerouslySetInnerHTML={{ __html: event.eBody }}></div>
                                                            </div>

                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            {/* <h5 className="mt-0">{event.eDate.slice(9,11)}</h5> */}
                                                            <p className="mb-0 text-white-50">{event.eDate}</p>
                                                            <p className="mb-0 text-white-50">{event.eTime}</p>
                                                        </div>

                                                    </li>
                                                    {/* <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-success"></i>
                                                        </div>
                                                        <div className="event-content p-4">
                                                            <h5 className="mt-0 mb-3 font-18">Timeline Event One</h5>
                                                            <div className="text-muted">
                                                                <p className="mb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                                <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                                            </div>
                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            <h5 className="mt-0">02</h5>
                                                            <p className="mb-0 text-white-50">June</p>
                                                            <p className="mb-0 text-white-50">5:30pm</p>
                                                        </div>
                                                    </li> */}

                                                    {/* <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-danger"></i>
                                                        </div>
                                                        <div className="event-content p-4">
                                                            <h5 className="mt-0 mb-3 font-18">Timeline Event Two</h5>
                                                            <div className="text-muted">
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem quia voluptas sit</p>
                                                                <button type="button" className="btn btn-primary waves-effect waves-light">See more detail</button>
                                                            </div>
                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            <h5 className="mt-0">05</h5>
                                                            <p className="mb-0 text-white-50">June</p>
                                                        </div>
                                                    </li> */}

                                                    {/* <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-primary"></i>
                                                        </div>
                                                        <div className="event-content p-4">
                                                            <h5 className="mt-0 mb-3 font-18">Timeline Event Three</h5>
                                                            <div className="text-muted">
                                                                <p className="mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                                <img src="assets/images/small/img-1.jpg" alt="" className="rounded m-1" style={{ width: "120px" }} />
                                                                <img src="assets/images/small/img-2.jpg" alt="" className="rounded m-1" style={{ width: "120px" }} />

                                                            </div>
                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            <h5 className="mt-0">07</h5>
                                                            <p className="mb-0 text-white-50">June</p>
                                                        </div>
                                                    </li> */}


                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Link to={`/event/edit/${event.eName}`}>
                    <button type="button" className="btn transonclick btn-info form-check-inline m-2"><i className='bi bi-pencil-square'></i> Edit</button>
                    </Link> */}
                </div>) : null}

            <Footer />
        </div>
    )
}

// <div className="col-sm-6 mb-3" >
//                             <div className="profilecard h-100">
//                                 <div className="profilecard-body">

//                                     <h4 className="d-flex align-items-center mb-3">
//                                         <i className="material-icons text-info mr-2">{event.eTitle}</i>
//                                     </h4>

//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> Event Name</h6>
//                                         <span className="text-secondary">{event.eName}</span>
//                                     </li>

//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> Date</h6>
//                                         <span className="text-secondary">{event.eDate}</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> Sponser</h6>
//                                         <span className="text-secondary">{event.eSponser}</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> Venue</h6>
//                                         <span className="text-secondary">{event.eVenue}</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> Address</h6>
//                                         <span className="text-secondary">{event.address}</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> Pincode</h6>
//                                         <span className="text-secondary">{event.pinCode}</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> City</h6>
//                                         <span className="text-secondary">{event.city}</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0"> Country</h6>
//                                         <span className="text-secondary">{event.country}</span>
//                                     </li>

//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0">Mobileno:</h6>
//                                         <span className="text-secondary">{event.code}{event.mobNo}</span>
//                                     </li>

//                                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
//                                         <h6 className="mb-0">Email:</h6>
//                                         <span className="text-secondary">{event.email}</span>
//                                     </li>

//                                     <hr />
//                                     <div className="row">
//                                         <div className="col-sm-12">
//                                             <NavLink className="btn transonclick btn-info" to="/">Notify Me</NavLink>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>