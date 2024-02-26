import React from 'react'
import CardCarousel from './CardCarousel'
// import { Link, Navigate } from 'react-router-dom'
// import axios from 'axios';

export default function Sponsers() {
    return (
        <>
            <React.Fragment>
                <div className="mt-5">
                    <section>
                        <section id="sponsers">
                            <div className="container" data-aos="fade-up">
                                <div className="section-header">
                                    <h2>Our Sponsers</h2>
                                    <p>These are our target Sponsers</p>
                                </div>
                            </div>
                        </section>
                        <div className="container">
                        {/* <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
                            <div className="sponser-img row my-2 mx-2 d-flex flex-sm-row flex-column">
                                <div className="col text-center">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://github.com/shikhar790/imagepoint/blob/main/h&m.png?raw=true" width='200px' height='200px' alt="H & M Clothing Brand" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">H & M</h2>
                                    <p className="text-center font-monospace ">One of the biggest clothing brands</p>
                                </div>
                                <div className="col text-center mb-5">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://github.com/shikhar790/imagepoint/blob/main/10%20park%20street.jpg?raw=true" width='200px' height='200px' alt="" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">10 Park Street Cafe and Kitchen</h2>
                                    <p className="text-center font-monospace ">One of the best cafe in Gorakhpur</p>
                                </div>
                                <div className="col text-center mb-5">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://github.com/shikhar790/imagepoint/blob/main/raddisson%20blu.png?raw=true" width='200px' height='200px' alt="" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">Raddisson Blu Hotel and Restaurant</h2>
                                    <p className="text-center font-monospace ">One of the biggest restaurant chains of India</p>
                                </div>
                                <div className="col text-center mb-5">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://github.com/shikhar790/imagepoint/blob/main/forest%20club.jpg?raw=true" width='200px' height='200px' alt="" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">Forest Club, Gorakhpur</h2>
                                    <p className="text-center font-monospace ">One of the best Event Venues in Gorakhpur</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <section id="client">
                            <div className="container mb-0" data-aos="fade-up">
                                <div className="section-header">
                                    <h2>Our Clients</h2>
                                    <p>These societies and companies are our potential customers.</p>
                                </div>
                            </div>
                        </section>
                        <div className='mb-3'>
                            <CardCarousel/>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        </>
    )
}
