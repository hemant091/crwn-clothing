import React, {useState} from "react";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({signUpStart})=> {

    const [userCredentials, setCredentials] = useState({displayName: '',
                                                        email: '',
                                                        password: '',
                                                        confirmPassword: ''});

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event=>{
            
            event.preventDefault();
            if( password!== confirmPassword){
                alert("Passwords don't match.");
                return;
            }
            signUpStart({email, password, displayName}); 
        }

    const handleChange = async event=>{
            const {name, value} = event.target;
            setCredentials({...userCredentials, [name]:value});
        }

    return(
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput className="form-input"
                        type="text" 
                        label="Display Name" 
                        handleChange={handleChange} 
                        value={displayName}
                        name="displayName"
                        required />
                <FormInput className="form-input"
                        type="email" 
                        label="Email" 
                        handleChange={handleChange} 
                        value={email}
                        name="email"
                        required />
                <FormInput className="form-input"
                        type="password" 
                        label="Password" 
                        handleChange={handleChange} 
                        value={password}
                        name="password"
                        required />
                <FormInput className="form-input"
                        type="password" 
                        label="Confirm Password" 
                        handleChange={handleChange} 
                        value={confirmPassword}
                        name="confirmPassword"
                        required />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
    
}

const matchDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, matchDispatchToProps)(SignUp);