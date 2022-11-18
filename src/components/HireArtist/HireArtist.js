import React, { useRef, useState } from 'react'
import './HireArtist.css'
import Select from "react-dropdown-select";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'


function HireArtist() {



    const options = [
        { value: 'Actor', label: 'Actor' },
        { value: 'Model', label: 'Model' },
        { value: 'Dancer', label: 'Dancer' },
        { value: 'Singer', label: 'Singer' },
        { value: 'Photographer', label: 'Photographer' },
        { value: 'Musician', label: 'Musician' },
        { value: 'Graphic Designer', label: 'Graphic Designer' },
        { value: 'Writer', label: 'Writer' },
        { value: 'Painter', label: 'Painter' },
        { value: 'Anchor', label: 'Anchor' },
        { value: 'Voice-over Artist', label: 'Voice-over Artist' },
        { value: 'Filmmaker', label: 'Filmmaker' },
        { value: 'Advertising Professional', label: 'Advertising Professional' },
        { value: 'Others', label: 'Others' },



    ]
    const options1 = [
        { value: 'Kerala', label: 'Kerala' },
        { value: 'TamilNadu', label: 'TamilNadu' },
        { value: 'Karnataka', label: 'Karnataka' },
        { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
        { value: 'Assam', label: 'Assam' },
        { value: 'Bihar', label: 'Dancer' },
        { value: 'HaryanaHimachal Pradesh', label: 'HaryanaHimachal Pradesh' },
        { value: 'Jharkhand', label: 'Jharkhand' },
        { value: 'Maharashtra', label: 'Maharashtra' },
        { value: 'Manipur', label: 'Manipur' },
        { value: 'Meghalaya', label: 'Meghalaya' },
        { value: 'Mizoram', label: 'Mizoram' },
        { value: 'Nagaland', label: 'Nagaland' },
        { value: 'Odisha', label: 'Odisha' },
        { value: 'Punjab', label: 'Punjab' },
        { value: 'Rajasthan', label: 'Rajasthan' },
        { value: 'Sikkim', label: 'Sikkim' },
        { value: 'Telangana', label: 'Telangana' },
        { value: 'Tripura', label: 'Tripura' },
        { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
        { value: 'Uttarakhand', label: 'Uttarakhand' },
        { value: 'West Bengal', label: 'West Bengal' },
        { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    ]
    return (
        <div className='top-hire'>
            <Navbar />
            <div className='main-hire'>

                <Select options={options1} placeholder="State.." style={{ width: '300px' }} className="selectboxx" />
                <Select options={options} placeholder="Catagroy" style={{ width: '300px' }} className="selectboxx2" />

                <div className="main-card-element">
                    <div className="cardx">
                        <div className="card-header">
                            <img src="https://wallpaperaccess.com/full/2627244.jpg" alt="rover" id="actr-img" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-teal">Actor</span>

                            <p>
                                An exploration into the truck's polarising design
                            </p>
                            <div className="user">
                                <img src="https://ik.imagekit.io/j83rchiauw/A_List_Star/nivinpauly-biography.tring.png?tr=q-100,e-sharpen" alt="user" />
                                <div className="user-info">
                                    <h5>July Dec</h5>
                                    <small>2h ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardx">
                        <div className="card-header">
                            <img src="https://wallpapercave.com/wp/AJy9l3P.jpg" alt="user" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-purple">Model</span>

                            <p>
                                The future can be scary, but there are ways to
                                deal with that fear.
                            </p>
                            <div className="user">
                                <img src="https://static.toiimg.com/photo/59046409.cms" alt="user" />
                                <div className="user-info">
                                    <h5>Eyup Ucmaz</h5>
                                    <small>Yesterday</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardx">
                        <div className="card-header">
                            <img src="https://static.toiimg.com/photo/59046409.cms" alt="user" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-pink">Dancer</span>
                            <p>
                                Dashboard Design Guidelines
                            </p>
                            <div className="user">
                                <img src="https://static.toiimg.com/photo/59046409.cms" alt="user" />
                                <div className="user-info">
                                    <h5>Carrie Brewer</h5>
                                    <small>1w ago</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="main-card-element">
                    <div className="cardx">
                        <div className="card-header">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Prithviraj_oil_paint_2019.jpg" alt="user" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-teal">Actor</span>

                            <p>
                                An exploration into the truck's polarising design
                            </p>
                            <div className="user">
                                <img src="https://i.pinimg.com/564x/96/08/58/960858cc01b2f4c1f2d4e45493fb42d0.jpg" alt="user" />
                                <div className="user-info">
                                    <h5>July Dec</h5>
                                    <small>2h ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardx">
                        <div className="card-header">
                            <img src="https://i.pinimg.com/564x/96/08/58/960858cc01b2f4c1f2d4e45493fb42d0.jpg" alt="user" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-purple">Model</span>

                            <p>
                                The future can be scary, but there are ways to
                                deal with that fear.
                            </p>
                            <div className="user">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Johny_Hendricks_MMA.jpg" alt="user" />
                                <div className="user-info">
                                    <h5>Eyup Ucmaz</h5>
                                    <small>Yesterday</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardx">
                        <div className="card-header">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Johny_Hendricks_MMA.jpg" alt="user" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-pink">Photographer</span>

                            <p>
                                Dashboard Design Guidelines
                            </p>
                            <div className="user">
                                <img src="https://i.guim.co.uk/img/media/8c6dc6ffd49a89bfb09cd3e944debecf874db8c0/43_0_1000_600/master/1000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a898ff5cf2052c7e93c53480b7ebe2f6" alt="user" />
                                <div className="user-info">
                                    <h5>Carrie Brewer</h5>
                                    <small>1w ago</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br /><br />
            <Footer />
        </div>

    )
}

export default HireArtist