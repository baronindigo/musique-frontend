import React, { Component } from 'react';
import signup from '../../services/signup';
import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';

import './Signup.css';

class Signup extends Component {

    state = {
        name           : '',
        lastName       : '',
        email          : '',
        password       : '',
        check_password : '',
        birthDate      : '',
        phone          : '',
        photo          : '',
    }

    validatePasswords(password, passwordToVerify) {
        if (password === passwordToVerify) {
            return true;
        } else {
            alert("Passwords don't match");
            return false;
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.validatePasswords(this.state.password, this.state.check_password)) {
            signup(this.state).then((response) => {
                console.log(response.data)
                this.props.history.push('/login')
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    handlerUploadSuccess = (filename) => {
        console.log(filename);
        Firebase.storage().ref('images').child(filename)
            .getDownloadURL().then((url) => {
                this.setState({photo:url})
            })
    }

    onInputCheck = (event) => {
        let name  = event.target.name;
        let value = event.target.value;

        this.setState({
            [name] : value
        })
    }

    render(){
        return(
                <div className="container">
                    <div className="row justify-content-center centered-form">
                        <div className="col-xs-12 col-sm-8 col-md-10 col-sm-offset-2 col-md-offset-4">
                            <div className="panel panel-default container">
                                <div className="app-logo">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/musicsoul-3f0f9.appspot.com/o/music_soul.jpg?alt=media&token=a7d77c93-4688-45ce-85ca-a987265ee8e1" alt="App Logo Must be here" />
                                </div>
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please sign up for Music Soul</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.onFormSubmit}>
                                        <div className="row">

                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                <img src={this.state.photo} alt="Profile" />
                                                <FileUploader 
                                                    accept="image/*"
                                                    randomizeFilename
                                                    storageRef={Firebase.storage().ref('images')}
                                                    onUploadError={error => console.log(error)}
                                                    onUploadSuccess={this.handlerUploadSuccess} />
                                                </div>
                                            </div>

                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="firstName" className="form-control input-sm" placeholder="First Name" value={this.state.firstName} onChange={this.onInputCheck} />
                                                </div>
                                            </div>

                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="lastName" className="form-control input-sm" placeholder="Last Name" value={this.state.lastName} onChange={this.onInputCheck} />
                                                </div>
                                            </div>

                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="date" name="birthDate" className="form-control input-sm" placeholder="dd/mm/aaaa" value={this.state.birthDate} onChange={this.onInputCheck} />
                                                </div>
                                            </div>

                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone" className="form-control input-sm" placeholder="Phone Number" value={this.state.phone} onChange={this.onInputCheck} />
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="email" className="form-control input-sm" placeholder="E-mail" value={this.state.email} onChange={this.onInputCheck} />
                                                </div>
                                            </div>
                                            
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="password" id="password" name="password" className="form-control input-sm" placeholder="Password" value={this.state.password} onChange={this.onInputCheck} />
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="password" id="check_password" name="check_password" className="form-control input-sm" placeholder="Confirm Password" value={this.state.check_password} onChange={this.onInputCheck} />
                                                </div>
                                            </div>
                                        
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="submit" value="Register" className="btn btn-info btb-block" />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default Signup;