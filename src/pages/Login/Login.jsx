import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

// import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="wrapperxx">
            <div className="containerd">
                <div className="col-left">
                    <div className="login-text">
                        <h2 className='login-h2'>STAR-HUB</h2>
                        <p className='login2p'> Login to explore..!!
                        </p>

                        <Link className='btnr' to="">Read More</Link>
                        {/* <a className="btn" href="">Read More</a> */}
                    </div>
                </div>

                <div className="col-right">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form >
                            <p>
                                <input type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </p>
                            <p>
                                <input type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </p>
                            {/* <p className='login2px'>
                            </p> */}
                            <button className='login-btnz'>Login</button>

                            <p className='login-p'>
                                <br />
                                <br /><br />
                                <Link to="/register">Don't have an Account?Signup</Link>
                                {/* <a>Forget password?</a>
                                <a>Create an account.</a> */}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login