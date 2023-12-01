import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        const {emailSignInStart} = this.props;

        emailSignInStart(email, password);
    }

    handleChange = async event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {googleSignInStart} = this.props;
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput className="form-input" name="email" type="email" handleChange={this.handleChange} label="Email" value={this.state.email} required/>
                    <FormInput className="form-input" name="password" type="password" handleChange={this.handleChange} label="Password" value={this.state.password} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isSignInWithGoogle>
                            {' '}
                            Sign In With Google
                            {' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
            
        );
    }
    
}
const matchDispatchToProps = dispatch => ({
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})

export default connect(null, matchDispatchToProps)(SignIn);