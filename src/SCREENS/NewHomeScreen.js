
import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Newhome.css"
import PhoneIcon from '@mui/icons-material/Phone';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Card } from 'react-bootstrap';
// import aboutimg from "../IMAGES/about.jpg"
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import FooterScreen from './FooterScreen';
const NewHomeScreen = () => {
    return (
        <div  >

            <div className="bgimage-sec " >

                <div className='newhome-text'>
                    <p className='welcome-text'>Welcome</p>
                    <h2 className='newhome-h4'>We Cooked Your Desired <br></br>Pizza Recipe</h2>
                    <p className='newhome_para'>A small river named Duden flows by their place and supplies it with the  necessary regelialia</p>


                    <Link to="/homescreen">
                        <button className='order_btn'>Order Now</button>
                    </Link>
                </div>

            </div>




            <div className='sec-2_info row '>


                <div className='col-md-8 p-4 bg-dark '>

                    <div className='row '>

                        {/* card1 */}

                        <div className="col-md-3 p-3 ms-auto me-auto main_card" >
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <PhoneIcon className="card_icons" />
                                </div>
                                <div className="col-md-8">
                                    <p className="card-text">000 (123) 456 7890</p>
                                    <div className="card-body">
                                        <p className='text-card'>  A small river named Duden flows</p>

                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-md-3 p-3   me-auto main_card" >
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <MyLocationIcon className="card_icons" />
                                </div>
                                <div className="col-md-8">
                                    <p className="card-text">198 West 21th Street</p>
                                    <div className="card-body">
                                        <p className='text-card'> Suite 721 New York NY 10016</p>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3 p-3 me-auto main_card" >
                            <div className="row g-0">
                                <div className="col-md-2" >
                                    <AccessTimeIcon className="card_icons" />

                                </div>
                                <div className="col-md-8">
                                    <p className="card-text">Open Monday-Friday</p>
                                    <div className="card-body">
                                        <p className='text-card'>8:00am - 9:00pm</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='col-md-4' style={{ backgroundColor: "#fac564", display: "table" }}>

                    <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                        <TwitterIcon className="icons_" />
                        <FacebookIcon className="icons_" />
                        <InstagramIcon className="icons_" />

                    </div>



                </div>
            </div>


            {/* sec3 */}


            <div className='sec3_maindiv row'>

                <div className=' col-md-6 col-sm-12 sec_3_img'  >

                    {/* <img src={aboutimg}></img> */}
                </div>

                <div className=' col-md-6 col-sm-12 sec3_text'>

                    <h4>WELCOME TO <span>PIZZA</span>  A RESTAURANT</h4>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>



                </div>
            </div>


            {/* sec 4 */}


            <div className='sec4_main'>
                <h3>OUR SERVICES</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>

                <div className='sec4_card'>

                    <Card style={{ width: '20rem' }} className="card_div" >

                        <div className='card_icon_div'>
                            <FastfoodOutlinedIcon className="sec4card_icon" />
                        </div>

                        <Card.Body>
                            <Card.Title className='card_title'>HEALTHY FOODS</Card.Title>
                            <Card.Text className='card_text_sec4'>
                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                            </Card.Text>

                        </Card.Body>
                    </Card>


                    <Card style={{ width: '20rem' }} className="card_div">
                        <div className='card_icon_div'>
                            <LocalShippingOutlinedIcon className="sec4card_icon" />
                        </div>
                        <Card.Body>
                            <Card.Title className='card_title'>FASTEST DELIVERY</Card.Title>
                            <Card.Text className='card_text_sec4'>
                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className="card_div">
                        <div className='card_icon_div'>
                            <LocalPizzaOutlinedIcon className="sec4card_icon" />
                        </div>
                        <Card.Body>
                            <Card.Title className='card_title'>ORIGINAL RECIPES</Card.Title>
                            <Card.Text className='card_text_sec4'>
                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>



            <FooterScreen />







        </div>
    );
};

export default NewHomeScreen;