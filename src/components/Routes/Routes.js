import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route/*, Redirect*/ } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Signup from '../Signup/Signup';
import NavBar from '../NavBar/NavBar';
import User from '../User/User';
import Search from '../Search/Search';
import UserEdit from '../UserEdit/UserEdit';
import UserDelete from '../UserDelete/UserDelete';
import Profile from '../Profile/Profile';

class Routes extends Component {

    render() {

        /*const PrivateRoute = ({
            component : Component, ...rest }) => (
                {<Route {...rest} render={(props) => (
                checkToken() === true ? <Component {...props} /> : <Redirect to='/login' /> )}
                />}
            )*/
        

        return(
            <Router>
                <main>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path='/logout' component={Logout} />
                    <Route exact path='/user' component={User} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/user/:id' component={User} />
                    <Route exact path='/user/edit/:id' component={UserEdit} />
                    <Route exact path='/user/delete/:id' component={UserDelete} />


                    <Route exact path='/search' component={Search} />
                    <Route exact path='/profile/:id' component={Profile} />
                    


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