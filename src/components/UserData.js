import React from 'react'
//import JSON EXTERNAL DATA INTO MODULE
import UsersInfo from './../assets/json/usersData.json'

var Userdata = (props) => {

    var title = "User Data Component"

    var userInfo = UsersInfo.map((data, i) => {
        return (<tr key={i}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phno}</td>
        </tr>)
    })

    //object Destcturing for props 
    //var { name, photo, role, company, city } = props

    return (<React.Fragment>

        <div className="container py-5">

            <h1 className="text-center bg-primary text-white p-2">{title}</h1>

            <br />
            <br />


            <p>
                A Component is one of the core building blocks of React. ... Components in React basically return a piece of JSX code that tells what should be rendered on the screen. In React, we mainly have two types of components: Functional Components: Functional components are simply javascript functions.
            </p>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>

                <tbody>
                    {userInfo}
                </tbody>
            </table>

        </div>

    </React.Fragment>)
}

export default Userdata