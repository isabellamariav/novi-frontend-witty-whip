// Navigation.jsx
import { Link } from 'react-router-dom';
import NavButton from '../navButton/NavButton';
import logo from '../../assets/logo.jpg';
import homeIcon from '../../assets/navIcons/homeIcon.png';
import recipesIcon from '../../assets/navIcons/recipesIcon.png';
import questionnaireIcon from '../../assets/navIcons/questionnaireIcon.png';
import profileIcon from '../../assets/navIcons/profileIcon.png';
import aboutIcon from '../../assets/navIcons/abouIcon.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navbar">
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
                <NavItem to="/home" text="Home" icon={homeIcon} />
                <NavItem to="/all-recipes" text="Recipes" icon={recipesIcon} />
                <NavItem to="/questionnaire" text="Questionnaire" icon={questionnaireIcon} />
                <NavItem to="/profile" text="Profile" icon={profileIcon} />
                <NavItem to="/about" text="About" icon={aboutIcon} />
            </div>
        </div>
    );
};

const NavItem = ({ to, text, icon }) => {
    return (
        <Link to={to}>
            <NavButton text={text} icon={icon} />
        </Link>
    );
};

export default Navigation;
