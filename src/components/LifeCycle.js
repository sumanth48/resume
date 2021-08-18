import React, { Component } from 'react'

export default class LifeCycle extends Component {


    constructor(props) {
        super(props);
        //this.state={''}
        console.log('**************Constructor******************')
    }


    render() {
        console.log('**************Render******************')
        return (<>
            <div className="p-5">
                <h2>Life Cycle Methods.....</h2>
            </div>
        </>)
    }


    componentDidMount() {
        console.log('***************componentDidMount*****************')
    }


    /*
     shouldComponentUpdate() {
         console.log("<<<<<<<<<<<<<<<<<<<<<<<This is shouldComponentUpdate >>>>>>>>>>>>>>>>>>>");
     }
 
 
  
     componentWillUpdate() {
         console.log("<<<<<<<<<<<<<<<<<<<<<<<This is componentWillUpdate >>>>>>>>>>>>>>>>>>>");
     }
     
     
     componentDidUpdate() {
         console.log("<<<<<<<<<<<<<<<<<<<<<<<This is componentDidUpdate >>>>>>>>>>>>>>>>>>>");
     }
     
     
     componentWillUnmount() {
         alert("You are leaving from Component");
         console.log("<<<<<<<<<<<<<<<<<<<<<<<This is  componentWillUnmount >>>>>>>>>>>>>>>>>>>");
     }
     */

}
