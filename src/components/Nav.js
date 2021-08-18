import React from 'react'
import { NavLink } from 'react-router-dom'

let navbarStyles = {
    backgroundColor: '#d9142b',
    borderBottom: '0.5px white solid',
    borderTop: '0.5px white solid'
}

export default function Nav() {

    let MenuList = ["Home", "About", "Skills", "Services", "Blog", "Contact",   "Restapi"]


    return (<>
        <nav className="navbar navbar-expand-lg" style={navbarStyles}>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/*
                    <Link className="nav-item nav-link text-white text-uppercase mx-2 active" to="/home">Home </Link>
                    <Link className="nav-item nav-link  text-white text-uppercase mx-2 " to="/about">About</Link>
                    <Link className="nav-item nav-link  text-white text-uppercase mx-2 " to="/portfolios">Portfolios</Link>
                    <Link className="nav-item nav-link text-white text-uppercase mx-2 " to="/services">Services</Link>
                    <Link className="nav-item nav-link text-white text-uppercase mx-2 " to="/blog">Blog</Link>
                    <Link className="nav-item nav-link text-white text-uppercase mx-2 mr-5" to="/contact">Contact</Link>
                    */}

                    {
                        MenuList.map((res, i) => <NavLink key={i} activeClassName="bg-danger"
                            className="nav-item nav-link text-dark text-uppercase mx-2 active"
                            to={`/${res.toLowerCase()}`}>{res}</NavLink>)
                    }
                </div>
            </div>
        </nav>
    </>)
}