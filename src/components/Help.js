import React, { Component } from 'react';
import './Help.css';
import Navbar from './Navbar'
import Footer from './Footer'
export default class Help extends Component {
    render() {
        return (
            <>
            <Navbar/>
                <div className="topmargin">
                    <section>
                        <section id="team">
                            <div className="container" data-aos="fade-up">
                                <div className="section-header">
                                    <h2>Our Team</h2>
                                    <p><i>Contact us if you encounter any technical problems.</i></p>
                                    <p><i>We would love to be in touch with you! Please sign up to receive emails from us</i></p>
                                </div>
                            </div>
                        <div className="container my-5">
                            <div className="row mt-40">
                                <div className="col-md-4 col-sm-12">
                                    <div className="box1 sample"> <img src={require('./Images/Alok.jpg')} alt="" />
                                        <h3 className="title">ALOK PATEL</h3>
                                        <ul className="icon">
                                            <li><a href="mailto:alokpatel885@gmail.com"><i className="fa fa-envelope rotate360"></i></a></li>
                                            <li><a href="https://www.alokknight.com"><i className="fa fa-facebook rotate360"></i></a></li>
                                            <li><a href="https://www.twitter.com/alokknight"><i className="fa fa-twitter rotate360"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/alokknight"><i className="fa fa-linkedin rotate360"></i></a></li>
                                            <li><a href="https://www.github.com/alokknight"><i className="fa fa-github rotate360"></i></a></li>
                                            <li><a href="https://coderpapa.herokuapp.com"><i className="fa fa-globe rotate360"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    {/* <div className="box1 sample"> <img src="https://i.imgur.com/8RKXAIV.jpg" alt="" className="img-thumbn"/> */}
                                    <div className="box1 sample"> <img src={require('./Images/Prashant.jpg')} alt="" className="img-thumbn"/>
                                        <h3 className="title">PRASHANT Kr GUPTA</h3>
                                        <ul className="icon">
                                            <li><a href="mailto:prashantkgupta17@gmail.com"><i className="fa fa-envelope rotate360"></i></a></li>
                                            <li><a href="https://www.facebook.com/impgupta"><i className="fa fa-facebook rotate360"></i></a></li>
                                            <li><a href="https://twitter.com/imPGupta_"><i className="fa fa-twitter rotate360"></i></a></li>
                                            <li><a href="https://linkedin.com/in/impgupta"><i className="fa fa-linkedin rotate360"></i></a></li>
                                            <li><a href="https://github.com/imPGupta"><i className="fa fa-github rotate360"></i></a></li>
                                            <li><a href="https://www.codeworld.ml"><i className="fa fa-globe rotate360"></i></a></li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="col-md-4 col-sm-12">
                                    <div className="box1 sample"> <img src={require('./Images/Shikhar.jpg')} alt=""/>
                                        <h3 className="title">SHIKHAR CHATURVEDI</h3>
                                        <ul className="icon">
                                            <li><a href="mailto:shikharinfinity99@gmail.com"><i className="fa fa-envelope rotate360"></i></a></li>
                                            {/* <li><a href="https://www.aayojan.com"><i className="fa fa-facebook rotate360"></i></a></li> */}
                                            {/* <li><a href="https://www.twitter.com/shikhar"><i className="fa fa-twitter rotate360"></i></a></li> */}
                                            <li><a href="https://www.linkedin.com/in/shikhar-chaturvedi-1026a21a8/"><i className="fa fa-linkedin rotate360"></i></a></li>
                                            <li><a href="https://www.github.com/shikhar790"><i className="fa fa-github rotate360"></i></a></li>
                                            <li><a href="https://aayojan.herokuapp.com"><i className="fa fa-globe rotate360"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <Footer/>
            </>

        )
    }
}
