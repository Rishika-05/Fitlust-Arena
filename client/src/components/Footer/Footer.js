import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaSnapchat} from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className=" footer">
            <div className="footer-container">
                <strong className="footer-subheading">JOIN US NOW</strong>
                <div className="footer-icons">
                    <FaInstagram className="footer-icon" onClick = {()=>{window.open('https://www.instagram.com/fitlust_arena','_blank')}}/>
                </div>
                <span className="footer-subheading footer-copy">&copy;&nbsp;Fitlust Arena&nbsp; {currentYear}</span>
            </div>
        </footer>
    )
}

export default Footer