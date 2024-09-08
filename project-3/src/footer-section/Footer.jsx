import { Container } from 'react-bootstrap'
import './footer.scss'
import React from 'react'

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Footer = () => {
  return (
    <div className='footer'>
       <Container>
        <div className="footer-body">
            <div className="footer-row">
                <h6> Jadoo.</h6>
                <p>Book your trip in minute, get full
Control for much longer.
</p>
            </div>

            <div className="footer-row">
                <h6 className="footer-heding">Company</h6>
                <li> About</li>
                <li>Careers</li>
                <li>Mobile</li>
                </div>
                <div className="footer-row">
                <h6 className="footer-heding">Contact</h6>
                <li> Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
                </div>
                
                <div className="footer-row">
                <h6 className="footer-heding">More</h6>
                <li> Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
                </div>
                
                <div className="footer-row">
                <h6 className="footer-heding">Company</h6>
                <li> About</li>
                <li>Careers</li>
                <li>Mobile</li>
                </div>
                
                
            <div className="footer-row">
                <div className="footer-logo">
<li> <FaFacebook className='size'/> </li>
<li> <FiInstagram className='size' /> </li>
<li> <FaTwitter className='size' /> </li>
                </div>
                <h2>Discover our app </h2>
                <div className="footer-logo">
                     <li> <FaGooglePlay className='size' /> </li>
                     <li> <FaApplePay className='size' /> </li>
                </div>
                </div>
        </div>
       </Container>
    </div>
  )
}

export default Footer
