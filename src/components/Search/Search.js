import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MusicianCard from '../MusicianCard/MusicianCard';
import allUsers from '../../services/allUsers';
import './Search.css'

class Search extends Component{

    state = {
        users:'',
        usersFiltered:'',
        instrumentSelected:''
    }

    componentDidMount(){
        allUsers().then((resp) => {
            console.log(resp.data);
            this.setState({
                users : resp.data.data.allUsers
            });
        }).catch((err) => {
            console.log(err);
        })
    }

    searchActivity = (inst) => {
        this.setState({
            instrumentSelected:inst
        })
    }


    renderPlayers = () => {
        
        if(this.state.users !== ''){
            
            let players = this.state.users.map((user,index) => {
                
                
                    if(user.instrument._id === this.state.instrumentSelected){
                        return(
                            <MusicianCard
                                key = {index}
                                user = {user}
                            />
                        )
                    }
                
            });
            return players;
        }else{
            console.log("No existen datos.")
        }
    }

    render(){
        return(
            <div>
                <h1>Search for band member!</h1>
                <SearchBar searchActivity = {this.searchActivity}/>
                <div className = "container">
                    <div className = "row">
                        {this.renderPlayers()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;