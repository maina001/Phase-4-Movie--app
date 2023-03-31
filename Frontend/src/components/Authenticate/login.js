import React from "react";
// import { Link } from "react-router-dom"
import "./login.css"


function Login(){
    return(
        <div className="login_body">
            <div className="center">
                <h1 className="login_header">Login</h1>
                <form >
                    <div className="txt_field">
                        <input type="email" required/>
                        <label >Email</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div className="forgot">Forgot Password?</div>
                    <button className="login_btn" type="submit" >Login</button>
                    <div className="login_link">
                        Not a member? 
                        <a href="hello" className="signup_l" >Sign-up</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;