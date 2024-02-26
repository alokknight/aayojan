import React from 'react';
import {  NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';

//////////////////////////////////////////////////////////////
//////////  class based react component( navbar)    //////////
//////////////////////////////////////////////////////////////

class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
            loggedIn: localStorage.getItem('userTokenTime')
        }
    };

        render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                    <div className="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={require("./Images/logo-wbg.png")}alt="" width="120%" height="47"/>&nbsp;
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>

                            <React.Fragment>
                                    <NavLink className="nav-item nav-link" to="/aayojan">Home</NavLink>
                                    <NavLink className="nav-item nav-link" to="/about">About Us</NavLink>
                                    <Link to="EventSched" className="nav-item nav-link" spy={true} offset={-50} smooth = {true} duration={500}>Events</Link>
                                    <NavLink className="nav-item nav-link" to="/contactus">Contact Us</NavLink>
                                    {/* <NavLink className="nav-item nav-link" to="/Eventsch">Event Schedule</NavLink> */}
                                {this.state.loggedIn ?
                                    <React.Fragment>
                                        <NavLink className="nav-item nav-link" to='/dashboard'>Dashboard</NavLink>
                                        <NavLink className="nav-item nav-link" to="/event/add">Add Event</NavLink>
                                        <NavLink className="nav-item nav-link" to="/signout">Sign Out</NavLink>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <NavLink className="nav-item nav-link" to="/signup">Sign Up</NavLink>
                                        <NavLink className="nav-item nav-link" to="/signin">Sign In</NavLink>
                                    </React.Fragment>}
                            </React.Fragment>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
} export default Navbar;

/////////////////////////////////////////////////////////////
////////////      end class based component     /////////////
/////////////////////////////////////////////////////////////




// ////////////////////////////////
// /// pkg
// ////////////////////////////////
// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: localStorage.getItem('userTokenTime')
//     }
//   }

//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-info">
//         <div className="container">
//           <Link className="navbar-brand" to="/">The Event</Link>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               {this.state.loggedIn ?
//                 <React.Fragment>
//                   <NavLink className="nav-item nav-link" to="/" exact>Home</NavLink>
//                   <NavLink className="nav-item nav-link" to="/event/add">Add Event</NavLink>
//                   <NavLink className="nav-item nav-link" to="/signout">Sign Out</NavLink>
//                 </React.Fragment>
//                 :
//                 <React.Fragment>
//                   <NavLink className="nav-item nav-link" to="/signin">Sign In</NavLink>
//                   <NavLink className="nav-item nav-link" to="/signup">Sign Up</NavLink>
//                 </React.Fragment>}
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
// export default Navbar;
//////////////////////////////////////////////////////////
/////////////    pkg ended succesfully     ///////////////
//////////////////////////////////////////////////////////



