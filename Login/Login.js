import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import authService from '../../authService';
import './login.scss'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            formValues: {}
        }
    }

    handleInputChange = (e) => {
        const { formValues } = this.state;

        this.setState({
            formValues: { ...formValues, [e.target.name]: e.target.value }
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const { formValues } = this.state;
        console.log({ formValues });

        axios.post('http://localhost:8081/login', {
            username: formValues.username,
            password: formValues.password
        }).then((response) => {
            console.log({ response });
            if (response.status === 200) {
                authService.setCookie(response.data.token)
                this.props.history.push('/home')
            }
        })

        // const response = await axios.post('http://127.0.0.1:8081/login', {
        //     formValues
        // })
        // console.log(response)


    }


    render() {
        return (
            <div className="d-flex justify-content-center align-items-center login bg-light text-center">
                <form className="sec" onSubmit={(e) => this.handleSubmit(e)}>
                    <h5 className="mb-4">Login Form</h5>
                    <div>
                        <input
                            type="text"
                            className="form-control py-2"
                            name="username"
                            placeholder="username"
                            onChange={this.handleInputChange}
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="form-control py-2"
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={this.handleInputChange}
                            autocomplete="off"
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        className="btn btn-warning w-100"
                    />
                </form>

            </div>
        )
    }
}

export default withRouter(Login);