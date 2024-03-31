import './Authentication.css'
import React, { useState, useEffect } from 'react';
import Loader from '../../components/loader/Loader.jsx';
import { auth } from '../../firebase/config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "firebase/auth";


function Authentication() {

    const [isLoading, setIsLoading] = useState(true);
    const [authenticationType, setAuthenticationType] = useState('signin');
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    function handleSignup(e) {
        e.preventDefault();
        setError("");

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    function handleSignin(e) {
        e.preventDefault();
        setError("");

        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    function handlePasswordReset() {
        const email = prompt('Please enter your email');
        sendPasswordResetEmail(auth, email);
        alert('Email sent! Check your inbox for password reset instructions.');
    }

    return (
        <>
            {isLoading && <Loader></Loader>}

            <div className="container signin-page">
                <section className="card">
                    <h2>Welcome to Witty Whip!</h2>
                    <p>Sign in or create an account to continue</p>
                    <div className="authentication-type">
                        <button
                            className={`btn ${authenticationType === 'signin' ? 'selected' : ''}`}
                            onClick={() => setAuthenticationType('signin')}>
                            Sign in
                        </button>
                        <button
                            className={`btn ${authenticationType === 'signup' ? 'selected' : ''}`}
                            onClick={() => setAuthenticationType('signup')}>
                            Sign up
                        </button>
                    </div>
                    <form className="add-form signin">
                        <div className="form-control">
                            <label>Email</label>
                            <input onChange={(e) => {
                                handleCredentials(e)
                            }} type="text" name="email" placeholder="Enter your email"/>
                        </div>
                        <div className="form-control">
                            <label>Password</label>
                            <input onChange={(e) => {
                                handleCredentials(e)
                            }} type="password" name="password" placeholder="Enter your password"/>
                        </div>
                        {authenticationType === 'signin' ?
                            <button onClick={(e) => {
                                handleSignin(e)
                            }} className="active btn btn-block">Sign in</button>
                            :
                            <button onClick={(e) => {
                                handleSignup(e)
                            }} className="active btn btn-block">Sign Up</button>
                        }

                        {error &&
                            <div className="error">
                                {error}
                            </div>
                        }

                        <p onClick={handlePasswordReset} className="forgot-password">Forgot Password?</p>

                    </form>
                </section>
            </div>
        </>
    )
}

export default Authentication;






