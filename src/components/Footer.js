import React from 'react'
// import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
<div>

    <footer id="footer" >
        <div className="footer-top">
        <div className="container">
            <div className="row">

            <div className="col-md-4 p-3 footer-info">
                <h4><img src={require("./Images/logo-wbg.png")} alt="icon1" width='47%'/>&nbsp; </h4>
                <p>Website to show details of all events.</p>
                <p><i className="bi bi-geo-alt"></i> &nbsp;Madan Mohan Malaviya University of Technology Gorakhpur Uttar Pradesh</p>
            </div>

            <div className="col-md-4 p-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i className="fa fa-angle-right"></i> <a href="/">Home</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="/about">About us</a></li>
                {/* <li><i className="fa fa-angle-right"></i> <a href="#gallery">Gallery</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#EventSched">Events</a></li> */}
                <li><i className="fa fa-angle-right"></i> <a href="/contactus">Contact Us</a></li>
                </ul>
            </div>

            <div className="col-md-4 p-3 footer-contact">
                <h4>DEVELOPED BY</h4>
                <p>
                MMMUT Gorakhpur, India<br/>
                <strong>Phone:</strong> +91 789 786 7722<br/>
                <strong>Email:</strong> <a href="mailto:alokpatel885@gmail.com">alokpatel885@gmail.com</a><br/>
                <strong>Phone:</strong> +91 891 779 3044<br/>
                <strong>Email:</strong> <a href="mailto:prashantkgupta17@gmail.com">prashantkgupta17@gmail.com</a><br/>
                <strong>Phone:</strong> +91 872 666 8480<br/>
                <strong>Email:</strong><a href="mailto:shikharinfinity99@gmail.com"> shikharinfinity99@gmail.com</a><br/>
                </p>

                <div className="social-links">
                <a href="https://www.codeworld.ml" className="twitter"> <i className="fa fa-twitter rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="facebook"><i className="fa fa-facebook rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="instagram"><i className="fa fa-instagram rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="google-plus"><i className="fa fa-google-plus rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="linkedin"><i className="fa fa-linkedin rotate360"></i></a>
                </div>

            </div>

            </div>
        </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong></strong>. All Rights Reserved
            </div>
            <div className="credits">
                {/* <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent --> */}
                Made with 💖
            </div>
        </div>
        {/* <a href="#" className="back-to-top"><i className="fa fa-angle-up mx-4"></i></a> */}
</footer>

</div>
</>
    )
}