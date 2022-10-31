import React from 'react'
import tony from '../../assets/images/tony.jpg'
import dance from '../../assets/images/dance.jpg'
import singer from '../../assets/images/singer.jpg'
import Filmmaker from '../../assets/images/director.jpg'
import model from '../../assets/images/model.jpeg'
import Photograper from '../../assets/images/Photograper.jpg'
// import model from '../../assets/images/model.jpeg'
// import model from '../../assets/images/model.jpeg'





import './Card.scss'
function Card() {
    return (
        <div className='top-cards'>
            <h1>Browse Auditions by Category</h1>
            <div class="card__collection clear-fix">
                <div class="cards cards--two">
                    <img src={tony} class="img-responsive" alt="Cards Image" />
                    <span class="cards--two__rect"></span>
                    <span class="cards--two__tri"></span>
                    <p>Actor</p>
                    <ul class="cards__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <div class="cards cards--three">
                    <img src={dance} class="img-responsive" alt="" />
                    <span class="cards--three__rect-1">
                        <span class="shadow-1"></span>
                        <p>Dancing</p>
                    </span>
                    <span class="cards--three__rect-2">
                        <span class="shadow-2"></span>
                    </span>
                    <span class="cards--three__circle"></span>
                    <ul class="cards--three__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>

                </div>
                <div class="cards cards--two">
                    <img src={singer} class="img-responsive" alt="" />

                    <span class="cards--two__rect"></span>
                    <span class="cards--two__tri"></span>
                    <p>Singer</p>
                    <ul class="cards__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>

                </div>


            </div>
            <div class="card__collection clear-fix">
                <div class="cards cards--two">
                    <img src={Photograper} class="img-responsive" alt="Cards Image" />
                    <span class="cards--two__rect"></span>
                    <span class="cards--two__tri"></span>
                    <p>Photograper</p>
                    <ul class="cards__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <div class="cards cards--three">
                    <img src={model} class="img-responsive" alt="" />
                    <span class="cards--three__rect-1">
                        <span class="shadow-1"></span>
                        <p>Model</p>
                    </span>
                    <span class="cards--three__rect-2">
                        <span class="shadow-2"></span>
                    </span>
                    <span class="cards--three__circle"></span>
                    <ul class="cards--three__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>

                </div>
                <div class="cards cards--two">
                    <img src={Filmmaker} class="img-responsive" alt="" />

                    <span class="cards--two__rect"></span>
                    <span class="cards--two__tri"></span>
                    <p> Filmmaker</p>
                    <ul class="cards__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Card