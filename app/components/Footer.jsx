'use client';
import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footerLeft">
      {/* <div className="footerLogo">NutriVerse</div> */}
      <ul className="footerLinks">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <p className="footerText">© 2023 NutriVerse. All rights reserved.</p>
    <div className="footerRight">
      <ul className="socialIcons">
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .footer {
        color: #000;
        width: 98%;
        margin: 15px auto;
        padding: 20px;
        border-top: 2px solid #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(82, 37, 37, 0.1);
      }

      .footerLeft {
        display: flex;
        align-items: center;
      }

      .footerLogo {
        margin-right: 10px;
      }

      .footerLinks {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      }

      .footerLinks li {
        margin-right: 20px;
      }

      .footerLinks a {
        text-decoration: none;
        color: #008d46;
        font-weight: bold;
      }

      .footerText {
        margin: 0;
        font-size: 0.9em;
        text-align: center; /* Center the text within the footer */
        flex-grow: 1; /* Allow the <p> element to grow and take available space */
      }

      .footerRight {
        display: flex;
        align-items: center;
      }

      .socialIcons {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      }

      .socialIcons li {
        margin-right: 10px;
      }

      .socialIcons a {
        text-decoration: none;
        color: #008d46;
        font-size: 1.5em;
      }
    `}</style>
  </footer>
);

export default Footer;
