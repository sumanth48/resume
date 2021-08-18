import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title:'',
            price:'',
            category:''

        }
    }

    render() {
        console.log(this.props.match.params.id);


        var { id, title, price,category } = this.state

        return (<>
            <div className="container py-2">

                <h4 className="py-2 text-center">Product {this.props.match.params.id}  Details Component</h4>

                <table className="table table-dark table-bordered w-50 mx-auto">

                    <tbody>

                        <tr>
                            <th>Id</th>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <th>TITLE</th>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <th>PRICE</th>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <th>CATEGORY</th>
                            <td>{category}</td>
                        </tr>
                        

                        <tr>
                            <th>
                                <Link className="btn btn-primary" to="/restapi">GoTo Previous Page</Link>
                            </th>
                            <th>
                                <button className="btn btn-primary" onClick={() => window.print()}>Print A Page</button>
                            </th>
                        </tr>

                    </tbody>

                </table>

            </div>
        </>)
    }


    componentDidMount() {

        //RESTAPI_URL
        let url = `https://fakestoreapi.com/products/${this.props.match.params.id}`
        axios
            .get(url)
            .then((ApiInfo) => this.setState(ApiInfo.data))
            .catch(() => console.error("API DATA FECTHING FAILED"));

    }

}
