import React, {useState} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCreadentials, setCredentials] = useState({email:'', password:''});
    const {email, password} = userCreadentials;
    const handleSubmit = async event =>{
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = async event =>{
        const {value, name} = event.target;
        setCredentials({...userCreadentials, [name]: value});
    }

    return(
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput className="form-input" name="email" type="email" handleChange={handleChange} label="Email" value={email} required/>
                <FormInput className="form-input" name="password" type="password" handleChange={handleChange} label="Password" value={password} required/>
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
const matchDispatchToProps = dispatch => ({
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})

export default connect(null, matchDispatchToProps)(SignIn);