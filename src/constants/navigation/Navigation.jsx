import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from '../navButton/NavButton';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            {/* Bovenste navigatiebalk */}
            <div className="top-navbar">
                <div className="logo">Logo</div>
                <div className="website-name">Witty Whip</div>
                <div className="sign-in-button">
                    <Link to="/signin">
                        <NavButton text="Sign In" />
                    </Link>
                </div>
            </div>

            {/* Onderste navigatiebalk */}
            <div className="bottom-navbar">
                <Link to="/about">
                    <NavButton text="About" />
                </Link>
                <Link to="/all-recipes">
                    <NavButton text="All Recipes" />
                </Link>
                <Link to="/home">
                    <NavButton text="Home" />
                </Link>
                <Link to="/profile">
                    <NavButton text="Profile" />
                </Link>
                <Link to="/questionnaire">
                    <NavButton text="Questionnaire" />
                </Link>
            </div>
        </div>
    );
}

export default Navigation;