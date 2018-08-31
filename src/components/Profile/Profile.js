import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa'
import { FaMobile } from 'react-icons/fa'; 
import YouTube from 'react-youtube';
import singleUser from '../../services/singleUser';
import Pop from 'reactjs-popup';
import './Profile.css'

class Profile extends Component{

    state = {
        userData:'',
        instrument:'',
        id:this.props.match.params.id
    }

    componentDidMount(){
        singleUser(this.state.id).then((resp) => {
            console.log(resp.data.data.singleUser);
            this.setState({
                userData: resp.data.data.singleUser,
                instrument: resp.data.data.singleUser.instrument.name
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    youtube_parser(url){
        console.log(url);
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }

    loadUserVideo = () => {
        if(!this.state.userData){
            return(
                <div>
                    <h1>No existe video</h1>
                </div>
            )
        }else{
            console.log(this.state.userData);
            const playerOptions = {
                height: '500p',
                width: '800',
                play:{
                    autoplay:0
                }
            }

            let url = this.youtube_parser(this.state.userData.urlYT);

            return(
                <div>
                    <YouTube videoId = {url} opts = {playerOptions}/>
                </div>
            )
        }
    }

    usePop = (triggerObj,msg) => {
        return(
            <Pop trigger = {triggerObj} position = "top center" on = "hover">{msg}</Pop>
        )
    }

    renderUserInfo = () => {
        const iconSize = 50;

        return(
            <div className = "general-text-format">
                <h1 className = "name-format">{this.state.userData.firstName} {this.state.userData.lastName}</h1>
                <h2 className = "instrument-format">{this.state.instrument}</h2>
                <hr className = "hr-format"/>
                <p></p>
                <hr/>
                <div className = "row justify-content-around">
                    <div className = "col">
                        <Link className = "d-incline-block" to = '#'>
                            {this.usePop(<FaFacebook size = {iconSize + 'px'}/>,"FB URL")} 
                        </Link>
                    </div>
                    <div className = "col">
                        <Link className = "d-incline-block" to = '#'>
                            {this.usePop(<FaTwitter size = {iconSize + 'px'}/>,"TW URL")} 
                        </Link>
                    </div>
                    <div className = "col">
                        <Link className = "d-incline-block" to = '#'>
                            {this.usePop(<FaEnvelope size = {iconSize + 'px'}/>,this.state.userData.phone)}
                        </Link>
                    </div>
                    <div className = "col">
                        <Link className = "d-incline-block" to = '#' >
                            {this.usePop(<FaMobile size = {iconSize + 'px'}/>,this.state.userData.email)}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                <section>
                    <div className = "container-fluid">
                        <div className = "row flex-lg-row-reverse general-vp-style">
                            <div className = "col-lg-6 d-flex align-items-lg-center img-vp-style video-location">
                                {this.loadUserVideo()}
                            </div>
                            <div className = "col-lg-6 d-lg-flex align-items-lg-center shadow-box info-position">
                                {this.renderUserInfo()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Profile;