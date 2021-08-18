import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class RestfullAPI extends Component {

    constructor(props) {
        super(props)

        this.state =
        {
            users: []
        }
    }


    render() {
        return (<>
            <div className="p-5">
                <h2 className="text-center py-2">RESTAPI with AXIOS Package</h2>


                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>TITLE</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th colSpan="3">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            this.state.users.map((res, i) => {
                                return (<tr key={i}>
                                    <td>{res.id}</td>
                                    <td>{res.title}</td>
                                    <td>${res.price}</td>
                                    <td>{res.category}</td>
                                    <td>
                                        <Link to={`/restapi/${res.id}`} className="btn btn-primary">View</Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning">Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => window.confirm(`Do You delete ${res.id} Record Now?`)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>)
                            })
                        }


                    </tbody>

                </table>





            </div>
        </>)
    }


    componentDidMount() {

        //RESTAPI_URL
        let url = `https://fakestoreapi.com/products`
        axios
            .get(url)
            .then((ApiInfo) => this.setState({ users: ApiInfo.data }))
            .catch(() => console.error("API DATA FECTHING FAILED"));

    }

}
