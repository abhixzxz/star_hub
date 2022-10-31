import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo3.png'
import "./Navbar.css"

function Navbar() {
    return (
        <div class="navbar-wrapper">
            <div class="container-fluid">
                <nav class="navbar navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <Link to='/' class="navbar-brand" href="#"><img src={logo} alt="" className='logo1' /></Link>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li class="active"><Link to="/" class="">HOME</Link></li>
                                <li class=" dropdown">
                                    <Link to="/hireartist" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">HIRE ARTISTS <span class="caret"></span></Link>
                                    <ul class="dropdown-menu">
                                        {/* <li><Link href="#">Hire Artists</Link></li> */}

                                        <li class=" dropdown">
                                            <Link to="/categories" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View categories</Link>
                                        </li>
                                        <li><Link to="/what-is-hire-artist">what is hire artist?</Link></li>

                                    </ul>
                                </li>
                                <li class=" dropdown"><Link href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PROJECTS <span class="caret"></span></Link>
                                    <ul class="dropdown-menu">
                                        <li><Link href="#">Latest</Link></li>
                                        <li><Link href="#">Developer contact</Link></li>
                                    </ul>
                                </li>

                                <li class=" down"><Link href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MORE<span class="caret"></span></Link>
                                    <ul class="dropdown-menu">
                                        <li><Link href="#">Membership</Link></li>
                                        <li><Link href="#">Report</Link></li>
                                        <li><Link href="#">Advertise with us</Link></li>
                                        <li><Link href="#">Showcase your work</Link></li>
                                        <li><Link href="#">STARHUB-WORLD</Link></li>
                                        <li><Link to="/help">Help?</Link></li>
                                    </ul>

                                </li>
                            </ul>

                            <ul>

                                <li><button className='btnx'><Link to="/login">Login</Link></button></li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar