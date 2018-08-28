import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './User.css';

class Home extends Component {

    state = {
        id    : this.props.match.params.id,
        youtubeID : '',
        videoData : ''
    }
    
    componentDidMount() {}

    loadAudition() {
        //if (!this.state.movieData) {
            
        //} else {
            //let url = this.youtubeParser(this.state.movieData.url)

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
        //}
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className='user-page col-sm-8 col-md-8 col-lg-8'>
                        <div className=''>
                            <div className="user-photo">
                                <img src="https://via.placeholder.com/350x350" />
                            </div>                         
                        </div>
                        <div className=''> Username </div>
                        <div className=''> Age </div>
                        <div className=''> City </div>
                        <div className=''> Instrument </div>
                        <div className=''> Video Audition: </div>
                        <div className='user-video-audition'>{this.loadAudition()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;