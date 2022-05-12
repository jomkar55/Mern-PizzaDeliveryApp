import React from 'react';
import "../CSS/Footer.css"
import { Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';





const FooterScreen = () => {


    const year = new Date().getFullYear()



    return (
        <div className='footer-main'>

            <div className='footer-head'>
                <div className='footer-logo-head'>
               
                <Navbar.Brand className="nav-brand" href="/"><LocalPizzaIcon className="pizza-icon" />Pizza <br/><span style={{color:"#fac564",fontSize:"10px"}}>DELICIOUS</span></Navbar.Brand>

                </div>

                <div className='footer-socialapp'>

                    <Link to="/" className='social-icons'>{<InstagramIcon />}</Link>
                    <Link to="/" className='social-icons'>{<FacebookIcon />}</Link>
                    <Link to="/" className='social-icons'>{<LinkedInIcon />}</Link>
                    <Link to="/" className='social-icons'>{<PinterestIcon />}</Link>
                    <Link to="/" className='social-icons'>{<YouTubeIcon />}</Link>
                    <Link to="/" className='social-icons'>{<TwitterIcon />}</Link>

                </div>


            </div>
            <Divider />



            <div className='footer'>

                <div className='footer-1'>
                    <h2>AboutUs</h2>
                    <p>Far far away, behind the word <br/> mountains, far from the <br/> countries Vokalia and <br/> Consonantia, there live the <br/> blind texts.</p>
                    


                </div>

                <div className='footer-1'>
                    <h2>Customer Support</h2>
                    <p>Customer Service</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                </div>

                
                <div className='footer-1'>
                    <h2>Services</h2>
                    <p>Cooked</p>
                    <p>Delivery</p>
                    <p>Quality Foods</p>
                    <p>Mixed</p>

                </div>

                <div className='footer-1'>
                    <h2>Orders & Returns</h2>
                    <p>Shipping</p>
                    <p>Returns</p>
                    <p>Promotions</p>


                </div>



            </div>
            <Divider />

            <div className='footer-end'>

                <div className='logo'>

                    {/* <img src={logo} /> */}

                </div>

                <div className='footer-endline'>
                    <p>Conditions of Use & Sale</p>
                    <p>Privacy Notice</p>
                    <p>Interest Based Ads</p>
                    <p>©{year}, pizza.com, Inc. or its affiliates</p>


                </div>



            </div>










        </div>
    );
};

export default FooterScreen;