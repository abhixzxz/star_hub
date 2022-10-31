import React from 'react'
import './Help.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Help() {
    
    return (
        <div class="containerx">
            <Navbar />
            <div class="row">
                <div class="col-md-6">
                    <h1 className='help-heading'>Let's get you<br /> some help!</h1>
                    <h6 className='helph6'>Have any issue? Send us an <span class="email-us">starhub@gmail.com</span></h6>
                    <div class="imgxx-wrapper">
                        <img src="https://i.ibb.co/bWfN3Qy/undraw-onboarding-o8mv-1.png" alt="undraw-onboarding-o8mv-1" border="0" />
                    </div>
                </div>

                <div class="col-md-6">
                    <form className='main-form-help'>
                        <div class="form-group">
                            <label for="list">What list are you looking for ?</label>
                            <input type="text" class="form-control" id="list" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="tags">Please Few Primary Tags ?</label>
                            <input type="text" class="form-control" id="tags" />
                        </div>

                        <div class="form-group">
                            <label for="describe">Please desribe your list needs ?</label>
                            <textarea type="text" class="form-control" id="describe" rows="5"></textarea>
                        </div>



                        <button type="button" class="btn btn-primary"><span>Submit</span> <i class="fas fa-long-arrow-alt-right"></i></button>
                    </form>
                </div>

            </div>
            <Footer />

        </div>

    )
}

export default Help