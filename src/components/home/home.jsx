import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css'



export const Home = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        

<body>
    
  <header>
    <h1>Energy Consumption Monitoring</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="hero">
      <h2>Track Your Energy Usage</h2>
      <p>Enter your energy usage data and get real-time analytics and insights into your consumption patterns.</p>
      <a  href="/login" class="cta">&nbsp;&nbsp; Login&nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/register" class="cta">Subscribe</a>
    </section>
    <section class="features">
      <div>
        <h3>Real-Time Data</h3>
        <p>Get real-time analytics of your energy usage data, with up-to-the-minute updates on your energy consumption patterns.</p>
      </div>
      <div>
        <h3>Customizable Reports</h3>
        <p>Generate customizable reports of your energy usage data, with the ability to choose the specific data points you want to include.</p>
      </div>
      <div>
        <h3>Intuitive Dashboard</h3>
        <p>View your energy usage data in an intuitive and easy-to-use dashboard, with clear visualizations of your consumption patterns.</p>
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2023 Energy Consumption Monitoring. All rights reserved.</p>
  </footer>
</body>

    )
}
export default Home;
