import React from "react";
// import { Link } from "react-router-dom";
import "./Signup.css";


function Registration() {
    return (
        <div className="signup_body">
            <div className="container">
                <h1 className="signup_header">Sign-up</h1>
                <form action="submit">
                    <div className="form-field">
                        <input type="text" name="fullname" required/>
                        <label >Full Name</label>
                    </div>
                    <div className="form-field">
                        <input type="text" name="email" required/>
                        <label >Email</label>
                    </div>
                    <div className="form-field">
                        <input type="tel" name="tel" required/>
                        <label >Phone Number</label>
                    </div>
                    <div className="form-field">
                        <input type="password" name="password" required/>
                        <label >Password</label>
                    </div>
                    <button className="signup_btn" type="submit">Create Account</button>
                    <div className="login_link">
                        Already have Account? 
                        <a href="hello" className="signup_l" >Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;