import React, { useState } from "react";
import {Link } from 'react-router-dom';

import "./login.scss"


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (

        <div >
            <br />
        <div class="header" >
            <header style={{borderRadius:'10%'}}>
    <h1 style={{color:'purple'}}>Energy Consumption Monitoring</h1>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  </header>
  </div>
  
       <div className="auth-form-container" style={{color: 'white'}}>
           <div className="forms">
           
            <h2 style={{fontFamily:'fantasy'}}>Login Form</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <br/>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" required email />
                <br/>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" required minLength={6} />
                
                <button type="submit" >Log In</button>
                <h1 className="link-btn" style={{fontStyle:'italic'}} ><br />  you can Register here  <Link  to="/register" style={{color:'blue'}}>Register</Link></h1>
            </form>

            
           
           </div>
            
        </div>


        </div>
        
    )
}

export default Login;