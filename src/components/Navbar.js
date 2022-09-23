
import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {

    const token = localStorage.getItem('mytoken')

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to = {token ? "/articles" : "/"} className="navbar-brand text-style " >BlogApp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                {token ? 
                <>
                <li className="nav-item active">
                    <Link to = "/articles " className="nav-link">Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">Add Article</Link>
                </li>
                <li className="nav-item">
                    <Link to=" " className="nav-link" 
                    onClick={() => localStorage.clear()}
                    >Logout</Link>
                </li>
                </>
                :
                <>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to ="/register" className="nav-link" >Register</Link>
                </li>
                </>
                }
                </ul>
            </div>
            </nav>  
    )
}

export default Navbar