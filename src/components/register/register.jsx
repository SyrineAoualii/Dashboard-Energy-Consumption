
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './register.scss';



export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (

    <div>
        <br />
        <div class="header" >
    <header  style={{borderRadius:'10%'}}>
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
            <div className="form">

            <h2 style={{fontFamily:'fantasy'}}>Register Form</h2>
        <form className="register-form" onSubmit={handleSubmit}>
  
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="FullName" />
            <br/>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" required email/>
            <br/>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" required minLength={6}/>
            <br/>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Confirm_Password" id="Confirm_password" name="Confirm password" required minLength={6}/>
            <br/>
            <button type="submit" >Register</button> <br />
            <h1 className="link-btn" style={{fontStyle:'italic'}} ><br />  Already have an account? <Link to="/login" style={{color:'blue'}}>Login here.</Link></h1>
        </form>
       
        </div>
        
       </div>
    </div>
    )
}
export default Register;
