import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

function Updateprofile() {
    const userToken = localStorage.getItem("userTokenTime")
    const decode = decodeToken(userToken)

    const [profile, setProfile] = useState({});
    const Navigate = useNavigate();
    useEffect(()=>{
        axios.get(`https://aayojanserver.onrender.com/api/signin/${decode.email}`)
        .then(res => setProfile(res.data))
        .catch(err => console.log(err.message))
    },[])

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put(`https://aayojanserver.onrender.com/api/signup/update/${decode.email}`, profile, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            alert('Profile Updated');
            console.log('Profile Updated-', res);
            Navigate('/dashboard');
        })
        .catch(err=>{
            alert('Profile not updated');
            console.log('Error-', err);
            Navigate('/dashboard');
        })
    }

    return (
        <div>
            <Navbar />
            <h2 className="mx-1 my-1 text-center p-2" style={{ color: "white" }}>Hi <strong style={{ color: "red" }}>{profile.firstName}</strong>, Update your profile here...!</h2>
            <div className="container">
                <div className="main-body">
                    <form onSubmit={onSubmitHandler}>

                        <div className="row gutters-sm">

                            {/* Profile */}
                            <div className="col-md-4 mb-3">
                                <div className="profilecard">
                                    <div className="profilecard-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width={"150"} />
                                            <div className="mt-3">
                                                <h4 style={{ textDecoration: 'none', color: "aliceblue", "text-transform": "uppercase" }}>{profile.firstName}</h4>
                                                <input type='text' name='bio' className="col-sm form-control mb-1" onChange={e => setProfile({...profile, bio: e.target.value})} defaultValue={profile.bio}/>
                                                {/* <button className="btn transonclick btn-primary mx-1">Follow</button>
                                                <button className="btn transonclick btn-outline-primary mx-1">Message</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Social Links */}
                                <div className="profilecard  mt-3">
                                    <div className="profilecard-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                                                <h6 className="mb-0" style={{ color: "orange" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                                <input className="form-control" onChange={e => setProfile({...profile, website: e.target.value})} value={profile.website} />

                                            </li>
                                            <li className="list-group-item bg-transparent">
                                                <h6 className="mb-0" style={{ color: "blue" }}><i className="fa fa-linkedin rotate360 mx-2"></i>Linkedin</h6>
                                                <input className="form-control" onChange={e => setProfile({...profile, linkedin: e.target.value})} value={profile.linkedin} />
                                            </li>

                                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                                                <h6 className="mb-0" style={{ color: "black" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                                <input className="form-control" onChange={e => setProfile({...profile, github: e.target.value})} value={profile.github} />

                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                                                <h6 className="mb-0" style={{ color: "skyblue" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                </svg>Twitter</h6>
                                                <input className="form-control" onChange={e => setProfile({...profile, twitter: e.target.value})} value={profile.twitter} />

                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                                                <h6 className="mb-0" style={{ color: "red" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </svg>Instagram</h6>
                                                <input className="form-control" onChange={e => setProfile({...profile, instagram: e.target.value})} value={profile.instagram} />

                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                                                <h6 className="mb-0" style={{ color: "blue" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                </svg>Facebook</h6>
                                                <input className="form-control" onChange={e => setProfile({...profile, facebook: e.target.value})} value={profile.facebook} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                            </div>

                            {/* Details */}
                            <div className="col-md-8">
                                <div className="profilecard mb-3">
                                    <div className="profilecard-body m-3">
                                        <div className="row">
                                            <div className="col-sm">
                                                <h6 className="mb-0" style={{ textDecoration: 'none', color: "aliceblue" }}>First Name</h6>
                                            </div>
                                            <input className="col-sm-9 form-control" onChange={e => setProfile({...profile, firstName: e.target.value})} value={profile.firstName} required />
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm">
                                                <h6 className="mb-0" style={{ textDecoration: 'none', color: "aliceblue" }}>Last Name</h6>
                                            </div>
                                            <input className="col-sm-9 form-control" onChange={e => setProfile({...profile, lastName: e.target.value})} value={profile.lastName} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm">
                                                <h6 className="mb-0" style={{ textDecoration: 'none', color: "aliceblue" }}>Country Code</h6>
                                            </div>
                                            <input className="col-sm-9 form-control" onChange={e => setProfile({...profile, code: e.target.value})} value={profile.code} />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm">
                                                <h6 className="mb-0" style={{ textDecoration: 'none', color: "aliceblue" }}>Mobile</h6>
                                            </div>
                                            <input className="col-sm-9 form-control" onChange={e => setProfile({...profile, mobNo: e.target.value})} value={profile.mobNo} />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm">
                                                <h6 className="mb-0" style={{ textDecoration: 'none', color: "aliceblue" }}>Address</h6>
                                            </div>
                                            <input className="col-sm-9 form-control" onChange={e => setProfile({...profile, address: e.target.value})} value={profile.address} />
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-12 m-2 rounded text-center">
                                    <button type='submit' className='btn transonclick btn-dark shadow-lg'>Save</button>
                                </div>
                            </div>
                            </div>

                        </div>

                    </form>

                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Updateprofile;