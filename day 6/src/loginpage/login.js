import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
           {/* <Link to="/home"><button type="submit" className="btn btn-primary">
            Submit
          </button></Link> */}
          <Link to="/home">
            Submit
          </Link>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
          Don't have a account  <a href="/sign-up">sign up?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}
