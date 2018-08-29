import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
//import Signup from '../Signup/Signup';
import NavBar from '../NavBar/NavBar';
import User from '../User/User';
import Search from '../Search/Search';

class Routes extends Component {

    render() {

        const PrivateRoute = ({
            component : Component, ...rest }) => (
                {/*<Route {...rest} render={(props) => (
                checkToken() === true ? <Component {...props} /> : <Redirect to='/login' /> )}
                />*/}
            )
        

        return(
            <Router>
                <main>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path='/user' component={User} />
                    <Route exact path = '/search' component = { Search } />

                    {/*<Route exact path="/signup" component={Signup} />*/}

                    {/*
                    <PrivateRoute exact path='/logout' component={Logout} />
                    <PrivateRoute exact path='/movies' component={Movies} />
                    <PrivateRoute exact path='/movie/:id' component={Movie} />
                    <PrivateRoute exact path='/watch/:id' component={Watch} />
                    <PrivateRoute exact path='/movies/add' component={FormMovies} />
                    <PrivateRoute exact path='/movies/delete/:id' component={DeleteMovie} />
                    <PrivateRoute exact path='/movies/update/:id' component={UpdateMovie} />

                    <PrivateRoute exact path='/user/:id' component={User} />
                    <PrivateRoute exact path='/user/edit/:id' component={UpdateUser} />
                    */}
                </main>
            </Router>
        )
    }
}

export default Routes;