import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import './AboutActegory.scss'
function AboutCategory() {
    return (
        <div>
            <Navbar />
            <main>
                <section class="home-section" id="home-section">
                    <div class="h-s-inner__1">
                        <h1>What is HireArtist? <br />How it works?</h1>
                        <p>StarHub has been founded by one of India's most celebrated digital entrepreneurs & young CEOs, along with high-quality co-founders hailing from some of the best tech/mobile companies of the country.Mainly focus for recruters.</p>
                    </div>
                    <div class="h-s-inner__2">
                        <img src="https://rvs-edie-homepage.onrender.com/heroImage.jpg" alt="hero-image" />
                    </div>
                    <div class="h-s-inner__3">
                        <h1>About our Hiring</h1>
                        <p>There are 5,00,000+ artists and 14,000+ verified industry recruiters on StarHub.
                            Find and apply for auditions across India - Join as an artist
                            View portfolios and contact artists for your projects - Join as a recruiter
                        </p>
                        <div class="inner-join">

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default AboutCategory