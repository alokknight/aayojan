import React from 'react'
// import { Link } from 'react-router-dom'

export default function Extra() {
    return (
        <div>

            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 style={{ textDecoration: 'none', color: "#ffff" }}>About The Website</h2>
                            <p style={{ textDecoration: 'none', color: "white", opacity: "100%" }}>TheEvent website connects students with different colleges and companies through events, challenges
                                and competitions. Users can publish cultural events, challenges, webinars and college festivals.</p>
                        </div>
                        <div className="col-lg-3">
                            <h3>Where</h3>
                            <p>Madan Mohan Malaviya University of Technology, Gorakhpur</p>
                        </div>
                        {/* <div className="col-lg-3">
                            <h3>When</h3>
                            <p>Monday to Sunday</p>
                        </div> */}
                        {/* <div className="col-lg-3">
                            <Link to='/about' className='btn btn-info'>Read More</Link>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
