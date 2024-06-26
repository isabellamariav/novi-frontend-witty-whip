import './Authentication.css';
import { useState, useEffect } from 'react';
import Loader from '../../components/loader/Loader.jsx';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../firebase/config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "firebase/auth";
import Input from '../../components/input/Input.jsx';
import CardButton from '../../components/cardButton/CardButton.jsx';

function Authentication() {
    const { signIn, signOut } = useAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [authenticationType, setAuthenticationType] = useState('signin');
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(false);
            if (user) {
                signIn(user);
            } else {
                signOut();
            }
        });
        return () => unsubscribe();
    }, [signIn, signOut]);

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
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Email sent! Check your inbox for password reset instructions.');
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    }

    return (
        <>
            {isLoading && <Loader></Loader>}

            <main className="container signin-page">
                <section className="signin-card">
                    <h2>Welcome to Witty Whip!</h2>
                    <p>Sign in or create an account to continue</p>
                    <nav className="authentication-type">
                        <CardButton onClick={() => setAuthenticationType('signin')} isActive={authenticationType === 'signin'}>
                            Sign in
                        </CardButton>
                        <CardButton onClick={() => setAuthenticationType('signup')} isActive={authenticationType === 'signup'}>
                            Sign up
                        </CardButton>
                    </nav>
                    <form className="add-form signin">
                        <Input
                            label="Email"
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleCredentials}
                        />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleCredentials}
                        />
                        {authenticationType === 'signin' ?
                            <CardButton onClick={handleSignin} isActive={true}>Sign in</CardButton>
                            :
                            <CardButton onClick={handleSignup} isActive={true}>Sign Up</CardButton>
                        }

                        {error &&
                            <div className="error">
                                {error}
                            </div>
                        }

                        <p onClick={handlePasswordReset} className="forgot-password">Forgot Password?</p>

                    </form>
                </section>
            </main>
        </>
    )
}

export default Authentication;
