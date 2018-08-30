import React, { Component } from 'react';
import FormErrors from '../FormErrors/FormErrors';
import login from '../../services/login';
import { Link } from 'react-router-dom';

import './Login.css';

class Login extends Component{

    state={
        email:'',
        password:'',
        emailValid: false,
        passwordVaild: false,
        formErrors: {email:'', password:''},
        formValid: false,
        errorMessage: ''
    }

    submitForm = (e) => {
        e.preventDefault();
        login(this.state).then((resp) => {
            if (resp.status === 200) {
                let token = resp.data.token;
                localStorage.setItem('music_soul_token', token);
                this.props.history.push('/search');
            } else {
                console.log(resp.data);
            }

        }).catch((err) => {
            console.log(err);
        })
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            ()=>{this.validateField(name,value)});
        console.log(this.state.email,'<<<email')
        console.log(this.state.password,'<<<<pass')
    }

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordVaild = this.state.passwordVaild;

        switch(fieldName){
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
                passwordVaild = value.length >=6;
                fieldValidationErrors.password = passwordVaild ? '' : 'is too short :(';
                break;
                default:
                break;
        }
        this.setState({formErrors:fieldValidationErrors,
        emailValid:emailValid,
    passwordVaild:passwordVaild},this.validateForm);
    }

    validateForm(){
        this.setState({formValid: this.state.emailValid && this.state.passwordVaild});
    }

    errorClass(error){
        return(error.length === 0 ? '' : 'has-error')
    }

    error=()=>{
        if(this.state.errorMessage.length === 0){
            return <p>{this.state.errorMessage}</p>
        }
        return <p>error</p>
    }

    render(){    
        return(
            <div className="container">
                <div className="row">
                    <div className='login-page col-sm-8 col-md-8 col-lg-8'>
                        <div className='form'>
                            <div className="app-logo">
                                <img src="https://firebasestorage.googleapis.com/v0/b/musicsoul-3f0f9.appspot.com/o/music_soul.jpg?alt=media&token=a7d77c93-4688-45ce-85ca-a987265ee8e1" alt="App Logo Must be here" />
                            </div>
                            <div className='panel panel-default'>
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                            <div>
                                <p>{this.error}</p>
                            </div>
                            <form className='login-form' onSubmit={this.submitForm}>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="email" required className='form-control' name='email'
                                        placeholder='Email' value={this.state.email}
                                        onChange={this.handleUserInput}/>
                                </div>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" required className='form-control' name='password'
                                        placeholder='Password' value={this.state.password}
                                        onChange={this.handleUserInput}/>
                                </div>
                                <button type='submit' className="btn btn-info btb-block">Login</button>

                                <p className='message'>No te has Registrado? Crea una <Link to="/signup">nueva cuenta</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;