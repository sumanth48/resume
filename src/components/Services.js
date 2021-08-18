import React from 'react'
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom'
import Websitedesign from './Websitedesign.js'
import WebsiteDevelopment from './WebsiteDevelopment.js'
import MobileApp from './MobileApp.js'

var OurServices = [
    {
        title: 'Website Design',
        pathname: '/services/website-design'
    },
    {
        title: 'Website Development',
        pathname: '/services/website-development'
    },
    {
        title: 'Mobile App',
        pathname: '/services/mobile-app'
    }
];


var Services = () => {


    return (<>
        <BrowserRouter>

            <div className="container py-2">
                <div className="row">
                    <div className="col-lg-3">
                        <nav>
                            <ul className="list-group">


                                {
                                    OurServices.map((res, i) => {
                                        return (<li className="list-group-item" key={i}>
                                            <NavLink
                                                activeStyle={{ color: 'white', backgroundColor: 'lightgreen' }}
                                                to={res.pathname}
                                                className="list-group-item list-group-item-action">
                                                {res.title}
                                            </NavLink>
                                        </li>)
                                    })
                                }


                                {/*
                                <li className="list-group-item">
                                    <Link
                                        to=""
                                        className="list-group-item list-group-item-action">Website Design</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link
                                        to="/services/website-development"
                                        className="list-group-item list-group-item-action">Website Development</Link>
                                </li>


                                <li className="list-group-item">
                                    <Link
                                        to="/services/mobile-app"
                                        className="list-group-item list-group-item-action">Mobile App</Link>
                                </li>
                                */}


                            </ul>
                        </nav>
                    </div>

                    <div className="col-lg-9">
                        <Switch>
                            <Route exact path="/services" component={Websitedesign} />
                            <Route exact path="/services/website-design" component={Websitedesign} />
                            <Route exact path="/services/website-development" component={WebsiteDevelopment} />
                            <Route exact path="/services/mobile-app" component={MobileApp} />
                            <Redirect to="/services" />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </>)
}

export default Services