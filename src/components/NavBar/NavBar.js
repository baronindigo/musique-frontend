import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import payload from '../../resolvers/payload';

class NavBar extends Component {

    changeProfile = () => {
        const token = localStorage.getItem('music_soul_token');
        
        if (token !== null) {
            let pl = payload(token);

            return(
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to={`/user/${pl.id}`}>Welcome, {pl.email}</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </ul>
            )
            
        } else {
            return(
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                </ul>
            )
        }

    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Musique</Link>
                <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">{this.changeProfile()}</div>
            </nav>
        )
    }
}

export default NavBar;