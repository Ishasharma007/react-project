import {Link} from "react-router-dom"
import "./Cta.css"
 import React from 'react'
 
 const Cta = () => {
   return (
    <section className="cta">
        <h1>
            Enroll For Our Various Online Course <br/>
            Anywhhere From The World
        </h1>
        <Link to="/contact" className="hero-btn">
        Contact Us</Link>

    </section>
   )
 }
 
 export default Cta