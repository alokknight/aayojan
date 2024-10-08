import React from 'react';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

import Form from './Form';
import Navbar from './Navbar';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      redirect: localStorage.getItem('userTokenTime') ? true : false,
      requestError: '',
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (!(this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '')
      && (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
      axios.post('https://aayojanserver.onrender.com/api/signup', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(res => {
          console.log(res);
          alert("A verification link is sent to your email address. Check Junk/Spam also and mark it as safe.")
        this.setState({
          redirect: true
        });
      }).catch(err => {
        console.log(err.message);
        this.setState({
          requestError: 'User already registered'
        })
      });
    } else {
      this.setState({
        requestError: 'Please fill all the details'
      })
      // alert('Please enter valid details');
    }
  }
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value, requestError: ''})
  }

  render() {
    if (this.state.redirect) return <Navigate to='/signin' />
    return (
      <React.Fragment>
        <Navbar />
        <div className="container" >
          <div className="d-flex justify-content-center h-100">
            <div className="registercard">
              <div className="card-header text-center text-info">
                <h3>Register</h3>
              </div>

              <div className="card-body">
                <Form onSubmit={this.onSubmitHandler}>
                  {/* <h3 className="text-center text-info">Register</h3> */}
                  <div className="form-group">
                    <label htmlFor="first-name" className="text-info">First Name:</label><br />
                    <input
                      id="first-name"
                      className="form-control"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={this.changeHandler}
                      required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name" className="text-info">Last Name:</label><br />
                    <input
                      id="last-name"
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={this.changeHandler}
                      required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">Email:</label><br />
                    <input
                      id="email"
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="xyz@domain.com"
                      onChange={this.changeHandler}
                      required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br />
                    <input
                      id="password"
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="********"
                      onChange={this.changeHandler}
                      required />
                  </div>
                  <div className="d-flex justify-content-between align-items-end my-2 text-warning">
                    {this.state.requestError && <p>{this.state.requestError}</p>}
                  </div>
                  <div className="form-group my-2">
                    <input type="submit" value="Register" className="btn float-right login_btn transonclick" />
                  </div>
                </Form>

                <div className="card-footer">
                  <div className="mt-2 d-flex justify-content-center links transonclick">
                    <Link style={{ textDecoration: 'none', color: "#ffff" }} to="/signin" className="d-flex justify-content-centertext-info">Have an account?? Login</Link>
                  </div>

                  <div className="mt-1 d-flex justify-content-center transonclick">
                    <Link style={{ textDecoration: 'none', color: "#ffff" }} to="/password/forgot">Forgot your password?</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default SignUp;