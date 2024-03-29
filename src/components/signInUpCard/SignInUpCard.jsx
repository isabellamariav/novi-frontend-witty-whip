import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../input/Input.jsx';
import CardButton from '../cardButton/CardButton.jsx';
import './SignInUpCard.css';

const SignInUp = ({isSignUp}) => {
    return (
        <div className="sign-in-up-card">
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <div className="input-container">
                <Input type="text" label="Username" placeholder="Enter your username"/>
                <Input type="password" label="Password" placeholder="Enter your password"/>
                {isSignUp && <Input type="email" label="Email" placeholder="Enter your email address"/>}
            </div>
            <div className="button-container">
                <CardButton>
                    <Link to={isSignUp ? '/signin' : '/signup'}>
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </Link>
                </CardButton>
                <CardButton>
                    <Link to="/home">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Link>
                </CardButton>
            </div>
        </div>
    );
};

SignInUp.propTypes = {
    isSignUp: PropTypes.bool.isRequired,
};

export default SignInUp;
