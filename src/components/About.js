import React from 'react'
import Profile from './../assets/images/profile.jpg'

let h20 = { height: '20px' }

var About = (props) => {

    return (<>
        
        <div class="container" id="About">
        <div class="card mt-5 bg-white shadow-lg  rounded">
            <div class="row">
                <div class="col-lg-7 p-5">
                    <h2 class=" card-title fw-light ">About Me</h2>
                    <p class="mt-3 text-justify">Hello! Iâ€™m Walter Patterson. I am passionate about UI/UX design and Web
                        Design. I am a skilled
                        front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a
                        quick learner and a team worker that gets the job done.</p>
                    <p>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for
                        real-time schemas.</p>

                </div>
                <div class="col-lg-5 p-5 pb-3">
                    <h2 class="card-title fw-light ">Bio</h2>
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="pb-2 fw-bolder"><i class="bi bi-calendar2 pe-2"></i> Age</div>
                        </div>
                        <div class="col-lg-7">
                            <div class="pb-2">21</div>

                        </div>
                        <div class="col-lg-5">
                            <div class="pb-2 fw-bolder"><i class="bi bi-envelope pe-2"></i>Email </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="pb-2">Sumanthpotla11@gmail.com</div>
                        </div>
                        <div class="col-lg-5">
                            <div class="pb-2 fw-bolder"><i class="bi bi-skype pe-2"></i>Skype</div>
                        </div>
                        <div class="col-lg-7">
                            <div class="pb-2">username@skype.com</div>
                        </div>
                        <div class="col-lg-5">
                            <div class="pb-2 fw-bolder"><i class="bi bi-telephone pe-2"></i>Phone</div>
                        </div>
                        <div class="col-lg-7">
                            <div class="pb-2">+91 9000850180</div>
                        </div>
                        <div class="col-lg-5">
                            <div class="pb-2 fw-bolder"><i class="bi bi-geo-alt pe-2"></i>Address</div>
                        </div>
                        <div class="col-lg-7">
                            <div class="pb-2">Hno:1-56, Vallabhi, khammam, Telangana. 507169</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


    </>)
}

export default About