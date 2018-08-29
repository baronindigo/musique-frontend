import React, { Component } from 'react';
import singleUser from '../../services/singleUser';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

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
            this.setState({
                firstName  : thisUser.firstName,
                lastName   : thisUser.lastName,
                email      : thisUser.email,
                phone      : thisUser.phone,
                genre      : thisUser.genre,
                location   : thisUser.location,
                photo      : thisUser.photo,
                url        : thisUser.url,
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
                        <div className=''>
                            <div className="user-photo">
                                <img src={this.state.photo} alt="Profile"/>
                            </div>                         
                        </div>
                        <div><Link to={`/user/edit/${this.state.id}`} className="btn btn-info">Edit</Link></div>
                        <div className=''> {this.state.firstName} </div>
                        <div className=''> {this.state.lastName} </div>
                        <div className=''> {this.state.email} </div>
                        <div className=''> {this.state.phone} </div>
                        <div className=''> {this.state.genre} </div>
                        <div className=''> {this.state.location} </div>
                        <div className=''> {this.state.instrument} </div>
                        <div className=''> {this.state.url} </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;