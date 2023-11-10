import React from "react";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

        handleSubmit = async event=>{
            const {displayName, email, password, confirmPassword} = this.state;
            event.preventDefault();
            if( password!== confirmPassword){
                alert("Passwords don't match.");
                return;
            }
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName});
                this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                })
            } catch(error){
                console.error(error);
            }
        }

        handleChange = async event=>{
            const {name, value} = event.target;
            this.setState({[name]:value});
        }

  

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput className="form-input"
                               type="text" 
                               label="Display Name" 
                               handleChange={this.handleChange} 
                               value={displayName}
                               name="displayName"
                               required />
                    <FormInput className="form-input"
                               type="email" 
                               label="Email" 
                               handleChange={this.handleChange} 
                               value={email}
                               name="email"
                               required />
                    <FormInput className="form-input"
                               type="password" 
                               label="Password" 
                               handleChange={this.handleChange} 
                               value={password}
                               name="password"
                               required />
                    <FormInput className="form-input"
                               type="password" 
                               label="Confirm Password" 
                               handleChange={this.handleChange} 
                               value={confirmPassword}
                               name="confirmPassword"
                               required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;