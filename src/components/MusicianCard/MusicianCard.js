import React, { Component } from 'react';
import './MusicianCard.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa'; 
import { FaTwitter } from 'react-icons/fa';


class MusicianCard extends Component{

    state = {
        user: this.props.user
    }
    
    loadPicture() {
        if (this.state.user.photo !== "") {
            return(
                <img className="card-img-top" src = {this.state.user.photo} alt="musician" />
            )
        }
    }

    render(){
        return(
            <div className = "col-lg-4">
                <div className = "col-mb-4 card-contour">
                    <div className = "card-body card-body-style" onClick = {() => this.props.redirect(this.state.user._id)}>
                        {this.loadPicture()}
                        <h4 className = "card-title">{this.state.user.firstName} {this.state.user.lastName}</h4>
                        <h6 className = "text-muted card-subtitle mb-6">{this.state.user.instrument.name}</h6>
                        <p className = "card-text">Toco un instrumento y bla bla bla bla.</p>
                        <div className = "footer-social-media">
                            <Link className = "icon-separation" to = '#'><FaFacebook/></Link>
                            <Link to = '#'><FaTwitter/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicianCard;