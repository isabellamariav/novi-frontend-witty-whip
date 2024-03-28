import { Link } from 'react-router-dom';
import NavButton from '../navButton/NavButton';
import logo from '../../assets/logo.jpg';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <div className="top-navbar">
                <div className="left-section">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="center-section">
                    <div className="website-name">Witty Whip</div>
                </div>
                <div className="right-section">
                    <div className="sign-in-button">
                        <Link to="/signin">
                            <NavButton text="Sign In" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bottom-navbar">
                <NavItem to="/home" text="Home" />
                <NavItem to="/all-recipes" text="All Recipes" />
                <NavItem to="/questionnaire" text="Questionnaire" />
                <NavItem to="/profile" text="Profile" />
                <NavItem to="/about" text="About" />
            </div>
        </div>
    );
};

const NavItem = ({ to, text }) => {
    return (
        <Link to={to}>
            <NavButton text={text} />
        </Link>
    );
};

export default Navigation;
