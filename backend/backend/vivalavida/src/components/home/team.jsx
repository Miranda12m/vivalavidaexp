import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Team() {

    return (
        <>
            <style>
                {`
           .team {
            padding: 80px 0;
        }
        
        .team h2 {
            font-size: 30px;
            font-weight: 700;
            margin: 0;
            padding: 0;
        
        }
        
        .team h2 span {
            color: #ff9100;
        }
        
        .team p {
            font-size: 15px;
            font-weight: 400;
            line-height: 1.7;
            color: #999999;
            margin: 20px 0 60px;
            padding: 0;
        }
        
        .team .box {
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
            transition: all .5s ease-in-out;
            border-radius: 1.2%;
        }
        .team .box:hover{
            box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
        }
        
        .team .box .image {
            position: relative;
            height: 100%;
            border-radius: 1.2%;
        }
        
        .team .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ff9100 1%,#56dc1 100%);
            top: 0;
            opacity: 0;
            transition: all 0.5s ease-in-out;
            z-index: 15;
            
        }
        
        .team .box .image .social-icons {
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: #ffffff;
            z-index: 20;
            text-decoration: none;
            opacity: 0;
            margin-top: 100px;
            padding: 8px 15px;
            background: #ffffff;
            border-radius: 35px;
            transition: all 0.5s ease-in-out;
        }
        
        .team .box .image .social-icons i {
            font-size: 18px;
            padding: 0 7px;
            color: #ff9100;
        }
        
        .team .box:hover .overlay {
            opacity: 0.85;
        }
        
        .team .box:hover .social-icons {
            margin-top: 0;
            opacity: 1;
        }
        
        .team .box h3 {
            margin: 0;
            padding: 0;
            margin-top: 20px;
            font-size: 17px;
            font-weight: 600;
        }
        
        .team .box h4 {
            margin: 0;
            padding: 0;
            font-size: 13px;
            color: #999999;
            font-weight: 400;
            margin-top: 5px;
            padding-bottom: 25px;
        }
        
        .team .box:hover {
            transform: translateY(-15px);
        }
        
        .icons:hover{
            transition: all 0.2s ease-in-out;
            transform: translateY(-5px);
            color: black;
        }
            `}
            </style>
            <div>
                <section class="team" id="team">
                    <div class="container text-center" >
                        <h2 data-aos="fade-right">Meet Our
                            <span> Team</span></h2>
                        <p data-aos="fade-right">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            <br />incididunt ut labore et dolore magna aliqua.</p>
                        <div class="row" data-aos="fade-up">

                            <div class="col-lg-3 col-md-6">
                                <div class="box">
                                    <div class="image">
                                        <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" style={{ borderRadius: '2%' }} />
                                        <div class="social-icons">
                                            <a href="#"><FaFacebook size={20} className="icons" /></a>
                                            <a href="#"><FaInstagram size={20} style={{ marginLeft: '15px', marginRight: '15px' }} className="icons" /></a>
                                            <a href="#"><FaTwitter size={20} className="icons" /></a>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <h3>Lorem Ipsum</h3>
                                    <h4>Lorem Ipsum</h4>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="box">
                                    <div class="image">
                                        <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" style={{ borderRadius: '2%' }} />
                                        <div class="social-icons">
                                            <a href="#"><FaFacebook size={20} className="icons" /></a>
                                            <a href="#"><FaInstagram size={20} style={{ marginLeft: '15px', marginRight: '15px' }} className="icons" /></a>
                                            <a href="#"><FaTwitter size={20} className="icons" /></a>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <h3>Lorem Ipsum</h3>
                                    <h4>Lorem Ipsum</h4>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="box">
                                    <div class="image">
                                        <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" style={{ borderRadius: '2%' }} />
                                        <div class="social-icons">
                                            <a href="#"><FaFacebook size={20} className="icons" /></a>
                                            <a href="#"><FaInstagram size={20} style={{ marginLeft: '15px', marginRight: '15px' }} className="icons" /></a>
                                            <a href="#"><FaTwitter size={20} className="icons" /></a>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <h3>Lorem Ipsum</h3>
                                    <h4>Lorem Ipsum</h4>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="box">
                                    <div class="image">
                                        <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" style={{ borderRadius: '2%' }} />
                                        <div class="social-icons">
                                            <a href="#"><FaFacebook size={20} className="icons" /></a>
                                            <a href="#"><FaInstagram size={20} style={{ marginLeft: '15px', marginRight: '15px' }} className="icons" /></a>
                                            <a href="#"><FaTwitter size={20} className="icons" /></a>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <h3>Lorem Ipsum</h3>
                                    <h4>Lorem Ipsum</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br><br></br>
            </div>

        </>
    );
}