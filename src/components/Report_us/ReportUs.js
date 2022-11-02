import React from 'react'
import './ReportUs.css'

import Select from "react-dropdown-select";
import Thanks from '../Thanks/Thanks';

function ReportUs() {
    const optionsp = [
        { value: 'lagging', label: 'laggging' },
        { value: 'mobile responsive issues', label: 'mobile responsive issues' },
        { value: 'ui issues', label: 'ui issues' },
        { value: 'Slow upload', label: 'Slow upload' },
        { value: 'Badly integrated', label: 'Badly integrated ' },

    ]
    return (
        <div className='report-body'>
            <aside class="profile-card">
                <header>


                    <h1>
                        Report-us
                    </h1>

                    {/* <h2>
                        Better Visuals
                    </h2> */}

                </header>

                <div class="profile-bio">

                    <p>
                        At Starhub, we take the safety and data security of our artists & recruiters very seriously. While it is not possible for starhub to monitor or to regulate the behaviour and actions of registered artists and recruiters, the company is committed to supporting every user in preventing possible misuse of the platform.
                    </p>
                    <form>
                        <Select options={optionsp} placeholder="select the issue.." style={{ width: '300px' }} className="selectbox-report" required />
                        <br />
                        <input type="text" placeholder='username' required /> <br /> <br />


                        <input type="email" placeholder='email' required /> <br />
                        <br />

                        <button type='submit' className='btnbtn'>submit</button>
                    </form>



                </div>

            </aside>


        </div>
    )
}

export default ReportUs