import React, { Component } from 'react'

//Child Class
class User extends Component {

    constructor(props) {
        super(props);

        //step-1: state object initialization
        this.state = {
            msg: "This is State Object Information",
            email: '',
            uname: "kumar",
            pwd: "kumar123"
        }

    }

    //class_Method
    EmailHandling = () => {
        this.setState({ email: 'kumar@gmail.com' })
    }

    render() {

        var { msg, email, uname, pwd } = this.state

        return (<>

            <div className="p-5">
                <h2>STATE OBJECT EXAMPLE</h2>

                {/* Step-2: Access State Object Properties from JSX */}
                {msg}
                {/* Step-2: Access State Object Properties from JSX */}

                <br />
                <button onClick={() => this.setState({ msg: 'State is Changed.....' })}>Click</button>

                <br /><br />

                <h2 onMouseOver={this.EmailHandling}> Email is: {email} </h2>
                <br /><br />

                <form>

                    <label>UserName</label>
                    <input type="text" value={uname} onChange={() => console.log('')} /> <br /><br />

                    <label>Password</label>
                    <input type="password" value={pwd} onChange={() => console.log('')} /> <br /><br />

                </form>


            </div>


        </>)
    }

}

export default User