import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagenotfound() {
    return (<>
        <div>

            <h1>404 ERROR</h1>
            <h2>Page Not Found</h2>

            <Link to="/home">Goto Home</Link>

        </div>
    </>)
}
