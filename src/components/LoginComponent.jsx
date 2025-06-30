import React, { useReducer, useState } from 'react'
import InputGroup from '../utils/InputGroup'
import YellowButons from '../utils/YellowButons'
import ThirdPartSignin from '../utils/ThirdPartSignin'

function LoginComponent() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_NAME':
                return { ...state, name: action.payload };
            case 'SET_EMAIL':
                return { ...state, email: action.payload };
            case 'SET_PASSWORD':
                return { ...state, password: action.payload };
            case 'SET_CONFIRM_PASSWORD':
                return { ...state, confirmPassword: action.payload };
                break;
            case 'CREATE_ACCOUNT':
                if (state.password !== state.confirmPassword) {
                    alert("Passwords do not match");
                    return state;
                }
                console.log("my innputs",state);
                
            default:
                return state;
        }
    }

    const [state,dispatch]= useReducer(reducer,{name:"",email:"",password:"",confirmPassword:""});
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
                            handle={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                        />
                        <InputGroup
                            name="email"
                            value={state.email}
                            label="Email"
                            type="email"
                            required
                            handle={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                        />
                        <InputGroup
                            name="password"
                            value={state.password}
                            label="Password"
                            type="password"
                            required
                            handle={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                        />
                        <InputGroup
                            name="confirm-password"
                            value={state.confirmPassword}
                            label="Confirm Password"
                            type="password"
                            required
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