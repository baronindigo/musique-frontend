import React, { Component } from 'react';
import singleUser from '../../services/singleUser';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

import './User.css';

class Home extends Component {

    state = {
        id    : this.props.match.params.id,
        youtubeID : '',
        videoData : ''
    }
    
    componentDidMount() {
        singleUser(this.state.id).then((user) => {

            let thisUser = user.data.data.singleUser;
            debugger;
            this.setState({
                firstName  : thisUser.firstName,
                lastName   : thisUser.lastName,
                email      : thisUser.email,
                phone      : thisUser.phone,
                genre      : thisUser.genre,
                location   : thisUser.location,
                photo      : thisUser.photo,
                urlYT      : thisUser.urlYT,
                urlFB      : thisUser.urlFB,
                urlTW      : thisUser.urlTW,
                instrument : thisUser.instrument.name
            })
        }).catch((err) => {
            console.log(err);
        })

    }

    loadAudition() {
        const playerOptions = {
            //height : '400',
            //width  : '800',
            playerVars : {
                autoplay : 1
            }
        }

        return(
            <YouTube 
                id="RVp5ldfuaus" 
                videoId="RVp5ldfuaus" 
                opts={playerOptions} />
        )
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className='user-page col-sm-8 col-md-8 col-lg-8'>
                        <div className='user-photo-container'>
                            <div className="user-photo">
                                <img src={this.state.photo} alt="Profile"/>
                            </div>               
                            <div class="edit-button"><Link to={`/user/edit/${this.state.id}`} className="btn btn-info">Edit</Link></div>
                        </div>

                        <table>
                            <tr>
                                <td>Firstname:</td>
                                <td>{this.state.firstName}</td>
                            </tr>

                            <tr>
                                <td>Lastname:</td>
                                <td>{this.state.lastName}</td>
                            </tr>

                            <tr>
                                <td>E-mail:</td>
                                <td>{this.state.email}</td>
                            </tr>

                            <tr>
                                <td>Phone:</td>
                                <td>{this.state.phone}</td>
                            </tr>

                            <tr>
                                <td>Genre:</td>
                                <td>{this.state.genre}</td>
                            </tr>

                            <tr>
                                <td>Location:</td>
                                <td>{this.state.location}</td>
                            </tr>

                            <tr>
                                <td>Instrument:</td>
                                <td>{this.state.instrument}</td>
                            </tr>

                            <tr>
                                <td><FaYoutube /></td>
                                <td><a href={this.state.urlYT} target="_blank">{this.state.urlYT}</a></td>
                            </tr>

                            <tr>
                                <td><FaFacebook /></td>
                                <td><a href={this.state.urlFB} target="_blank">{this.state.urlFB}</a></td>
                            </tr>

                            <tr>
                                <td><FaTwitter /></td>
                                <td><a href={this.state.urlTW} target="_blank">{this.state.urlTW}</a></td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;