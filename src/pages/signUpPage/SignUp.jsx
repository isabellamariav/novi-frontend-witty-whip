import SignInUp from '../../constants/signInUpCard/SignInUpCard.jsx';
import './SignUp.css';

function SignUp() {
    return (
        <div>
            <div className="sign-up-page">
                <SignInUp isSignUp={true}/>
            </div>
        </div>
    );
}

export default SignUp;