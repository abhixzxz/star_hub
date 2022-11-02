import React from 'react'
import './Services.css'
import tog from '../../assets/images/togyy.svg'
import tog1 from '../../assets/images/world.svg'
import tog2 from '../../assets/images/balloon.svg'

import { BiFace } from 'react-icons/bi';
import { SiThemodelsresource } from 'react-icons/si';
import { SiJordan } from 'react-icons/si';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import { SiApplemusic } from 'react-icons/si';
import { BsCameraFill } from 'react-icons/bs';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import { GiReactor } from 'react-icons/gi';



function Services() {
    return (
        <div>
            <section class="we-offer-area text-center bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="site-heading text-center">
                                <h2>What we <span>Offer</span></h2>
                                <h4> We have, 4,50,000 Creators <br />Get a wide array of content creators that speak 20+ languages from 1200 towns across India.</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row our-offer-items less-carousel">
                        <div class="col-md-4 col-sm-6 equal-height">
                            <div class="item">
                                <i><BiFace /></i>
                                <h4>Actors</h4>
                                <p>
                                    A high-quality acting portfolio makes you appear professional and hirable, and should emphasize your acting experience and talents.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 equal-height">
                            <div class="item">
                                <i><SiJordan /></i>
                                <h4>
                                    Dancing</h4>
                                <p>
                                    We have many dancer portfolio's,A dance portfolio is your visual resume. It can be used to supplement an admission application, even getting selected for your dream college dance team. In short, it's a handy tool which you can use wherever you need to showcase your dancing skills and experience in a quick, easy way.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 equal-height">
                            <div class="item">
                                <i><SiApplemusic /></i>
                                <h4>Singer
                                </h4>
                                <p>
                                    A high-quality Singer portfolio makes you appear professional and hirable, and should emphasize your acting experience and talents.
                                </p>
                            </div>
                        </div>
                        <div className="image-div-tog">
                            <img src={tog1} alt="toggy img" className='toggy-img-about' />

                            <img src={tog} alt="toggy img" className='toggy-img-about1' />
                            <img src={tog2} alt="toggy img" className='toggy-img-about2' />

                        </div>
                        <div class="col-md-4 col-sm-6 equal-height">
                            <div class="item">
                                <i><BsCameraFill /></i>
                                <h4>Photograper</h4>
                                <p>
                                    We are maintaning a block list of photographers, A good photographer can capture good memories.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 equal-height">
                            <div class="item">
                                <i><SiThemodelsresource /></i>
                                <h4>
                                    Model</h4>
                                <p>
                                    A high-quality acting portfolio makes you appear professional and hirable, and should emphasize your acting experience and talents.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 equal-height">
                            <div class="item">
                                <i><BsFillCameraReelsFill /></i>
                                <h4>Filmmaker</h4>
                                <p>
                                    A filmmaker has the responsibility of the entire crew and is almost like the lion of a jungle. Read on for some of the most famous filmmaking quotes that you will surely enjoy on your journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services