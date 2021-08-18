//App.js -> JAVASCRIPT Module
import React, { Fragment } from 'react'

//import Route package
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'


//Functional Components....
import Nav from './Nav.js'
import Footer from './Footer.js'
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Services from './Services.js'
import Blog from './Blog.js'
import Contact from './Contact.js'
import PagenotFound from './Pagenotfound'


//Class Components
import StateObject from './UserClass.js'
import LifeCycle from './LifeCycle.js'
import RestfullAPI from './RestfullAPI.js'
import UserDetails from './UserDetails.js'

var App = function (props) {

    return (<>
        <BrowserRouter>


            {/* MENU */}
            <Nav />
            {/* MENU */}


            {/*<Home />*/}

            {/*  /       ->means http://localhost:3000/  */}

            {/*  /home   ->means http://localhost:3000/home  */}


            <Switch>
                <Route exact path="/" component={Home} /> {/* Default Route  */}
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/services" component={Services} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />



                {/* Class Components */}
                <Route path="/state" component={StateObject} />
                <Route path="/lifecycle" component={LifeCycle} />
                <Route exact path="/restapi" component={RestfullAPI} />
                <Route path="/restapi/:id" component={UserDetails} />


                {/* Class Components */}


                <Route component={PagenotFound} />
                <Redirect to="/home" />
            </Switch>

            {/* Footer */}
            <Footer />
            {/* Footer */}



        </BrowserRouter>
    </>)
}


export default App