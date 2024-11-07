import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
      <footer className="footer">

        <div>
          <div className="footer-section">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Support</p>
            <p>FAQ</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p>About</p>
            <p>Services</p>
            <p>Blogs</p>
            <p>Contact</p>
          </div>
          <div className="footer-section">
            <h4>Subscribe Us</h4>
            <p>Subscribe to get latest news</p>
            <p>article and resources</p>
            <div className="subscribe-container">
              <input type="email" placeholder="Subscribe Now ..." className="subscribe-input"/>
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
          <div className="footer-section">
            <h4>Megakit.</h4>
            <p>Support@megakit.com</p>
            <p>+23-456-6588</p>
          </div>
        </div>
        <div className="footer-end">
          <div>
            <p className="footer-left">Copyright © 2024, Designed & Developed by <b> Amro Al-Wageei </b></p>
          </div>

          <div className='footer-right'>
            <span> <p> Facebbok </p> <FontAwesomeIcon icon={faFacebookF} className="social-icon"/></span>
            <span> <p> Twitter </p>  <FontAwesomeIcon icon={faTwitter} className="social-icon"/></span>
            <span> <p> Instagram </p>  <FontAwesomeIcon icon={faInstagram} className="social-icon"/></span>
          </div>

        </div>
      </footer>
  );
}

export default Footer;
