import React, { useReducer, useState } from 'react'
import InputGroup from '../utils/InputGroup'
import YellowButons from '../utils/YellowButons'
import ThirdPartSignin from '../utils/ThirdPartSignin'
import { emailValidator, passwordValidator, usernameValidator } from '../utils/helpers'
import { Navigate, useNavigate } from 'react-router-dom'
function LoginComponent() {
    const [canSubmit,setSubmit]= useState(false);
    const navigate = useNavigate()
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_NAME':
                console.log("name is changing");
                let namevalidation = usernameValidator(action.payload);
                if (!namevalidation.valid) {
                    state.validationMessages.name = namevalidation.message;
                    state.classNames.name = namevalidation.className;
                    setSubmit(false);
                }else{
                    state.validationMessages.name = "";
                    state.classNames.name = "success";
                    setSubmit(true);
                }                
                return { ...state, name: action.payload };
            case 'SET_EMAIL':
                let emailValidation = emailValidator(action.payload)
                if (!emailValidation.valid) {
                    state.validationMessages.email = emailValidation.message;
                    state.classNames.email = emailValidation.className;
                    setSubmit(false)
                }else{
                    state.validationMessages.email = "";
                    state.classNames.email = "success";
                    setSubmit(true);
                }
                return { ...state, email: action.payload };
            case 'SET_PASSWORD':
                let pwd = passwordValidator(action.payload);
                if (!pwd.valid) {
                    state.validationMessages.password = pwd.message;
                    state.classNames.password = pwd.className;
                    setSubmit(false);
                }else{
                    state.validationMessages.password = "";
                    state.classNames.password = "success";
                    setSubmit(true);
                }
                return { ...state, password: action.payload };
            case 'SET_CONFIRM_PASSWORD':
                if (state.password !== action.payload) {
                    state.validationMessages.confirmPassword = "Passwords do not match";
                    state.classNames.confirmPassword = "error";
                    setSubmit(false);
                } else {
                    state.validationMessages.confirmPassword = "";
                    state.classNames.confirmPassword = "success";
                    setSubmit(true);
                }
                return { ...state, confirmPassword: action.payload };
                break;
            case 'CREATE_ACCOUNT':
                if(canSubmit){
                    localStorage.setItem("user", JSON.stringify(state));
                    navigate("/");
                }

            default:
                return state;
        }
    }

    const [state,dispatch]= useReducer(reducer,{name:"",email:"",password:"",confirmPassword:"",validationMessages:{
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    classNames: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
});
    return (
        <div className="container-login">
            <div className="left">
                <h1>Traver</h1>
                <p>Book your trip in minute, get full Control for much longer.
                </p>
            </div>
            <div className="login-template">
                <div className="form">
                    <h1>Create Account</h1>
                    <div className="social">
                        <ThirdPartSignin provider="google" />
                        <ThirdPartSignin provider="facebook" />
                    </div>
                    <p>-OR-</p>
                    <form id="form">

                        <InputGroup
                            name="name"
                            value={state.name}
                            label="Full Name"
                            type="text"
                            required
                            className={state.classNames.name}
                            validationMessage={state.validationMessages.name}
                            handle={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                        />
                        <InputGroup
                            name="email"
                            value={state.email}
                            label="Email"
                            type="email"
                            required
                            className={state.classNames.email}
                            validationMessage={state.validationMessages.email}
                            handle={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                        />
                        <InputGroup
                            name="password"
                            value={state.password}
                            label="Password"
                            type="password"
                            required
                            className={state.classNames.password}
                            validationMessage={state.validationMessages.password}
                            handle={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                        />
                        <InputGroup
                            name="confirm-password"
                            value={state.confirmPassword}
                            label="Confirm Password"
                            type="password"
                            required
                            className={state.classNames.confirmPassword}
                            validationMessage={state.validationMessages.confirmPassword}
                            handle={(e) => dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: e.target.value })}
                        />

                    </form>
                    <YellowButons id="login-btn" text="Create Account" action={() => dispatch({ type: 'CREATE_ACCOUNT' })} />

                    <p>Already have an account? <a href="login.html">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent