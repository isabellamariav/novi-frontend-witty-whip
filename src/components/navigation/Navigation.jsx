import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavButton from '../navButton/NavButton';
import logo from '../../assets/logo.jpg';
import homeIcon from '../../assets/navIcons/homeIcon.png';
import recipesIcon from '../../assets/navIcons/recipesIcon.png';
import questionnaireIcon from '../../assets/navIcons/questionnaireIcon.png';
import ingredientsIcon from '../../assets/navIcons/ingredientsIcon.png';
import profileIcon from '../../assets/navIcons/profileIcon.png';
import aboutIcon from '../../assets/navIcons/abouIcon.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <header className="navbar">
            <div className="top-navbar">
                <div className="left-section">
                    <nav className="logo">
                        <Link to="/home">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </nav>
                </div>
                <div className="center-section">
                    <nav className="website-name">
                        <Link to="/home">Witty Whip</Link>
                    </nav>
                </div>
                <div className="right-section">
                    <nav className="sign-in-button">
                        <NavItem to="/authentication" text="Sign in" icon={profileIcon} />
                    </nav>
                </div>
            </div>

            <nav className="bottom-navbar">
                <NavItem to="/home" text="Home" icon={homeIcon} />
                <NavItem to="/all-recipes" text="Recipes" icon={recipesIcon} />
                <NavItem to="/questionnaire" text="Questionnaire" icon={questionnaireIcon} />
                <NavItem to="/recipe-by-ingredients" text="Search by Ingredients" icon={ingredientsIcon} />
                <NavItem to="/about" text="About" icon={aboutIcon} />
            </nav>
        </header>
    );
};

const NavItem = ({ to, text, icon }) => {
    return (
        <Link to={to}>
            <NavButton text={text} icon={icon} />
        </Link>
    );
};

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

export default Navigation;
