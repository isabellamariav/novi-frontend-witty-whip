import PropTypes from "prop-types";
import "./NavButton.css";

const NavButton = ({ text, icon }) => {
    return (
        <button className="nav-button">
            {icon && <img src={icon} alt="Icon" className="button-icon" />}
            {text}
        </button>
    );
};

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

export default NavButton;
