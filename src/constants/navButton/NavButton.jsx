import PropTypes from "prop-types";
import "./NavButton.css";

const NavButton = ({ text }) => {
    return <button className="nav-button">{text}</button>;
};

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default NavButton;