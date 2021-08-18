import React from 'react'
import profile from "./../assets/images/profile.jpg"
import bgWallpaper from "./../assets/images/jumbotron-backgrounds.png"


var jumbotronStyles =
{
    backgroundImage: `url(${bgWallpaper})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '500px'
}
var Home = (props) => {

    return (<React.Fragment>
        <div className="container mt-5 " >
            <div className="card shadow-lg bg-white rounded ">
                <img className="card-img " src="1.jpg" height="550px" alt="" />
                <div className="card-img-overlay">
                    <img className="img-thumbnail mx-auto d-block mt-5" width="300px" height="300px" src="2.jpg" alt="" />
                    <h1 className="font-bold text-center mt-5 text-light">Sumanth Potla</h1>
                    <h6 className="text-center text-light    ">Front-end Developer</h6>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a href="https://twitter.com/PotlaSumanth" className="nav-link "><img
                            src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/24/Twitter-icon.png"
                            alt="" /></a></li>
                        <li className="nav-item"><a href="https://www.facebook.com/potla11/" className="nav-link "><img
                            src="https://icons.iconarchive.com/icons/yootheme/social-bookmark/24/social-facebook-box-blue-icon.png"
                            alt=""/></a></li>
                            <li className="nav-item"><a href="https://www.instagram.com/sumanth_potla/" className="nav-link "><img
                                src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/24/Instagram-icon.png"
                                alt=""/></a></li>
                                <li className="nav-item"><a href="www.linkedin.com/in/sumanth-potla-9093b216b" className="nav-link "><img
                                    src="https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/24/linkedin-icon.png"
                                    alt=""/></a></li>

                                    </ul>
                                <div className="text-center my-3">
                                    <a href="resume.pdf" target="-blank" className="btn btn-outline-light me-3  ">Download CV</a>
                                    <a href="#Contact" className="btn btn-info text-light fw-bold">HIRE ME</a>
                                </div>
                </div>


            </div>
         </div>
        

    </React.Fragment>)
}

                export default Home