import React from "react";
import './Eschd.css';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll'


export default function Eschd() {
    return (
        <Element id="EventSched" name="EventSched">
            <div id="EventSched" className="event-schedule-area-two pad100 my-5" >
                <section id="Event">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Event Schedule</h2>
                            <p>All Events are shown here</p>
                            <p><i>Got Your's scheduled yet </i></p>
                        </div>
                    </div>
                </section>
                <div className="container profilecard  mt-4 mb-4 p-3">
                    {/*
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="title-text">
                                <h2>Event Schedule</h2>
                            </div>
                            <p>
                                In ludus latine mea, eos paulo quaestio an. Meis possit ea sit. Vidisse molestie<br />
                                cum te, sea lorem instructior at.
                            </p>
                        </div>
                    </div>
                </div>
                */}

                    <div className="row ">
                        <div className="col-lg-12">
                            <ul className="nav custom-tab pb-2" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link type="button" className="nav-link show btn btn-outline-success rounded p-2" id="home-tab Thursday" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">TODAY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-outline-success rounded p-2" id="profile-tab" data-toggle="tab" to="/upcoming" role="tab" aria-controls="profile" aria-selected="false">UPCOMING</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-outline-success rounded p-2" id="contact-tab" data-toggle="tab" to="/past" role="tab" aria-controls="contact" aria-selected="false">PAST</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}