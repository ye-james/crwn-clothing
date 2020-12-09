import React from 'react'
import { signInWithGoogle } from '../firebase/firebase.utils';


import FormInput from './FormInput'
import CustomButton from './CustomButton'
import "../css/SignIn.styles.scss"
import CustomBottom from './CustomButton';


class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }



    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="email"
                        required />
                    
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomBottom type="submit">Sign In</CustomBottom>
                        <CustomBottom onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomBottom>
                    </div>

                </form>
            </div> 
        )
    }
}

export default SignIn;