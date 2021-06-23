import React from 'react';
import footerLogo from './msitimg.jfif';
import './Footer.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="container-fluid mb-0 footer">
            <div className="row align-items-center upper_footer">
                <div className="col-6 col-sm-3">
                    <img id="footerimg" src={footerLogo} />
                </div>
                <div className="col-6 col-sm-3">
                    <p className="footer_header">Institutes</p>
                    <ul className="list-unstyled">
                        <li><a className="footer_links" href="https://www.iiit.ac.in/" target="_blank"><u>IIIT-H</u></a></li>
                        <li><a className="footer_links" href="http://jntuh.ac.in/" target="_blank"><u>JNTU-H</u></a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="footer_header">Quick Links</p>
                    <ul className="list-unstyled">
                        <Link to="/" className="footer_links"><li><u>Home</u></li></Link>
                        <Link to="/Placements" className="footer_links"><li><u>Placements</u></li></Link>
                    </ul>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="footer_header">Social Media Links</p>
                    <ul className="list-unstyled">
                        <li><a className="footer_links" href="https://www.linkedin.com/company/msit-official/" target="_blank"><LinkedInIcon /> <u>LinkedIn</u></a></li>
                        <li><a className="footer_links" href="https://www.instagram.com/msit_official/" target="_blank"><InstagramIcon /> <u>Instagram</u></a></li>
                        <li><a className="footer_links" href="https://www.facebook.com/msit.official/" target="_blank"><FacebookIcon /> <u>Facebook</u></a></li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="col-12 col-sm-12 text-center btm">
                    Consortium of Institutions of Higher Learning, IIIT Campus, Gachibowli, Hyderabad - 500032 Phone: 040-66531342 Mobile: +91 7799834583,+91 7799834585 E-mail: enquiries@msitprogram.net
                </div>
            </div>
        </div>
    )
}

export default Footer
