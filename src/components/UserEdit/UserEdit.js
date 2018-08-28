import React , { Component } from 'react';

import singleUser from "../../services/singleUser";
import updateUser from "../../services/updateUser";
import { Link } from 'react-router-dom';
import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';

class UserEdit extends Component {

    state = {
        userData : "",
        name     : "",
        lastName : "",
        email    : "",
        phone    : ""
    }


    componentDidMount() {
        
        console.log(this.props.match.params.id, '>>>>');
        singleUser(this.props.match.params.id).then((resp) => {
            console.log(resp, '<><><>');
            this.setState({
                userData  : resp.data.data.singleUser,
                id        : resp.data.data.singleUser._id,
                firstName : resp.data.data.singleUser.firstName,
                lastName  : resp.data.data.singleUser.lastName,
                email     : resp.data.data.singleUser.email,
                phone     : resp.data.data.singleUser.phone,
                photo     : resp.data.data.singleUser.photo,
            })

            console.log(this.state.firstName);
        }).catch((err) => {
            console.log(err);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        updateUser(this.props.match.params.id, this.state).then((resp) => {
            console.log(resp.data.data);
            let id = resp.data.data.updateUser._id;

            this.props.history.push('/user/'+id)

        }).catch((err) => {
            console.log(err);
        })
    }

    onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        this.setState({
            [name] : value
        })
    }

    handlerUploadSuccess = (filename) => {
        console.log(filename);
        Firebase.storage().ref('images').child(filename)
            .getDownloadURL().then((url) => {
                this.setState({photo:url})
            })
    }

    loadData() {
        if (this.state.userData === "") {
            return(
                <div></div>
            )
        } else {
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <img src={this.state.photo} alt="Profile" />
                            <FileUploader 
                                accept="image/*"
                                randomizeFilename
                                storageRef={Firebase.storage().ref('images')}
                                onUploadError={error => console.log(error)}
                                onUploadSuccess={this.handlerUploadSuccess} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChangeInput}  />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Lastname:</label>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChangeInput}  />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.onChangeInput}  />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name="phone" value={this.state.phone} onChange={this.onChangeInput} />
                        </div>
                        <Link className="btn btn-info" to={`/user/${this.state.id}`}>Back</Link>
                        <button className="btn btn-info" type="submit">Update</button>
                        <Link className="btn btn-danger" to={`/user/delete/${this.state.id}`}>Delete</Link>
                    </form>
                </div>
            )
        }
    }

    render(){
        return(
            <div>{this.loadData()}</div>
        )
    }
}

export default UserEdit;