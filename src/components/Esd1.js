import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Eschd.css';

export default function Esd1() {

    const [todayEvents, setTodayEvents] = useState([])

    useEffect(() => {
        axios.get('https://aayojanserver.onrender.com/api/event/today')
            .then(res => setTodayEvents(res.data))
            .catch(err => console.log(err.error))
    }, [])
    // console.log(todayEvents)

    return (
        <div >
            <div className="mt-5 mb-5 event-schedule-area-two bg-color pad100"  >
                <div className="container" >
                <h4 className='text-center text-warning'>Schedule of Today's Events</h4>
                    <div className="tab-content" id="myTabContent" >
                        <div className="tab-pane fade active show " id="today" role="tabpanel" >
                            <div className="table-responsive" >
                                <table className="table" style={{ border: '2px solid #198754'}} >
                                    <thead >
                                        <tr style={{ backgroundcolor: 'black' }}>
                                            <th className="text-center" scope="col">Date</th>
                                            <th scope="col">Organiser</th>
                                            <th scope="col">Event</th>
                                            <th scope="col">Venue</th>
                                            <th className="text-center" scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-secondary' >
                                        {
                                            todayEvents.map(event => {
                                                return (
                                                    <tr className="inner-box bg-secondary" key={event.eName} >
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                {/* <span>{event.eDate}</span> */}
                                                                <h5>{event.eDate.split("-").reverse().join("-")}</h5>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <h5>{event.eOrganiser}</h5>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h5>{event.eName}</h5>
                                                            {/* <div className="meta">
                                                            <div className="time">
                                                                <span >2:00 PM - 05:00 PM </span>
                                                            </div>
                                                            </div> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <h5 className=".demo-1 .main">{event.eVenue}</h5>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <Link to={`/event/${event.eName}`}>
                                                                    <button className='btn transonclick btn-dark'>Read More</button>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
