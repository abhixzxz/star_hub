import React from 'react'
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
                            <img src="https://wallpaperaccess.com/full/2627244.jpg" alt="rover" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-teal">Actor</span>

                            <p>
                                An exploration into the truck's polarising design
                            </p>
                            <div className="user">
                                <img src="data:image/jpeg;base64,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" alt="user" />
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