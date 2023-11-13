import React from 'react'
import { Link } from "react-router-dom";
import "./css/footer.css";
function Footer() {
  return (
    <>
            <footer className="footer-section">
                <div className="container">

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    {/* <div className="footer-logo">
                                        <a href="index.html"><img src="./img/Weblesslogosbg.png" className="img-fluid" alt="logo"></img></a>
                                    </div> */}
                                    <div className="footer-social-icon">
                                        <div className="footer-widget-heading">
                                            <h3>About Us</h3>
                                        </div>
                                    </div>
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <img src="./img/Weblesslogosbg.png" className="img-fluid" alt="logo"></img>
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>We appreciate your trust in our company and our products. We will continue working hard to provide you with the best products and services.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/tour">
                                                Tours
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/termsandconditions">
                                                Terms and Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/our-work">
                                                Our Work
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/privacypolicy">
                                                Privacy Policy
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don't miss to contact us if you had any question</p>
                                        <p>Phone: +52 81 8020 9327</p>
                                        <p>Mail: contact@weblessproject.com</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p className="text-left" >Copyright &copy; 2023, All Right Reserved <a href="/">Webless Project</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/#/terms-and-conditions">Terms and Conditions</a></li>
                                        <li><a href="/#/privacy-policy">Privacy Policies</a></li>
                                        <li><a href="mailto:contact@weblessproject.com" target="_blank">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
  )
}

export default Footer