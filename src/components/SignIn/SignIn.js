import React from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';

export class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleOnChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleOnChange}
                        label="Email"
                        required
                    />
                    
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleOnChange}
                        label="Password"
                        required
                    />

                    <CustomBtn type="submit">Sign in</CustomBtn>
                </form>
            </div>
        )
    }
}

export default SignIn;
