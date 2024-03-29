import SignInUp from '../../components/signInUpCard/SignInUpCard.jsx';
import './SignIn.css';

function SignIn() {
    return (
        <div>
            <div className="sign-in-page">
                <SignInUp isSignUp={false}/>
            </div>
        </div>
    );
}

export default SignIn;
