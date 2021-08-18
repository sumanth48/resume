import React from 'react'

//import FontAwesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

var bgc = { 'backgroundColor': '#475562' }

var Contact = () => {
    return (<>

        <div className="container-fluid" style={bgc} id="contact">
            <div className="container p-5 text-center">

                <h1 className="pt-2 pb-3 text-white">CONTACT</h1>

                <div className="row">


                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3 border-0 " style={bgc}>
                            <p>
                                <FontAwesomeIcon size="3x" icon={faSmile} className="text-weight-bold text-success" />
                            </p>

                            <div className="card-body">
                                <h5 className="py-1">ADDRESS</h5>
                                <h6>Sree Raman Towers,Kothapet</h6>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3  border-0" style={bgc}>
                            <p>
                                <FontAwesomeIcon size="3x" icon={faSmile} className="text-weight-bold text-success" />
                            </p>
                            <div className="card-body">
                                <h5 className="py-1">PHONE NUMBER</h5>
                                <h6>040-254685, 79894563210</h6>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3  border-0" style={bgc}>
                            <p>
                                <FontAwesomeIcon size="3x" icon={faSmile} className="text-weight-bold text-success" />
                            </p>
                            <div className="card-body">
                                <h5 className="py-1">WEBSITE</h5>
                                <h6><a href="https://ambesttechnologies.com" className="text-white">https://ambesttechnologies.com</a></h6>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="form-group">
                            <input type="text" className="form-control bg-dark" placeholder="Name:*" />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="form-group">
                            <input type="text" className="form-control bg-dark" placeholder="Email:*" />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="form-group">
                            <input type="text" className="form-control bg-dark" placeholder="Phno:*" />
                        </div>
                    </div>


                    <div className="col-lg-12">
                        <div className="form-group">
                            <textarea className="form-control bg-dark" style={{ height: '200px' }} placeholder=" Message*"></textarea>
                        </div>
                    </div>


                    <div className="col-lg-12">
                        <div className="form-group">
                            <button type="submit" className="btn btn-success float-right">Send Message</button>
                        </div>
                    </div>




                </div>

            </div>
        </div>

    </>)
}

export default Contact
