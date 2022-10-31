import React from 'react'
import { useState, useContext } from 'react'

import './Signup.css'
import { Link } from 'react-router-dom'

function SignUp() {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="wrapperxx">
            <div className="containerd">
                <div className="col-left">
                    <div className="login-text">
                        <h2>STAR-HUB</h2>
                        <p> Login to explore..!!
                        </p>
                        <Link className='btnrr' to="#">Read More</Link>
                        {/* <a className="btn" href="">Read More</a> */}
                    </div>
                </div>
                <div className="col-right">
                    <div className="login-form">
                        <h2>Sign-Up</h2>
                        <form  >
                            <input
                                className="input"
                                type="text"
                                placeholder='Enter your Name'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                name="name"
                            />
                            <br />
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your Email'
                            />
                            <br />
                            <input
                                className="input"
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter your Contact number'
                                name="phone"
                            />
                            <br />
                            <input
                                className="input"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your Password'
                            />
                            <br />
                            <button className='login-btnz'>SignUp</button>
                            <br />
                            <Link to="/login"><p className="ac-signup">Alredy have an account? Login</p></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp